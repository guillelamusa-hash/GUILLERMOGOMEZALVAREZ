
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const spotifyArtistUrl = "https://open.spotify.com/intl-es/artist/1t6FwNcKaCVBqW7X9MrTj3?si=hYe28bMlT52XrYztMFXtlg";
  const youtubeUrl = "https://www.youtube.com/@GuillermoGomezAlvarez";
  const appleMusicUrl = "https://music.apple.com/es/artist/guillermo-g%C3%B3mez-%C3%A1lvarez/1113501037";
  const instagramUrl = "https://www.instagram.com/guillegomezalvarez/";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzdzkkgk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section className="py-24 bg-surface-dark wood-texture border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Contacto</h2>
            <h3 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter uppercase mb-8">Trabajemos Juntos</h3>
            <p className="text-slate-300 text-lg xl:text-xl leading-relaxed mb-12 font-light">
              Si estás interesado en una colaboración, grabaciones de sesión o proyectos de dirección musical, no dudes en escribirme. Recibiré tu mensaje directamente en <span className="text-accent-gold font-bold">guillermogomezalvarez@gmail.com</span>.
            </p>
            
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-accent-gold mb-3" htmlFor="name">Nombre Completo</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                    id="name" 
                    name="name"
                    placeholder="Tu nombre" 
                    type="text" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-accent-gold mb-3" htmlFor="email">Correo Electrónico</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white focus:outline-none focus:border-primary transition-colors text-sm" 
                    id="email" 
                    name="email"
                    placeholder="tu@email.com" 
                    type="email" 
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-accent-gold mb-3" htmlFor="message">Mensaje</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-8 py-6 text-white focus:outline-none focus:border-primary transition-colors min-h-[180px] text-sm" 
                  id="message" 
                  name="message"
                  placeholder="¿En qué puedo ayudarte?"
                  required
                ></textarea>
              </div>

              {status === 'SUCCESS' ? (
                <div className="bg-green-500/10 border border-green-500/50 p-6 rounded-3xl text-green-500 flex items-center gap-4 animate-pulse">
                  <span className="material-symbols-outlined">check_circle</span>
                  <p className="text-sm font-bold uppercase tracking-widest">¡Mensaje enviado con éxito! Te responderé pronto.</p>
                </div>
              ) : (
                <button 
                  disabled={status === 'SENDING'}
                  className="bg-primary hover:bg-red-700 text-white w-full py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.3em] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-sm">
                    {status === 'SENDING' ? 'sync' : 'send'}
                  </span>
                  {status === 'SENDING' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              )}

              {status === 'ERROR' && (
                <p className="text-red-500 text-xs mt-4 text-center font-bold uppercase tracking-widest">Ocurrió un error. Por favor, intenta de nuevo o escribe directamente por Instagram.</p>
              )}
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-black/40 border border-white/10 p-12 xl:p-16 rounded-[3rem] backdrop-blur-md">
              <h4 className="text-2xl xl:text-3xl font-bold mb-10 text-center lg:text-left">Conecta en Plataformas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Spotify', icon: 'podcasts', cat: 'Escuchar en', href: spotifyArtistUrl },
                  { label: 'Apple Music', icon: 'album', cat: 'Escuchar en', href: appleMusicUrl },
                  { label: 'YouTube', icon: 'play_circle', cat: 'Ver en', href: youtubeUrl },
                  { label: 'Instagram', icon: 'photo_camera', cat: 'Seguir en', href: instagramUrl }
                ].map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 bg-white/5 border border-white/10 p-6 rounded-full hover:border-primary transition-all pr-10"
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">{item.cat}</p>
                      <p className="font-bold text-base truncate">{item.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
