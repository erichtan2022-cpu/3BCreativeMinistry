import { Menu, X, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const STREAM_URL = 'https://stream.heartline.co.id:8443/radio_yaski_stereo';

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'berakar', label: 'Berakar' },
    { id: 'bertumbuh', label: 'Bertumbuh' },
    { id: 'berbuah', label: 'Berbuah' },
    { id: 'profile', label: 'Profil' },
    { id: 'programs', label: 'Program' },
    { id: 'media', label: 'Media' },
    { id: 'collaboration', label: 'Kolaborasi' },
    { id: 'donation', label: 'Donasi' },
    { id: 'contact', label: 'Kontak' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayRadio = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(STREAM_URL);
      audioRef.current.volume = 0.7;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="https://i.imgur.com/Tk5H4Is.jpeg"
              alt="3B Ministry Logo"
              className="h-16 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-[#0d5e96]">3B Ministry</span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-sm font-bold transition-colors ${
                  currentPage === item.id
                    ? 'text-[#ff7e28]'
                    : 'text-gray-700 hover:text-[#0d5e96]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={handlePlayRadio}
              className={`ml-4 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                isPlaying
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-[#ff7e28] hover:bg-[#e6711f]'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4" fill="currentColor" />
                  <span className="text-xs">Matikan</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" fill="currentColor" />
                  <span className="text-xs">Radio</span>
                </>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handlePlayRadio}
              className={`px-3 py-2 rounded-full text-white transition-all ${
                isPlaying ? 'bg-red-500' : 'bg-[#ff7e28]'
              }`}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="currentColor" />
              ) : (
                <Play className="h-4 w-4" fill="currentColor" />
              )}
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-bold transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#0d5e96] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
