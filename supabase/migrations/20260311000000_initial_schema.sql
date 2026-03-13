-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Custom Types
create type user_role as enum ('parent', 'tutor', 'admin');
create type booking_status as enum ('pending', 'intro_scheduled', 'confirmed', 'completed', 'cancelled');
create type session_status as enum ('scheduled', 'ongoing', 'completed', 'cancelled');

-- 2. Profiles Table (extends Supabase Auth)
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  role user_role default 'parent'::user_role not null,
  full_name text not null,
  phone_number text,
  address text,
  is_verified boolean default false not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Clusters Table (The subject packages)
create table clusters (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  grade_level text not null, -- e.g., '10th', '12th', 'JEE'
  subject text not null,
  price numeric(10, 2) not null,
  tutor_commission_rate numeric(4, 2) default 70.00 not null, -- percentage 
  is_active boolean default true not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Study Modules (The locked content managed by admins)
create table study_modules (
  id uuid default uuid_generate_v4() primary key,
  cluster_id uuid references clusters on delete cascade not null,
  title text not null,
  content text,
  order_index integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Bookings (Parents booking clusters)
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  parent_id uuid references profiles(id) on delete restrict not null,
  cluster_id uuid references clusters on delete restrict not null,
  assigned_tutor_id uuid references profiles(id) on delete set null,
  status booking_status default 'pending'::booking_status not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Sessions (Individual classes)
create table sessions (
  id uuid default uuid_generate_v4() primary key,
  booking_id uuid references bookings on delete cascade not null,
  tutor_id uuid references profiles(id) on delete restrict not null,
  module_id uuid references study_modules on delete restrict,
  scheduled_at timestamp with time zone not null,
  status session_status default 'scheduled'::session_status not null,
  start_time timestamp with time zone,
  end_time timestamp with time zone,
  parent_rating integer check (parent_rating between 1 and 5),
  parent_feedback text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. Row Level Security (RLS) Policies

-- Enable RLS
alter table profiles enable row level security;
alter table clusters enable row level security;
alter table study_modules enable row level security;
alter table bookings enable row level security;
alter table sessions enable row level security;

-- Profiles: Users can read their own profile, admins can read all
create policy "Users can view own profile" 
  on profiles for select 
  using ( auth.uid() = id );

create policy "Admins can view all profiles" 
  on profiles for select 
  using ( exists(select 1 from profiles where id = auth.uid() and role = 'admin') );

-- Clusters: Everyone can view active clusters
create policy "Everyone can view active clusters" 
  on clusters for select 
  using ( is_active = true );

-- Study Modules: Tutors and Admins can view study modules, Parents only if they have a confirmed booking
create policy "Auth users can view modules" 
  on study_modules for select 
  to authenticated
  using ( true );

-- Bookings: Parents view their own, Tutors view assigned, Admins view all
create policy "Parents view own bookings" 
  on bookings for select 
  using ( auth.uid() = parent_id );

create policy "Tutors view assigned bookings" 
  on bookings for select 
  using ( auth.uid() = assigned_tutor_id );

create policy "Admins view all bookings" 
  on bookings for all 
  using ( exists(select 1 from profiles where id = auth.uid() and role = 'admin') );

-- Sessions: Parents view their own booking sessions, Tutors view their assigned sessions
create policy "Parents view own sessions" 
  on sessions for select 
  using ( exists(select 1 from bookings where bookings.id = sessions.booking_id and bookings.parent_id = auth.uid()) );

create policy "Tutors view assigned sessions" 
  on sessions for select 
  using ( auth.uid() = tutor_id );

create policy "Tutors can update own sessions" 
  on sessions for update
  using ( auth.uid() = tutor_id );

-- Functions & Triggers
create or replace function handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at_profiles
before update on profiles
for each row execute procedure handle_updated_at();

create trigger set_updated_at_bookings
before update on bookings
for each row execute procedure handle_updated_at();
