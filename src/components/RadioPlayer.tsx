import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface RadioPlayerProps {
  streamUrl?: string;
  autoPlay?: boolean;
}

export default function RadioPlayer({
  streamUrl = 'https://stream.heartline.co.id:8443/radio_yaski_stereo',
  autoPlay = false
}: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(streamUrl);
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [streamUrl]);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      handlePlay();
    }
  }, [autoPlay]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#3E5F48] to-[#2a4233] rounded-2xl shadow-lg p-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            className="bg-[#C9A646] hover:bg-[#b89438] text-white rounded-full p-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" fill="currentColor" />
            ) : (
              <Play className="h-6 w-6" fill="currentColor" />
            )}
          </button>

          <div>
            <h3 className="font-semibold text-lg">Radio 3B Creative</h3>
            <p className="text-sm text-gray-200">
              {isPlaying ? 'Sedang Memutar...' : 'Klik untuk memutar'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Volume2 className="h-5 w-5" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 accent-[#C9A646]"
          />
        </div>
      </div>

      {isPlaying && (
        <div className="mt-4 flex items-center space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-[#C9A646] rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-200">Live Streaming</span>
        </div>
      )}
    </div>
  );
}
