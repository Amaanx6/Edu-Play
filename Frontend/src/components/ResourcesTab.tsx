// components/tabs/ResourcesTab.tsx
import { motion } from 'framer-motion';
import { Codesandbox } from 'lucide-react';

export const ResourcesTab = () => (
  <motion.div className="space-y-8">
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Codesandbox className="h-8 w-8 text-green-500" />
        <span>Learning Resources</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Add resources here */}
      </div>
    </div>
  </motion.div>
);