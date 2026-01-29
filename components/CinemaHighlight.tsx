
import React from 'react';

const CinemaHighlight: React.FC = () => {
  const vimeoId = "1093065850";

  return (
    <section className="py-24 bg-background-dark relative border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-32 items-center">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/5 text-primary rounded-md text-[10px] font-bold tracking-[0.2em] uppercase">
                Highlight Cine 2025
              </div>
              <div className="flex items-center gap-2 text-accent-gold">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
                <span className="text-[9px] font-bold uppercase tracking-widest leading-none">In-Edit Barcelona <br/> Selección Oficial</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase">
              Dirección Musical <br />
              <span className="text-accent-gold italic font-serif lowercase">& Cine</span>
            </h2>
            
            <div className="space-y-6 text-slate-300">
              <div className="border-l-2 border-primary pl-6 py-2">
                <p className="text-xl xl:text-2xl font-medium text-white mb-1">
                  Director musical en el documental
                </p>
                <p className="text-2xl xl:text-4xl font-black text-primary uppercase tracking-tight">
                  "ANTES DE QUE ME OLVIDE"
                </p>
                <p className="text-[10px] text-accent-gold font-bold uppercase tracking-[0.3em] mt-2">
                  Categoría: Sons de Barcelona
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base xl:text-lg font-light italic">
                  Fernando Rios Palacio es un distinguido señor y una celebridad del Tango. Heredero del estilo de Gardel y estrella aclamada en Argentina en los años 60 y 70...
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Recién galardonado por su trayectoria por el XXXVI Festival Internacional de Tango de Granada, hoy es la memoria viva de Barcelona como tercera patria del tango.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-1">Director</p>
                  <p className="text-sm xl:text-base font-medium text-white">Alberto Bougleux</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-1">Año / Duración</p>
                  <p className="text-sm xl:text-base font-medium text-white">2025 • 53 min</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-surface-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-[1.01]">
              <div className="aspect-video w-full bg-black relative">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?h=73602f9c31&badge=0&autopause=0&player_id=0&app_id=58479`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  className="absolute inset-0 w-full h-full"
                  title="Antes de que me olvide - Trailer"
                ></iframe>
              </div>
              <div className="absolute top-4 left-8 flex gap-2 opacity-60 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="absolute bottom-4 right-8 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20 z-20">
                <span className="material-symbols-outlined text-accent-gold text-lg">local_activity</span>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white">In-Edit Barcelona 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CinemaHighlight;
