
import React from 'react';

const Discography: React.FC = () => {
  const items = [
    { id: '5iWFzQath0ln7pltaMklL2', type: 'track', title: 'Zamba de mi tierra' },
    { id: '7vMxfZWEoVzfTx5vdtSWhC', type: 'track', title: 'La Vieja' },
    { id: '2wquR5E9x9BkU6tyKxtpgi', type: 'track', title: 'Zamba del Ángel' },
    { id: '7guCWdS10dq7ObomCo0Dwb', type: 'track', title: 'A mis viejos' },
    { id: '1Cri8yH74vcIFVzX9Lhdz4', type: 'track', title: 'Nuevo Lanzamiento' },
    { id: '5TFKqH9oBAK2uZk8gqExiS', type: 'playlist', title: 'Playlist Selección' },
    { id: '5N26vKTNmKHzixIwomk867', type: 'album', title: 'Obra Selecta' },
    { id: '0vsZRn1iq2UHHKRHQIQ8kx', type: 'album', title: 'Raíces y Horizontes' },
    { id: '3BsUjdIyiQZHMuCifOFAbb', type: 'album', title: 'Lanzamiento Reciente' },
    { id: '50w43HI6bxyUhEDK0C5dnS', type: 'artist', title: 'Perfil de Artista' }
  ];

  const mainSpotifyUrl = "https://open.spotify.com/intl-es/artist/1t6FwNcKaCVBqW7X9MrTj3?si=hYe28bMlT52XrYztMFXtlg";

  return (
    <section className="py-24 bg-surface-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-0 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Catálogo Musical</h2>
            </div>
            <h3 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter uppercase mb-6">Discografía</h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
              Explora mi participación en producciones discográficas a través de ventanas compactas. Haz clic para reproducir directamente en la web.
            </p>
          </div>
          <a 
            href={mainSpotifyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group bg-white/5 hover:bg-primary text-white border border-white/10 px-8 py-4 rounded-full transition-all flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest shrink-0"
          >
            Ver más en Spotify
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
          </a>
        </div>
        
        {/* Grid de 5 columnas en desktop para layout 5x2 con 10 elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {items.map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="bg-black/60 rounded-[1.5rem] p-0.5 border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:border-accent-gold/50 hover:shadow-accent-gold/5 group-hover:-translate-y-1">
                <iframe 
                  style={{ borderRadius: '1.2rem' }}
                  src={`https://open.spotify.com/embed/${item.type}/${item.id}?utm_source=generator&theme=0`} 
                  width="100%" 
                  height="152" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title={item.title}
                ></iframe>
              </div>
              
              <div className="absolute top-0 right-0 -translate-y-1 translate-x-1 bg-accent-gold text-black text-[6px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg pointer-events-none z-20">
                {item.type === 'artist' ? 'Artist' : item.type === 'playlist' ? 'Playlist' : item.type === 'track' ? 'Single' : 'Album'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;
