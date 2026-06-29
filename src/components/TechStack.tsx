import { motion } from 'motion/react';
import { Layers } from 'lucide-react';

const STACK = [
  { category: 'Frontend', items: ['React 18', 'TypeScript', 'Tailwind', 'Zustand'] },
  { category: 'API Gateway', items: ['FastAPI', 'WebSocket', 'Pydantic'] },
  { category: 'Message Bus', items: ['Redis', 'Celery'] },
  { category: 'Structured Data', items: ['PostgreSQL', 'SQLAlchemy', 'Alembic'] },
  { category: 'Vector Knowledge', items: ['ChromaDB', 'Sentence-Transformers'] },
  { category: 'AI Models', items: ['OpenAI', 'Anthropic', 'Groq', 'Ollama'] },
  { category: 'Execution', items: ['Docker Sandbox', 'Playwright', 'MCP SDK'] },
  { category: 'Infrastructure', items: ['Docker', 'Compose', 'JWT Auth'] },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-zinc-50/50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Built with Modern Standards
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              A robust, open-source stack designed for performance, security, and extensibility.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors">
            <Layers className="w-8 h-8 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200/40 dark:hover:shadow-black/20 hover:-translate-y-1"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
