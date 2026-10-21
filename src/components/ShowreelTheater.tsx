import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { SHOWREELS } from '../data/chimaData';

interface ShowreelProps {
  isDarkMode: boolean;
}

export const ShowreelTheater: React.FC<ShowreelProps> = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentReel = SHOWREELS[activeTab];

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    setIsPlaying(false);
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

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
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

        {/* 3 Prominent Buttons Centered in the Middle */}
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
              {reel.id === 'on-screen-drama-reel' && '03 / ON SCREEN & DRAMA REEL'}
            </button>
          ))}
        </div>

        {/* Short, Calm Description */}
        <p className="mt-4 mb-4 text-center text-xs font-mono opacity-70 leading-relaxed max-w-xl mx-auto">
          {currentReel.description}
        </p>

        {/* Big Clean Cinema Player Screen */}
        <div className={`mt-4 border relative overflow-hidden bg-black ${
          isDarkMode ? 'border-neutral-800' : 'border-neutral-300'
        }`}>
          <div className="relative aspect-16/9 w-full">
            <video
              ref={videoRef}
              src={currentReel.videoSrc}
              poster={currentReel.thumbnail}
              onEnded={() => setIsPlaying(false)}
              muted={isMuted}
              playsInline
              className="h-full w-full object-cover"
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
              <span>{currentReel.duration}</span>
              <button
                onClick={handleFullscreen}
                className="hover:text-white cursor-pointer"
                title="Fullscreen"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
