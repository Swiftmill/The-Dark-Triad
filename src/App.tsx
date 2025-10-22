import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Board } from './sections/Board';
import { Contact } from './sections/Contact';
import { Intro } from './sections/Intro';
import { Library } from './sections/Library';
import { Tributes } from './sections/Tributes';

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('grain');
    document.body.style.scrollBehavior = 'smooth';

    return () => {
      document.body.classList.remove('grain');
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <NavBar />
      <main className="relative">
        <Intro />
        <Library />
        <Board />
        <Tributes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
