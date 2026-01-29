
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Acullá',
      desc: 'Repertorio de profunda investigación rítmica latinoamericana con un sonido contemporáneo y sofisticado. La banda revitaliza las raíces mediante arreglos jazzísticos e instrumentos no convencionales.',
      youtubeId: 'ABsNnvCrNi4',
      link: 'https://aculla.taplink.ws'
    },
    {
      title: 'Tanghoyde',
      desc: 'Fusión de la tradición del tango con texturas sonoras modernas y vanguardistas, llevando el género a nuevas fronteras estéticas.',
      youtubeId: '8jyztuRtjJA',
      link: 'https://www.youtube.com/@Tanghoyde'
    },
    {
      title: 'Kurepí',
      desc: 'Proyecto centrado en la esencia rítmica latinoamericana y el diálogo entre cuerdas, rescatando la calidez acústica con arreglos innovadores.',
      youtubeId: 'Er6oNvk4PyA',
      link: 'https://www.youtube.com/@kurepimusica3160'
    }
  ];

  return (
    <section className="py-24 bg-background-dark border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Creación y Colaboración</h2>
          <h3 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter uppercase mb-6">Proyectos Musicales</h3>
        </div>
        
        <h4 className="text-2xl font-bold text-accent-gold uppercase tracking-widest mb-10 flex items-center gap-6">
          Proyectos Actuales
          <span className="h-px flex-1 bg-accent-gold/20"></span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="group bg-surface-dark border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full z-10"
                  src={`https://www.youtube.com/embed/${p.youtubeId}?rel=0&modestbranding=1&autohide=1`}
                  title={p.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Overlay decorativo discreto */}
                <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/40 to-transparent z-20 pointer-events-none"></div>
              </div>
              
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-2xl xl:text-3xl font-bold">
                    {p.title}
                  </h5>
                  <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
                </div>
                <p className="text-slate-400 text-sm xl:text-base mb-10 leading-relaxed flex-1 lowercase font-light">
                  {p.desc}
                </p>
                <div className="flex gap-4">
                  <a 
                    href={p.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary w-full py-4 rounded-full flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] transition-all"
                  >
                    Saber Más
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
