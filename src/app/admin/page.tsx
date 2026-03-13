"use client";

import { Users, AlertCircle, ArrowUpRight, TrendingUp, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
  const [stats] = useState([
    { label: "Active Sessions", value: "24", change: "+12%", trend: "up", icon: <TrendingUp className="w-5 h-5 text-green-500" /> },
    { label: "Pending Matches", value: "18", change: "-5%", trend: "down", icon: <Clock className="w-5 h-5 text-yellow-500" /> },
    { label: "Verified Tutors", value: "142", change: "+4", trend: "up", icon: <CheckCircle className="w-5 h-5 text-primary" /> },
    { label: "Total Revenue", value: "₹4.2L", change: "+22%", trend: "up", icon: <ArrowUpRight className="w-5 h-5 text-secondary" /> },
  ]);

  const [recentSessions] = useState([
    { id: "S-1042", subject: "Grade 10 - Mathematics", tutor: "Sarah Jenkins", parent: "Michael B.", status: "Live", duration: "45m" },
    { id: "S-1041", subject: "JEE Mains - Physics", tutor: "Dr. A. Kumar", parent: "Riya S.", status: "Live", duration: "1h 12m" },
    { id: "S-1040", subject: "Grade 8 - Science", tutor: "Priya M.", parent: "David W.", status: "Completed", duration: "2h" },
  ]);

  const [pendingTutors] = useState([
    { name: "Rahul Sharma", subject: "Physics", experience: "5 Years", status: "Pending Verification" },
    { name: "Anita Desai", subject: "Mathematics", experience: "3 Years", status: "Document Review" },
  ]);

  return (
    <div className="p-8 space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'text-green-600 bg-green-100 dark:bg-green-500/10' : 'text-red-600 bg-red-100 dark:bg-red-500/10'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Live Monitoring */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900">
              <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Live Session Monitoring
              </h2>
              <button className="text-sm text-primary font-medium hover:underline">View All</button>
            </div>
            
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentSessions.map((session, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                      {session.id.split('-')[1].substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{session.subject}</p>
                      <p className="text-xs text-slate-500 mt-1">Tutor: {session.tutor} • Parent: {session.parent}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${session.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400'}`}>
                      {session.status}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{session.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 line-clamp-2">
            <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              Requires Action
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/50 rounded-xl">
                <p className="font-bold text-slate-900 dark:text-white text-sm">8 Tutors Awaiting Approval</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-3">Please review the KYC documents uploaded in the last 24 hours.</p>
                <button className="text-xs font-bold bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 border-yellow-500/20">Review Now</button>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl">
                <p className="font-bold text-slate-900 dark:text-white text-sm">3 Unmatched Intro Sessions</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 mb-3">Clusters booked for this weekend lack assigned tutors in North Delhi region.</p>
                <button className="text-xs font-bold bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 border-red-500/20">Assign Tutors</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
