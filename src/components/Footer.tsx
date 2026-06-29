import { Github, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white dark:text-zinc-950" fill="currentColor" />
              </div>
              <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">Agentium</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm italic">
              "The price of freedom is eternal vigilance. The price of AI sovereignty is democratic architecture."
            </p>
          </div>
          
          <div className="flex md:justify-end gap-6">
            <a
              href="https://github.com/AshminDhungana/Agentium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:dhungana.ashmin@gmail.com"
              className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500 transition-colors">
          <p>© {new Date().getFullYear()} Agentium. Developed by Ashmin Dhungana</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/AshminDhungana/Agentium" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">License</a>
            <a href="https://github.com/AshminDhungana/Agentium" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
