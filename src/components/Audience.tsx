import { motion } from 'motion/react';
import { Building2, UserCircle2, CheckCircle2 } from 'lucide-react';

export default function Audience() {
  return (
    <section id="audience" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Who It's For
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Built for compliance, designed for sovereignty. Agentium serves two distinct but overlapping needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Enterprises & Teams</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              For organizations that need transparent, auditable, governed AI automation they can run on their own infrastructure.
            </p>
            <ul className="space-y-4">
              {[
                'Full audit trail of every AI decision',
                'Strict role-based constitutional control',
                'Data never leaves your servers by default',
                'Compliance-friendly execution sandbox',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Individual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-5 text-zinc-900 dark:text-white">
              <UserCircle2 className="w-48 h-48" />
            </div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center mb-6">
                <UserCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Power Users & Devs</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                For developers and self-hosters who want a sovereign, local-first personal AI agent system they fully control.
              </p>
              <ul className="space-y-4">
                {[
                  'Build agentic workflows without vendor lock-in',
                  'Local-first experimentation and automation',
                  'Multi-provider failover (OpenAI, Anthropic, Ollama)',
                  'Complete sovereignty over your data and knowledge',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
