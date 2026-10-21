import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { SHOWREELS } from '../data/chimaData';

interface ShowreelProps {
  isDarkMode: boolean;
}

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

export const ShowreelTheater: React.FC<ShowreelProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentReel = SHOWREELS[activeTab];

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setIsPlaying(false);
    setDuration(0);
    setCurrentTime(0);
    setIsExpanded(false);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // iPhone Safari supports webkitEnterFullscreen on a video, not the desktop
  // requestFullscreen API. Keep native playback controls in real fullscreen.
  const handleFullscreen = () => {
    if (isExpanded) {
      setIsExpanded(false);
      return;
    }
    const video = videoRef.current as (HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    }) | null;
    if (!video) return;
    video.controls = true;

    if (typeof video.webkitEnterFullscreen === 'function') {
      try {
        video.webkitEnterFullscreen();
        return;
      } catch {
        // Some iOS browsers disable native video fullscreen.
      }
    }
    if (typeof video.requestFullscreen === 'function') {
      try {
        void video.requestFullscreen().catch(() => {
          video.controls = false;
          setIsExpanded(true);
        });
        return;
      } catch {
        // Fall through to a fullscreen-sized player.
      }
    }
    video.controls = false;
    setIsExpanded(true);
  };

  useEffect(() => {
    const resetNativeControls = () => {
      if (!document.fullscreenElement && videoRef.current) {
        videoRef.current.controls = false;
      }
    };
    const resetWebkitControls = () => {
      if (videoRef.current) videoRef.current.controls = false;
    };
    document.addEventListener('fullscreenchange', resetNativeControls);
    document.addEventListener('webkitendfullscreen', resetWebkitControls, true);
    return () => {
      document.removeEventListener('fullscreenchange', resetNativeControls);
      document.removeEventListener('webkitendfullscreen', resetWebkitControls, true);
    };
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onEscape);
    };
  }, [isExpanded]);

  const seekTo = (seconds: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(seconds) || duration <= 0) return;
    const target = Math.max(0, Math.min(seconds, duration));
    video.currentTime = target;
    setCurrentTime(target);
  };

  return (
    <section id="showreels" className={`py-16 sm:py-24 border-t ${
      isDarkMode ? 'border-neutral-800 bg-[#000000]' : 'border-neutral-200 bg-[#FBFBFB]'
    }`}>
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Section Title */}
        <div className="text-center pb-6">
          <h2 className="text-2xl sm:text-4xl font-mono font-bold uppercase tracking-wider">
            SHOWREELS
          </h2>
          <p className="mt-1 text-xs font-mono opacity-60 uppercase tracking-widest">
            Select Reel to Watch
          </p>
        </div>

        {/* Two official reel buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-mono my-6">
          {SHOWREELS.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => handleSelectTab(idx)}
              className={`w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all cursor-pointer text-center ${
                activeTab === idx
                  ? (isDarkMode ? 'bg-white text-black border-white shadow-lg' : 'bg-black text-white border-black shadow-lg')
                  : (isDarkMode ? 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 bg-neutral-950' : 'border-neutral-300 text-neutral-600 hover:text-black hover:border-neutral-500 bg-white')
              }`}
            >
              {reel.id === 'stunts-screen-reel' && '01 / STUNT & ACTION REEL'}
              {reel.id === 'parkour-coordinator-reel' && '02 / PARKOUR COORDINATOR REEL'}
            </button>
          ))}
        </div>

        {/* Short, Calm Description */}
        <p className="mt-4 mb-4 text-center text-xs font-mono opacity-70 leading-relaxed max-w-xl mx-auto">
          {currentReel.description}
        </p>

        {/* Big Clean Cinema Player Screen */}
        <div className={`border relative overflow-hidden bg-black ${
          isExpanded ? 'fixed inset-0 z-[100] flex flex-col border-0' : `mt-4 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-300'}`
        }`}>
          <div className={isExpanded ? 'relative w-full min-h-0 flex-1' : 'relative aspect-16/9 w-full'}>
            <video
              key={currentReel.id}
              ref={videoRef}
              src={currentReel.videoSrc}
              poster={currentReel.thumbnail}
              preload="metadata"
              onLoadedMetadata={(event) => {
                const seconds = event.currentTarget.duration;
                if (Number.isFinite(seconds) && seconds > 0) {
                  setDuration(seconds);
                }
              }}
              onError={() => setVideoError(true)}
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onSeeking={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
              playsInline
              className={`h-full w-full ${isExpanded ? 'object-contain' : 'object-cover'}`}
            />

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center border-2 border-white bg-black/80 text-white transition-transform hover:scale-110 cursor-pointer"
                aria-label="Play Reel"
              >
                <Play className="h-8 w-8 fill-white ml-1" />
              </button>
            )}
          </div>

          {/* Always-visible seek bar, independent of the fullscreen controls. */}
          <div className="border-t border-neutral-800 bg-black px-4 pt-3 pb-1 text-white">
            <input
              type="range"
              min={0}
              max={duration > 0 ? duration : 1}
              step="0.1"
              value={duration > 0 ? Math.min(currentTime, duration) : 0}
              onChange={(event) => seekTo(Number(event.currentTarget.value))}
              disabled={duration <= 0}
              aria-label="Seek through reel"
              aria-valuetext={`${formatTime(currentTime)} of ${duration > 0 ? formatTime(duration) : currentReel.duration}`}
              className="reel-seek-bar block w-full disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: `linear-gradient(to right, white 0%, white ${duration > 0 ? currentTime / duration * 100 : 0}%, #525252 ${duration > 0 ? currentTime / duration * 100 : 0}%, #525252 100%)` }}
            />
            <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400 tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : currentReel.duration}</span>
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="flex items-center justify-between p-4 bg-black text-white font-mono text-xs tracking-wider border-t border-neutral-800">
            <div className="flex items-center gap-5">
              <button
                onClick={togglePlay}
                className="uppercase hover:opacity-75 cursor-pointer flex items-center gap-1.5 font-bold"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={toggleMute}
                className="uppercase hover:opacity-75 cursor-pointer flex items-center gap-1 text-neutral-400 hover:text-white"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                <span className="hidden sm:inline">{isMuted ? 'UNMUTE' : 'MUTE'}</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-neutral-400">
              <span className="hidden sm:inline font-bold text-white">{currentReel.title}</span>
              <span className="hidden sm:inline">{duration > 0 ? formatTime(duration) : currentReel.duration}</span>
              <button
                onClick={handleFullscreen}
                className="hover:text-white cursor-pointer p-1.5 -m-1.5"
                title={isExpanded ? 'Exit fullscreen' : 'Fullscreen'}
                aria-label={isExpanded ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isExpanded ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        {videoError && (
          <p className="mt-3 text-center font-mono text-xs opacity-75">
            Video unavailable here. {' '}
            <a
              href={activeTab === 0 ? 'https://www.chimaakenzua.com/' : 'https://www.chimaakenzua.com/parkourdirector'}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-100"
            >
              Watch on Chima's original website
            </a>.
          </p>
        )}
      </div>
    </section>
  );
};
