import { LiveClock } from '@/components/LiveClock';
import { GameInfo } from '@/components/GameInfo';
import casinoLogo from '@/assets/casino-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <header className="text-center space-y-6 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <img 
                src={casinoLogo} 
                alt="Casino Logo" 
                className="relative h-24 md:h-32 w-auto object-contain"
              />
            </div>
          </div>

          {/* Welcome Message */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 blur-xl"></div>
            <h1 className="relative text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Welcome to the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 animate-shimmer">
                World Live Casino
              </span>
            </h1>
          </div>

          {/* Game Information */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <GameInfo label="Table Number" value="A-07" />
            <GameInfo label="Round Number" value="15423" />
          </div>
        </header>

        {/* Time Display Section */}
        <main className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6">
              Live Time Display
            </h2>
          </div>

          {/* Timezone Clocks */}
          <div className="grid md:grid-cols-2 gap-6">
            <LiveClock 
              timezone="America/New_York" 
              label="Eastern Time (ET)" 
            />
            <LiveClock 
              timezone="Asia/Hong_Kong" 
              label="Hong Kong Time (HKT)" 
            />
          </div>
        </main>

        {/* Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
