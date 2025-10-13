interface GameInfoProps {
  label: string;
  value: string | number;
}

export const GameInfo = ({ label, value }: GameInfoProps) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main card */}
      <div className="relative flex flex-col items-center justify-center space-y-2 p-5 sm:p-6 min-w-[140px] sm:min-w-[180px] bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20">
        <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-[0.15em]">
          {label}
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/80">
          {value}
        </div>
        
        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </div>
  );
};
