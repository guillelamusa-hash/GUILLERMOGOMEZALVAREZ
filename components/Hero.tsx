
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const heroImgUrl = "https://lh3.googleusercontent.com/d/1J3ahEIm0aKi_QsukhKVqmIsVidWMD-UU";
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-background-dark">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}>
          <img
            alt="Guillermo Gomez Alvarez"
            className="w-full h-full object-cover object-[center_30%] lg:object-[45%_30%]"
            src={heroImgUrl}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-l from-background-dark via-background-dark/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/20 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,_rgba(212,17,50,0.15)_0%,_transparent_50%)] z-10"></div>
      </div>
      
      <div className="relative z-30 max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 w-full flex justify-end">
        <div className={`max-w-2xl text-right flex flex-col items-end transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-accent-gold/40 bg-black/60 backdrop-blur-md text-accent-gold rounded-full text-[10px] font-bold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></span>
            Guitarrista • Compositor • Arreglador
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.85] mb-8 tracking-tighter uppercase">
            Guillermo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Gomez Alvarez</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-md font-light leading-relaxed">
            Explorando las fronteras del folclore argentino y la música del mundo. 
            Dirección musical, composición y arreglos con sello propio.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-end">
            <a
              href="#trayectoria"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 group"
            >
              Trayectoria
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a
              href="#contacto"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-red-700 transition-all uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-primary/40 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contactar
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[7px] uppercase tracking-[0.5em] font-bold">Scroll Down</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
