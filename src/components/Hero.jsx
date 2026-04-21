import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Desempenho atlético"
          className="w-full h-full object-cover brightness-[0.3]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6psxGXEVZU1vTT5Zu7XX67tzPYIcxFuCkUmlXkX7fo4gv3Qmu-4DpbLKwMd9BaKeTHqiNxLRIyQdqhShWRUOnwhVDXCts2hqagPnx2Vpj_mc4nWPuA-zi6WHgcAAhdIMN9ly-zX04rf8jGSSuVe6OCLkOdpdlJMMlFtsocOSVKI6IrgDrK4xZtUB6tB0S1iK4ZGanmDEHZyA0t3xAod7TLb11wk_UN84kjUPcsWWJqpwe0TaQwMnRXRWxMf50t1lwY00BFGmExfY"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block bg-tertiary-container text-tertiary px-4 py-1 rounded-full text-xs font-bold tracking-[0.1em] uppercase mb-6 font-label">
            O Futuro da Performance
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-8">
            ELEVE SUA <br /> <span className="text-primary italic inline-block py-2 break-words">PERFORMANCE</span>
          </h1>
          <p className="text-on-surface-variant text-lg sm:text-xl md:text-2xl mb-12 max-w-lg leading-relaxed">
            Junte-se a um coletivo de elite onde a precisão cirúrgica encontra a força bruta. Sinta a pulsação do santuário esportivo mais avançado da cidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="pulse-gradient-bg text-on-primary px-10 py-5 rounded-full font-headline font-extrabold uppercase tracking-wider hover:scale-105 transition-all">
              Junte-se Agora
            </button>
            <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-headline font-extrabold uppercase tracking-wider hover:bg-surface-bright transition-all">
              Ver Aulas
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-5%] right-[-5%] w-1/2 h-2/3 bg-surface-container rotate-6 -z-10 rounded-xl hidden lg:block"></div>
    </section>
  );
};

export default Hero;
