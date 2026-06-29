import { motion } from 'motion/react';
import { MonitorPlay, Settings2, Users, Database, ShieldCheck, Activity } from 'lucide-react';

const LAYERS = [
  {
    id: 'interface',
    name: 'Interface Layer',
    icon: MonitorPlay,
    description: 'Web dashboard & multi-channel chat (WhatsApp, Slack, Discord, etc.)',
    color: 'border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/5',
  },
  {
    id: 'control',
    name: 'Control Layer',
    icon: Settings2,
    description: 'FastAPI gateway, WebSocket hub, Redis bus, orchestrator, voting service',
    color: 'border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/5',
  },
  {
    id: 'governance',
    name: 'Governance Layer',
    icon: Users,
    description: 'Head → Council → Lead → Task agents with defined powers',
    color: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/5',
  },
  {
    id: 'validation',
    name: 'Execution Validation Layer',
    icon: ShieldCheck,
    description: 'Critics (Plan/Code/Output) + Docker remote executor + Checkpoint time-travel',
    color: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/5',
  },
  {
    id: 'storage',
    name: 'Storage Layer',
    icon: Database,
    description: 'PostgreSQL (structured truth & audit) + ChromaDB (vector knowledge)',
    color: 'border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/5',
  },
  {
    id: 'background',
    name: 'Background Processing',
    icon: Activity,
    description: 'Celery workers for queues, vote tallying, compliance patrol, and knowledge maintenance',
    color: 'border-pink-500/30 text-pink-600 dark:text-pink-400 bg-pink-500/10 dark:bg-pink-500/5',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50 border-y border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A layered, fault-tolerant architecture designed for transparency, auditability, and scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b from-blue-500/20 via-emerald-500/20 to-pink-500/20 hidden md:block" />
          
          <div className="space-y-4">
            {LAYERS.map((layer, idx) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 rounded-3xl border bg-white/60 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/80 backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${layer.color.split(' ')[0]}`}
              >
                <div className={`shrink-0 w-14 h-14 rounded-2xl border flex items-center justify-center ${layer.color}`}>
                  <layer.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{layer.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{layer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
