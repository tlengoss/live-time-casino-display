import { LiveClock } from '@/components/LiveClock';
import { GameInfo } from '@/components/GameInfo';
import casinoLogo from '@/assets/casino-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/90 p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Header Section */}
        <header className="text-center space-y-4 sm:space-y-6 animate-fade-in">
          {/* Logo with enhanced effects */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/40 to-secondary/30 blur-3xl rounded-full animate-pulse-glow"></div>
              <div className="relative p-2 sm:p-4 rounded-2xl bg-gradient-to-br from-card/50 to-transparent backdrop-blur-sm border border-primary/20">
                <img 
                  src={casinoLogo} 
                  alt="World Live Casino Logo" 
                  className="relative h-16 sm:h-20 md:h-28 lg:h-32 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,204,0,0.3)]"
                />
              </div>
            </div>
          </div>

          {/* Welcome Message with enhanced styling */}
          <div className="relative inline-block px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-2xl"></div>
            <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight leading-tight">
              Welcome to the{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 animate-shimmer [background-size:200%_auto]">
                World Live Casino
              </span>
            </h1>
          </div>

          {/* Game Information - Enhanced for tablets */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
            <GameInfo label="Table Number" value="A-07" />
            <GameInfo label="Round Number" value="15423" />
          </div>
        </header>

        {/* Divider with decorative elements */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 bg-background text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
              Live Time Display
            </span>
          </div>
        </div>

        {/* Timezone Clocks - Optimized for tablets */}
        <main className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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

        {/* Enhanced Decorative Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[5%] w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-[10%] right-[5%] w-72 sm:w-96 lg:w-[500px] h-72 sm:h-96 lg:h-[500px] bg-secondary/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] lg:w-[600px] h-96 sm:h-[500px] lg:h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
