import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { PasscodeGate } from './PasscodeGate';

interface AudioPlayerProps {
  src: string;
  title: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const setAudioTime = () => {
      setProgress(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    if (audio.readyState > 0) {
      setAudioData();
    }

    // Events
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setProgress(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-xl border border-black/10 bg-[var(--bg-surface)] shadow-sm overflow-hidden flex items-center min-h-[140px]">
      <PasscodeGate 
        variant="compact"
        title="Sample Locked" 
        description="Enter passcode to listen to autonomous AI voice agent interactions."
        isAudio={true}
      >
        <div className="p-3 w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-surface)] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
              </button>
              <div>
                <p className="text-[9px] tracking-widest uppercase font-bold text-[var(--text-secondary)]">Voice Agent</p>
                <p className="text-[11px] font-medium text-[var(--text-primary)] truncate max-w-[120px]">{title}</p>
              </div>
            </div>
            <button onClick={toggleMute} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="flex items-center gap-2">
             <input
              type="range"
              min="0"
              max={duration || 0}
              step="any"
              value={progress}
              onChange={handleProgressChange}
              className="flex-1 h-1 bg-black/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent-primary)] focus:outline-none"
            />
            <span className="text-[9px] font-mono text-[var(--text-secondary)] min-w-[30px] text-right">
              {formatTime(progress)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </PasscodeGate>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
