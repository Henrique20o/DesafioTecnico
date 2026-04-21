import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpar o erro enquanto o usuário digita
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Sucesso
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reseta a mensagem de sucesso após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-surface-container py-32 px-8 relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter mb-4">Comece sua Evolução</h2>
          <p className="text-on-surface-variant text-lg">Deixe seus dados e um Consultor Elite entrará em contato em até 4 horas.</p>
        </div>
        
        <div className="bg-surface-container-lowest p-10 md:p-16 rounded-2xl shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-10">
              <h3 className="text-3xl font-headline font-bold text-primary mb-2">Mensagem Enviada!</h3>
              <p className="text-on-surface-variant text-lg">Em breve um consultor entrará em contato.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold text-primary uppercase tracking-[0.1em] mb-2 font-label">
                    Nome Completo
                  </label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-surface-container-highest border-none text-white p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-slate-600 ${errors.name ? 'border-b-2 border-red-500' : ''}`} 
                    placeholder="Seu Nome" 
                    type="text"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>
                
                <div className="group">
                  <label className="block text-xs font-bold text-primary uppercase tracking-[0.1em] mb-2 font-label">
                    Endereço de E-mail
                  </label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-surface-container-highest border-none text-white p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-slate-600 ${errors.email ? 'border-b-2 border-red-500' : ''}`} 
                    placeholder="seu@email.com" 
                    type="email"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs font-bold text-primary uppercase tracking-[0.1em] mb-2 font-label">
                  Mensagem
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-surface-container-highest border-none text-white p-4 rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all placeholder:text-slate-600 ${errors.message ? 'border-b-2 border-red-500' : ''}`} 
                  placeholder="Conte-nos sobre seus objetivos fitness..." 
                  rows={4}
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
              </div>
              
              <button 
                className="w-full pulse-gradient-bg text-on-primary py-5 rounded-full font-headline font-black uppercase tracking-widest text-lg hover:scale-[1.01] transition-transform" 
                type="submit"
              >
                Enviar Mensagem
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
    </section>
  );
};

export default Contact;
