
import React from 'react';

const Navbar: React.FC = () => {
  const spotifyArtistUrl = "https://open.spotify.com/intl-es/artist/1t6FwNcKaCVBqW7X9MrTj3?si=hYe28bMlT52XrYztMFXtlg";
  const youtubeUrl = "https://www.youtube.com/@GuillermoGomezAlvarez";
  const instagramUrl = "https://www.instagram.com/guillegomezalvarez/";
  const appleMusicUrl = "https://music.apple.com/es/artist/guillermo-g%C3%B3mez-%C3%A1lvarez/1113501037";

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Cine', href: '#cine' },
    { name: 'Discografía', href: '#discografia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { 
      id: 'instagram', 
      icon: 'photo_camera', 
      href: instagramUrl, 
      label: 'Instagram' 
    },
    { 
      id: 'youtube', 
      icon: 'play_circle', 
      href: youtubeUrl, 
      label: 'YouTube' 
    },
    { 
      id: 'spotify', 
      icon: 'podcasts', 
      href: spotifyArtistUrl, 
      label: 'Spotify' 
    },
    { 
      id: 'apple', 
      icon: 'album', 
      href: appleMusicUrl, 
      label: 'Apple Music' 
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 flex items-center justify-between py-5">
        <div 
          className="flex flex-col cursor-pointer shrink-0" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <span className="font-serif text-2xl leading-none tracking-tight text-white italic">Guillermo</span>
          <span className="font-serif text-lg leading-none tracking-widest text-accent-gold uppercase font-bold mt-1">Gomez Alvarez</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 mx-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-accent-gold transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 border-l border-white/10 pl-6 shrink-0">
          {socialLinks.map((platform) => (
            <a
              key={platform.id}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              title={platform.label}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all group hover:border-accent-gold/40 hover:shadow-[0_0_15px_rgba(176,141,87,0.4)] bg-white/5"
            >
              <span className="material-symbols-outlined text-white/60 group-hover:text-accent-gold text-lg">
                {platform.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
