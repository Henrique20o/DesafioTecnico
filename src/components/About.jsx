import React from 'react';

const About = () => {
  return (
    <section className="bg-surface py-32 px-8" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          <img 
            alt="Comunidade do Clube" 
            className="rounded-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6_R_Ys0URodLTM1ypAy5BXgdTHNZRPBvSucAt9LOQ4t0kA4IhiEtYc1zAmPqHojO4-4T6gd7oJN3lblW38j9v3QFkbrOdgECRDQ3TrcuLFPgapKDVdKDuXPeav28sgAStejQi35i8lJfbKbkOfclWDiUG27Hvf1Gn0AcSfZwidP0St2-fZJGkQgqS7_xe2JT2OuViwjW2kkHtXbdOfkfPKqdetxy2WMZ3Bj17adBumqr5fGkqrQsLIhUIF5yfXBN7xzJJtQgM8K4"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl z-20 shadow-2xl hidden md:block">
            <p className="text-on-primary font-headline font-black text-4xl leading-none">24/7</p>
            <p className="text-on-primary font-bold text-xs uppercase tracking-widest mt-1">Acesso Elite</p>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <span className="text-primary font-label font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
            O Manifesto Kinetic
          </span>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase leading-tight mb-8">
            O Novo Pulso <br/> da Cidade
          </h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              O Kinetic Elite não é apenas um clube esportivo; é um ecossistema de alta performance projetado para desafiar os limites do potencial humano. Localizado no coração da selva urbana, fornecemos o silêncio, os equipamentos e a comunidade necessários para a grandeza.
            </p>
            <p>
              Acreditamos que o auge da saúde é uma busca colaborativa. Nossa comunidade é construída sobre os pilares do respeito mútuo, disciplina inabalável e a pulsação compartilhada de desempenho que une todos os membros, da quadra aos pesos.
            </p>
          </div>
          <div className="mt-12 flex gap-12">
            <div>
              <p className="text-3xl font-headline font-black text-white">1200+</p>
              <p className="text-sm text-primary uppercase font-bold tracking-widest mt-1">Membros</p>
            </div>
            <div>
              <p className="text-3xl font-headline font-black text-white">15</p>
              <p className="text-sm text-primary uppercase font-bold tracking-widest mt-1">Treinadores Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
