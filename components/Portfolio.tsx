
import React, { useRef } from 'react';

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { 
      title: 'La Vieja', 
      meta: 'Juan Carlos Cambas • A VIAXE',
      description: 'Interpretación en vivo explorando la rítmica profunda del folclore argentino.',
      youtubeId: 'mVGlmKXXMxY', 
    },
    { 
      title: 'Música para los afectados por la DANA', 
      meta: 'Pasión Vega • No es un día cualquiera (RTVE)',
      description: 'Participación especial en RNE junto a Pasión Vega en apoyo a los damnificados por la DANA.',
      externalLink: 'https://www.rtve.es/play/audios/no-es-un-dia-cualquiera/no-dia-cualquiera-musica-para-afectados-dana-pasion-vega/16363157/',
      customThumb: 'https://lh3.googleusercontent.com/d/1_NHGKT3ias9pdhwERDZn0fJ9Tlw-MYU2' 
    },
    { 
      title: 'Yo soy María', 
      meta: 'Juan Carlos Cambas • Julia Zenko • A VIAXE',
      description: 'Colaboración magistral junto a la emblemática Julia Zenko para el proyecto "A VIAXE" de Juan Carlos Cambas.',
      youtubeId: 'J5t286nyWOM',
    },
    { 
      title: "L'appuntamento", 
      meta: 'Rocio Faks • Giancarlo Arena • Guillermo Gomez Alvarez',
      description: 'Una versión íntima y sofisticada de este clásico italiano, destacando el arreglo de cuerdas.',
      youtubeId: 'NrwJXaeDeNA',
    },
    { 
      title: 'Mala Suerte', 
      meta: "Fernando Rios Palacio • TVE",
      description: 'Presentación televisiva acompañando al legendario Fernando Rios Palacio.',
      youtubeId: 'RjRpSSS06zQ', 
    },
    { 
      title: 'Noche de Mayo', 
      meta: 'Joana De Diego • Guillermo Gomez Alvarez',
      description: 'Colaboración artística explorando la profundidad lírica y sonora junto a Joana De Diego.',
      youtubeId: 'BXoGYCS4yjU', 
    },
    { 
      title: 'Soy pan, soy paz, soy más', 
      meta: 'Alessio Arena • Guillermo Gomez Alvarez',
      description: 'Interpretación sensible junto al artista Alessio Arena de este clásico de la canción latinoamericana.',
      youtubeId: 'G7ViESezI04', 
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 450; 
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-background-dark border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Portfolio Multimedia</h2>
          </div>
          <h3 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter uppercase leading-tight">
            Colaboraciones <span className="text-accent-gold italic font-serif lowercase">destacadas</span>
          </h3>
        </div>
        
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory hide-scrollbar"
          >
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="w-[320px] md:w-[420px] snap-start flex-shrink-0 transition-opacity duration-300"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl mb-6 group/vid">
                  
                  {item.youtubeId ? (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover/vid:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <iframe
                        className="absolute inset-0 w-full h-full z-20"
                        src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </>
                  ) : (
                    <a 
                      href={item.externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center group/audio"
                    >
                      <img 
                        src={item.customThumb}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover/audio:scale-110 transition-transform duration-1000"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover/audio:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-30 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl group-hover/audio:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-white text-3xl animate-pulse">graphic_eq</span>
                        </div>
                        <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-widest text-white">
                          Escuchar en RTVE Play
                        </span>
                      </div>
                    </a>
                  )}

                  <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/60 to-transparent z-30 pointer-events-none flex items-center px-4 gap-1.5 opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  </div>

                  <div className="absolute bottom-3 right-4 z-30 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/5 pointer-events-none">
                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/60">
                      {item.youtubeId ? 'Live Recording' : 'Radio Broadcast'}
                    </span>
                  </div>
                </div>

                <div className="px-1">
                  <h5 className="text-white font-black text-lg xl:text-xl uppercase tracking-tighter mb-1 line-clamp-1">
                    {item.title}
                  </h5>
                  <p className="text-accent-gold text-[9px] uppercase tracking-[0.1em] font-bold mb-3 italic line-clamp-1">
                    {item.meta}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-2 h-8">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-1.5">
              <div className="w-8 h-1 bg-primary rounded-full"></div>
              {items.slice(1).map((_, i) => (
                <div key={i} className="w-2 h-1 bg-white/10 rounded-full"></div>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-accent-gold/50 transition-all active:scale-90"
                aria-label="Anterior"
              >
                <span className="material-symbols-outlined text-base">arrow_back_ios_new</span>
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-accent-gold/50 transition-all active:scale-90"
                aria-label="Siguiente"
              >
                <span className="material-symbols-outlined text-base">arrow_forward_ios</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
