import { useState, ReactNode, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Eye, EyeOff, AlertCircle, Music } from 'lucide-react';
import { usePasscode } from '../context/PasscodeContext';

interface PasscodeGateProps {
  children: ReactNode;
  title?: string;
  description?: string;
  variant?: 'full' | 'compact';
  bgImageUrl?: string;
  isAudio?: boolean;
}

export function PasscodeGate({ 
  children, 
  title = "Restricted Content", 
  description = "A unique passcode is required to access media files, images, and audio for security and curiosity.",
  variant = 'full',
  bgImageUrl,
  isAudio
}: PasscodeGateProps) {
  const { isAuthenticated, authenticate } = usePasscode();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (authenticate(passcode)) {
      setError(false);
    } else {
      setError(true);
      setPasscode('');
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  if (variant === 'compact') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-[#f8f5f0]/60 backdrop-blur-md overflow-hidden min-h-[140px]">
        {/* Enhanced Background Hint: High-Density Spectral Waveform */}
        {isAudio && (
          <div className="absolute inset-0 flex items-end justify-center gap-[2px] px-2 pb-2 opacity-[0.07] pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  height: [
                    Math.random() * 20 + 5, 
                    Math.random() * 60 + 10, 
                    Math.random() * 30 + 5
                  ],
                }}
                transition={{ 
                  duration: 0.8 + Math.random(), 
                  repeat: Infinity, 
                  delay: i * 0.02,
                  ease: "easeInOut"
                }}
                className="w-[2px] bg-black rounded-t-full"
              />
            ))}
          </div>
        )}
        
        {isAudio && (
          <div className="absolute top-3 left-3 flex items-center gap-2 opacity-20">
            <Music className="w-4 h-4 text-black" />
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-black">Voice Identity Protected</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-[200px] space-y-3">
          <div className="flex flex-col items-center gap-1 mb-2">
            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
              <Lock className="w-3.5 h-3.5 text-black/60" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">{title}</span>
          </div>
          <div className="relative">
            <input
              type={showPasscode ? "text" : "password"}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Passcode"
              className={`w-full px-3 py-2 bg-white/80 backdrop-blur-sm border ${error ? 'border-red-500' : 'border-black/10'} rounded-lg focus:outline-none text-xs font-mono text-center tracking-widest shadow-inner`}
            />
            <button
              type="button"
              onClick={() => setShowPasscode(!showPasscode)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-black/30 hover:text-black/60 transition-colors"
            >
              {showPasscode ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            </button>
          </div>
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[8px] text-red-500 font-bold text-center uppercase tracking-tighter"
            >
              Authentication Failed
            </motion.div>
          )}
          <button
            type="submit"
            className="w-full py-2.5 bg-black text-white rounded-lg font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-[#333] transition-all transform active:scale-95 shadow-md"
          >
            Decrypt & Play
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-6 bg-transparent overflow-hidden">
      {/* Background Hint */}
      {bgImageUrl && (
        <div className="absolute inset-0 z-0">
          <img src={bgImageUrl} alt="" className="w-full h-full object-cover blur-md opacity-30" />
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-md w-full bg-[#f8f5f0]/80 backdrop-blur-md border border-black/10 p-8 rounded-2xl shadow-xl text-center"
      >
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8" />
        </div>
        
        <h3 className="text-2xl font-display font-medium mb-3 text-black">{title}</h3>
        <p className="text-sm text-black/60 mb-8 leading-relaxed">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPasscode ? "text" : "password"}
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode to unlock"
              className={`w-full px-5 py-4 bg-white border ${error ? 'border-red-500' : 'border-black/10'} rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all font-mono text-center tracking-widest`}
            />
            <button
              type="button"
              onClick={() => setShowPasscode(!showPasscode)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-colors"
            >
              {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider"
              >
                <AlertCircle className="w-4 h-4" />
                Invalid Passcode
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            className="w-full py-4 bg-black text-white rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#333] transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Unlock className="w-4 h-4" />
            Unlock Content
          </button>
        </form>
      </motion.div>
    </div>
  );
}
