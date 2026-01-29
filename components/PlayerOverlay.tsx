
import React from 'react';

interface PlayerProps {
  onClose: () => void;
}

const PlayerOverlay: React.FC<PlayerProps> = ({ onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <div className="bg-background-dark/95 backdrop-blur-xl border border-white/10 p-3 rounded-full shadow-2xl flex items-center gap-4 pl-4 pr-3 py-3 w-80">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/10">
          <img alt="Miniatura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100" />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-[11px] font-bold truncate">Zamba de mi Tierra</p>
          <p className="text-[9px] text-slate-400 truncate uppercase tracking-tighter">Guillermo G. A. • Single</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-lg">play_arrow</span>
          </button>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-lg text-primary">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerOverlay;
