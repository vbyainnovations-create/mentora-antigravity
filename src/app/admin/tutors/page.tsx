"use client";

import { Check, X, Search, Filter, Mail, Phone, Eye } from "lucide-react";
import { useState } from "react";

export default function TutorsPage() {
  const [tutors] = useState([
    { id: "T-098", name: "Rahul Sharma", subject: "Physics", status: "pending", location: "South Delhi", appliedAt: "2 hours ago" },
    { id: "T-097", name: "Anita Desai", subject: "Mathematics", status: "verified", location: "Gurugram", appliedAt: "2 days ago" },
    { id: "T-096", name: "Vikram Singh", subject: "Chemistry", status: "rejected", location: "Noida", appliedAt: "1 week ago" },
    { id: "T-095", name: "Pooja V.", subject: "Biology", status: "verified", location: "Dwarka", appliedAt: "1 month ago" },
    { id: "T-094", name: "Sunil K.", subject: "English Literature", status: "pending", location: "East Delhi", appliedAt: "3 hours ago" },
  ]);

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-1">Tutor Management</h2>
          <p className="text-sm text-slate-500">Verify and assign educators to parent requests.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search tutors..." 
              className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 dark:text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Tutor Details</th>
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Subject</th>
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Location</th>
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Applied</th>
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white">Status</th>
              <th className="py-4 px-6 text-sm font-bold text-slate-900 dark:text-white text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {tutors.map((tutor) => (
              <tr key={tutor.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-400">
                      {tutor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{tutor.name}</p>
                      <p className="text-xs text-slate-500">{tutor.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-slate-700 dark:text-slate-300">{tutor.subject}</td>
                <td className="py-4 px-6 text-sm text-slate-700 dark:text-slate-300">{tutor.location}</td>
                <td className="py-4 px-6 text-sm text-slate-700 dark:text-slate-300">{tutor.appliedAt}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                    tutor.status === 'verified' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20' : 
                    tutor.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20' : 
                    'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'
                  }`}>
                    {tutor.status.charAt(0).toUpperCase() + tutor.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="View Profile">
                      <Eye className="w-4 h-4" />
                    </button>
                    {tutor.status === 'pending' && (
                      <>
                        <button className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-500/10 rounded-lg transition-colors" title="Approve">
                          <Check className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors" title="Reject">
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
