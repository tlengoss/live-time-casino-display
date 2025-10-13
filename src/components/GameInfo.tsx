interface GameInfoProps {
  label: string;
  value: string | number;
}

export const GameInfo = ({ label, value }: GameInfoProps) => {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 bg-card/50 rounded-lg border border-primary/20">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary">
        {value}
      </div>
    </div>
  );
};
