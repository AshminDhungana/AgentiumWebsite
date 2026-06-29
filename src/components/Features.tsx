import { motion } from 'motion/react';
import { Vote, ScrollText, Library, Cpu, ShieldAlert, Inbox, Hash, Workflow } from 'lucide-react';

const FEATURES = [
  {
    icon: Vote,
    title: 'Democratic AI Governance',
    description: 'Tasks are deliberated and voted on by the Council, not just executed blindly. Ensures consensus before critical actions.',
  },
  {
    icon: ScrollText,
    title: 'Constitutional Framework',
    description: 'A living rulebook every agent must check against before acting. Amendments require 60% quorum and Head ratification.',
  },
  {
    icon: Library,
    title: 'Collective Intelligence',
    description: 'Dual storage with PostgreSQL for structured truth and ChromaDB for semantic RAG knowledge. Fully deduplicated and revision-aware.',
  },
  {
    icon: Cpu,
    title: 'Brains vs. Hands',
    description: 'Remote Execution via sandboxed Docker executor keeps raw data and PII out of agent reasoning context entirely.',
  },
  {
    icon: ShieldAlert,
    title: 'Tool Governance',
    description: 'External MCP tools are tiered as Pre-Approved, Restricted, or Forbidden. Every invocation is strictly audited and logged.',
  },
  {
    icon: Inbox,
    title: 'Unified Multimodal Inbox',
    description: 'One conversation across WhatsApp, Telegram, Discord, Slack, and more. Channels are just transport; the conversation is sovereign.',
  },
  {
    icon: Hash,
    title: 'Hierarchical Agent IDs',
    description: 'A rigorous numeric ID system (0xxxx Head, 1xxxx Council, 2xxxx Lead, 3xxxx Task, 7-9xxxx Critics) ensures unambiguous authority.',
  },
  {
    icon: Workflow,
    title: 'Self-Governing Lifecycle',
    description: 'Agents auto-spawn on load, auto-terminate on completion, and can be liquidated by Council vote for idleness or violations.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            A New Paradigm for AI Execution
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Agentium replaces monolithic AI assistants with a robust, scalable parliamentary ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-cyan-900/5 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800/80 shadow-sm flex items-center justify-center mb-6 group-hover:bg-cyan-50 group-hover:text-cyan-600 dark:group-hover:bg-cyan-500/20 dark:group-hover:text-cyan-400 transition-colors">
                <feature.icon className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
