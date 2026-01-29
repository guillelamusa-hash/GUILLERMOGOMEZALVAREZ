
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark py-12 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start shrink-0">
            <span className="font-serif text-2xl tracking-tight text-white italic leading-none">Guillermo</span>
            <span className="font-serif text-sm tracking-[0.3em] text-accent-gold uppercase font-bold mt-1">Gomez Alvarez</span>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-medium italic">© 2024 • Portafolio Artístico • Todos los derechos reservados</p>
          </div>
          <a href="#inicio" className="group flex flex-col items-center gap-2 text-accent-gold hover:text-white transition-colors">
            <span className="text-[10px] font-black uppercase tracking-widest">Volver Arriba</span>
            <div className="w-12 h-12 rounded-full border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-xl">expand_less</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
