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
    <div className="flex flex-col items-center space-y-2 p-6 bg-card rounded-xl border-2 border-primary/30 animate-fade-in">
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
      <div className="text-5xl md:text-6xl font-bold text-primary tabular-nums tracking-tight">
        {formatTime(time)}
      </div>
      <div className="text-lg md:text-xl text-foreground/80 text-center">
        {formatDate(time)}
      </div>
    </div>
  );
};
