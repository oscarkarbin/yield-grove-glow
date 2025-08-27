import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-light-grey/30">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-hero rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-glow rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-hero rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/10"></div>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-digital font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Yield
            </div>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-dark-grey">
            Data Intelligence for
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Agriculture & Forestry
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advanced analytics platform that aggregates data from agricultural and forestry operations, 
            delivering actionable insights for sustainable growth and maximum productivity.
          </p>
          
          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
            <div className="flex items-center gap-2 text-primary">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="font-semibold">Real-time</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <span className="font-semibold">Predictive</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <span className="font-semibold">Global Scale</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-hero hover:shadow-large transform hover:scale-105 transition-all duration-300 text-lg px-10 py-6 rounded-xl">
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm text-lg px-10 py-6 rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;