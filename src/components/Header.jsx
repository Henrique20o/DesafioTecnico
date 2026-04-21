import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl no-line tonal shift">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-primary font-headline uppercase">
          Kinetic Elite
        </div>

        <div className="hidden md:flex space-x-10 items-center font-headline tracking-tight font-bold uppercase">
          <a className="text-slate-300 border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105" href="#">Início</a>
          <a className="text-slate-300 border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105" href="#activities">Atividades</a>
          <a className="text-slate-300 border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105" href="#about">Sobre</a>
          <a className="text-slate-300 border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105" href="#contact">Contato</a>
        </div>

        <button className="bg-primary text-on-primary px-4 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-headline font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_20px_rgba(171,214,0,0.3)]">
          Junte-se Agora
        </button>
      </div>
    </nav>
  );
};

export default Header;
