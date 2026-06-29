import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Copy, Check, Info } from 'lucide-react';

const INSTALL_COMMANDS = `# Clone the repository
git clone https://github.com/AshminDhungana/Agentium.git
cd Agentium

# Launch the stack
docker compose up -d

# Watch initialization logs
docker compose logs -f`;

export default function GetStarted() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMANDS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="start" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-cyan-500/5 relative overflow-hidden transition-colors"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              Initialize Your Nation
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              No local Python or Node setup required. Everything runs securely in Docker, identical on Windows, macOS, and Linux.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-8 relative z-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Prerequisites</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    Docker Desktop (Win/Mac) or Docker Engine + Compose (Linux)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    8 GB RAM minimum (16 GB recommended)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                    10 GB free disk space
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-sm text-blue-900 dark:text-blue-200 transition-colors">
                <div className="flex gap-2 mb-2">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="font-semibold">First Login</span>
                </div>
                <p className="opacity-90 leading-relaxed">
                  First login walks you through a "Genesis Protocol" where the AI nation is named via a democratic Council vote before accepting tasks.
                </p>
              </div>
            </div>

            <div className="min-w-0">
              <div className="rounded-2xl overflow-hidden bg-zinc-50 dark:bg-[#0d1117] border border-zinc-200 dark:border-zinc-800 transition-colors shadow-lg">
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-[#161b22] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                      <Terminal className="w-4 h-4" />
                      Terminal
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors focus:outline-none"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <code>
                      <span className="text-zinc-500"># Clone the repository</span><br/>
                      <span className="text-cyan-600 dark:text-cyan-400">git clone</span> https://github.com/AshminDhungana/Agentium.git<br/>
                      <span className="text-cyan-600 dark:text-cyan-400">cd</span> Agentium<br/><br/>
                      <span className="text-zinc-500"># Launch the stack</span><br/>
                      <span className="text-emerald-600 dark:text-emerald-400">docker compose</span> up -d<br/><br/>
                      <span className="text-zinc-500"># Watch initialization logs</span><br/>
                      <span className="text-emerald-600 dark:text-emerald-400">docker compose</span> logs -f
                    </code>
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-xs text-center text-zinc-500">
                First build takes 20–40 minutes depending on connection speed. Dashboard available at <a href="http://localhost:3000" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:underline">http://localhost:3000</a>.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-center text-zinc-900 dark:text-white mb-8">
              Deployment & Self-Hosting Options
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Local Development</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Full stack with Docker Compose for local testing and development.
                </p>
                <div className="text-xs font-mono text-zinc-500 bg-zinc-50 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
                  docker compose up -d
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Single Server VM</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Ideal for small production instances. Deploy to a VPS using Docker Compose.
                </p>
                <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-disc list-inside">
                  <li>Configure strong secrets (.env)</li>
                  <li>Use Nginx reverse proxy</li>
                  <li>HTTPS via Let's Encrypt</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all hover:shadow-md">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Kubernetes / Swarm</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  For scalable microservices architectures. Helm charts & manifests provided.
                </p>
                <div className="text-xs font-mono text-zinc-500 bg-zinc-50 dark:bg-zinc-950 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
                  kubectl apply -f k8s/
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
