import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Audience from './components/Audience';
import TechStack from './components/TechStack';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-cyan-500/30">
        <Header />
        <main>
          <Hero />
          <Features />
          <Architecture />
          <Audience />
          <TechStack />
          <GetStarted />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
