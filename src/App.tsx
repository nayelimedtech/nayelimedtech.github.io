import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import Vision from './components/Vision';
import Platform from './components/Platform';
import USP from './components/USP';
import MarketData from './components/MarketData';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <Vision />
        <Platform />
        <USP />
        <MarketData />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
