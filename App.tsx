import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case PageView.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case PageView.ABOUT:
        return <About />;
      case PageView.CONTACT:
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-prime-cream text-prime-blue antialiased selection:bg-prime-orange selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;