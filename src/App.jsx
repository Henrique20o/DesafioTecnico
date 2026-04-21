import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main>
        <Hero />
        <Activities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
