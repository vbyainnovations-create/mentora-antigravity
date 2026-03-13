import { Settings, Users, BookOpen, Activity, Link as LinkIcon, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
          <Link href="/admin" className="flex items-center gap-2">
            <Image src="/mentora-logo-clean.png" alt="Mentora Admin" width={140} height={40} className="h-8 w-auto object-contain" />
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
            <Activity className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/admin/tutors" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">
            <Users className="w-5 h-5" />
            Tutor Management
          </Link>
          <Link href="/admin/clusters" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">
            <BookOpen className="w-5 h-5" />
            Clusters & Modules
          </Link>
          <Link href="/admin/assignments" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">
            <LinkIcon className="w-5 h-5" />
            Match Engine
          </Link>
        </nav>
        
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 font-medium transition-colors">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              AM
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Admin Moderator</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
