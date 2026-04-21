import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="text-xl font-black text-primary mb-4 uppercase font-headline">Kinetic Elite</div>
          <p className="font-body text-sm tracking-wide text-slate-500">© 2024 Kinetic Elite. O Pulso da Performance.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center font-body text-sm tracking-wide">
          <a className="text-slate-500 hover:text-white transition-colors" href="#">Política de Privacidade</a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#">Termos de Serviço</a>
          <a className="text-slate-500 hover:text-white transition-colors" href="#">Regras de Membresia</a>
        </div>
        
        <div className="mt-8 md:mt-0 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm">share</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
            <span className="material-symbols-outlined text-sm">public</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
