"use client";

import { Plus, GripVertical, FileText, ChevronRight } from "lucide-react";

export default function ClustersPage() {
  const clusters = [
    {
      id: "C-01",
      title: "Class 10 - Mathematics Mastery",
      modules: 12,
      price: "₹15,000",
      students: 45
    },
    {
      id: "C-02",
      title: "Class 12 - Physics (CBSE + JEE)",
      modules: 18,
      price: "₹24,000",
      students: 82
    },
    {
      id: "C-03",
      title: "Class 8 - Foundation Science",
      modules: 10,
      price: "₹12,000",
      students: 34
    }
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-1">Clusters & Modules</h2>
          <p className="text-sm text-slate-500">Manage the educational packages and embed study modules.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 rounded-xl text-sm font-bold transition-all">
          <Plus className="w-4 h-4" />
          Create New Cluster
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cluster List */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">Active Clusters</h3>
          {clusters.map((cluster, i) => (
            <div key={cluster.id} className={`p-4 rounded-xl border cursor-pointer transition-all ${i === 0 ? 'bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/30' : 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 hover:border-primary/20'}`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 pr-4">{cluster.title}</h4>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{cluster.id}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                <span>{cluster.modules} Modules</span>
                <span className="font-bold text-green-600 dark:text-green-400">{cluster.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Module Editor */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-full overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{clusters[0].title}</h3>
                <p className="text-sm text-slate-500">Arrange and edit study modules for this cluster.</p>
              </div>
              <button className="text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition-colors">
                Add Module
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto bg-slate-50/30 dark:bg-slate-950/50 space-y-3">
              {[
                "1. Real Numbers & Polynomials",
                "2. Pair of Linear Equations",
                "3. Quadratic Equations",
                "4. Arithmetic Progressions",
                "5. Assessment Test 1"
              ].map((module, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group hover:border-primary/20 transition-colors">
                  <GripVertical className="w-5 h-5 text-slate-400 cursor-grab" />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-white text-sm">{module}</p>
                    {i === 4 ? (
                      <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1 font-medium bg-yellow-50 dark:bg-yellow-900/10 inline-block px-2 py-0.5 rounded">Test Module</p>
                    ) : (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">Contains Study Guide PDF, 20 Practice Questions.</p>
                    )}
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
