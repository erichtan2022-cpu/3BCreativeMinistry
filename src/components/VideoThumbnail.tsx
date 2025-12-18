import { useState } from 'react';
import { Video } from 'lucide-react';
import { getYouTubeThumbnailFromUrl } from '../utils/youtube';

interface VideoThumbnailProps {
  videoLink?: string;
  className?: string;
}

export default function VideoThumbnail({ videoLink, className = '' }: VideoThumbnailProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const thumbnailUrl = videoLink ? getYouTubeThumbnailFromUrl(videoLink, 'maxres') : null;
  const fallbackThumbnailUrl = videoLink ? getYouTubeThumbnailFromUrl(videoLink, 'hq') : null;

  const showGradient = !thumbnailUrl || imageError;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showGradient ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] flex items-center justify-center">
          <Video className="h-16 w-16 text-white/50" />
        </div>
      ) : (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] flex items-center justify-center animate-pulse">
              <Video className="h-16 w-16 text-white/50" />
            </div>
          )}
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              if (fallbackThumbnailUrl && thumbnailUrl !== fallbackThumbnailUrl) {
                const img = new Image();
                img.onload = () => {
                  setImageLoaded(true);
                };
                img.onerror = () => {
                  setImageError(true);
                };
                img.src = fallbackThumbnailUrl;
              } else {
                setImageError(true);
              }
            }}
          />
          {imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          )}
        </>
      )}
    </div>
  );
}
