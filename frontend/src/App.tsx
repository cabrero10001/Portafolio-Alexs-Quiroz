import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SocialDock } from '@/components/layout/SocialDock';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SocialDock />
    </div>
  );
}

export default App;
