
import React, { useState } from 'react';

const Bio: React.FC = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const bioImgUrl = "https://lh3.googleusercontent.com/d/19EwBoEtejNIcLn1Ibeol7W5rTvuiNpHs";
  const dossierUrl = "https://drive.google.com/file/d/1HT7Im9MOuTIBzw-vjXjfpoX9bvJ1xfhM/view?usp=sharing";

  const edu = [
    { title: 'Academia y Técnica', desc: 'Sólida formación académica en guitarra clásica y contemporánea.' },
    { title: 'Composición y Arreglos', desc: 'Especializado en paisajes sonoros que fusionan ritmos tradicionales con texturas modernas.' },
    { title: 'Investigación de Raíz', desc: 'Profundo estudio de la música folclórica argentina y latinoamericana.' }
  ];

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className={`relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 ${isImgLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src={bioImgUrl} 
                alt="Guillermo Gomez Alvarez" 
                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                onLoad={() => setIsImgLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/40 rounded-br-3xl -z-10"></div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary"></span>
              <h2 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Biografía Profesional</h2>
            </div>
            
            <h3 className="text-6xl md:text-8xl xl:text-9xl font-black mb-8 tracking-tighter uppercase leading-none">
              Trayectoria
            </h3>

            <div className="mb-12">
              <p className="text-xl md:text-2xl xl:text-3xl text-slate-200 leading-relaxed font-light italic mb-8 border-l-4 border-accent-gold pl-6">
                Ha realizado presentaciones en salas de conciertos y festivales de Argentina, Colombia, Perú, España, Francia, Bélgica, Suiza, Portugal, Luxemburgo y Holanda.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {edu.map((e, idx) => (
                  <div key={idx} className="group">
                    <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {e.title}
                    </h5>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">
                      {e.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-10 items-center pt-8 border-t border-white/5">
              <a 
                href={dossierUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white/5 hover:bg-primary text-white px-8 py-4 rounded-full border border-white/10 hover:border-primary transition-all group"
              >
                <span className="material-symbols-outlined text-accent-gold group-hover:text-white">article</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Descargar Dossier 2024</span>
              </a>
              
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-primary font-black text-2xl leading-none">10+</span>
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1">Países</span>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-primary font-black text-2xl leading-none">15+</span>
                  <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1">Años de Exp.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Bio;
