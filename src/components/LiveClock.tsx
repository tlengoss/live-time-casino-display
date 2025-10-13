import { useEffect, useState } from 'react';

interface LiveClockProps {
  timezone: string;
  label: string;
}

export const LiveClock = ({ timezone, label }: LiveClockProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="relative group animate-fade-in">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative flex flex-col items-center space-y-3 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm rounded-2xl border border-primary/40 shadow-[var(--shadow-premium)] hover:border-primary/60 transition-all duration-300">
        {/* Label with decorative elements */}
        <div className="flex items-center gap-3 w-full justify-center">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            {label}
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        
        {/* Time display with enhanced styling */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full"></div>
          <div className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary to-primary/80 tabular-nums tracking-tight animate-pulse-glow">
            {formatTime(time)}
          </div>
        </div>
        
        {/* Date display */}
        <div className="text-base sm:text-lg md:text-xl text-foreground/70 text-center font-medium">
          {formatDate(time)}
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/30"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/30"></div>
      </div>
    </div>
  );
};
