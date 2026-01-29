
import React from 'react';

const Services: React.FC = () => {
  const items = [
    {
      icon: 'settings_input_component',
      title: 'PRODUCCIÓN INTEGRAL',
      desc: 'dirección creativa y producción de álbumes.',
      features: ['arreglos y composición', 'acompañamiento creativo']
    },
    {
      icon: 'piano',
      title: 'GUITARRISTA DE SESIÓN',
      desc: 'grabaciones personalizadas de alta fidelidad. especialista en folclore y world music.',
      features: ['grabación remota HD']
    },
    {
      icon: 'public',
      title: 'PERFORMANCE EN VIVO',
      desc: 'presencia escénica para giras mundiales. experiencia en festivales y medios.',
      features: ['guitarrista de gira', 'dirección musical']
    }
  ];

  return (
    <section className="py-16 bg-surface-dark wood-texture border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-primary"></span>
              <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-[9px]">Capacidades</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Servicios Profesionales</h3>
          </div>
          <p className="text-slate-400 max-w-xs text-right hidden md:block lowercase text-xs leading-relaxed opacity-70">
            fusión de arte tradicional con precisión técnica moderna para una calidad sonora inigualable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all hover:bg-white/[0.05]"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300 transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-xl">{item.icon}</span>
              </div>
              <h4 className="text-lg font-bold mb-3 tracking-tight">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-5 lowercase font-light">{item.desc}</p>
              <ul className="space-y-2 text-[10px] font-semibold text-slate-300">
                {item.features.map(f => (
                  <li key={f} className="flex items-center gap-2 lowercase opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-accent-gold text-sm">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
