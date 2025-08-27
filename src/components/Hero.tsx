import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroAgricultureImage from "@/assets/hero-agriculture.jpg";
import heroForestryImage from "@/assets/hero-forestry.jpg";
import heroSmartFarmingImage from "@/assets/hero-smart-farming.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroImages = [
    {
      src: heroAgricultureImage,
      title: "Agriculture Analytics",
      subtitle: "Advanced crop monitoring and yield optimization",
      stat1: { number: "25%", label: "Yield Increase" },
      stat2: { number: "10M+", label: "Acres Monitored" }
    },
    {
      src: heroForestryImage,
      title: "Forest Management",
      subtitle: "Sustainable timber and conservation planning",
      stat1: { number: "500K", label: "Trees Tracked" },
      stat2: { number: "98%", label: "Accuracy Rate" }
    },
    {
      src: heroSmartFarmingImage,
      title: "Smart Farming",
      subtitle: "AI-powered precision agriculture solutions",
      stat1: { number: "30%", label: "Cost Reduction" },
      stat2: { number: "24/7", label: "Monitoring" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 py-4">
            {/* Logo/Brand */}
            <div className="space-y-4">
              <div className="text-5xl md:text-7xl font-digital font-bold bg-gradient-hero bg-clip-text text-transparent">
                Yield
              </div>
              <div className="w-16 h-1 bg-gradient-hero rounded-full"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed text-charcoal-black pb-2">
              <span className={`block transition-all duration-500 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                Data Intelligence for
              </span>
              <span className={`block bg-gradient-hero bg-clip-text text-transparent mt-3 pb-1 transition-all duration-500 ${
                isTransitioning ? 'opacity-70 transform translate-y-1' : 'opacity-100 transform translate-y-0'
              }`}>
                {heroImages[currentImageIndex].title}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-slate-grey leading-relaxed max-w-lg py-2 transition-all duration-500 ${
              isTransitioning ? 'opacity-70' : 'opacity-100'
            }`}>
              {heroImages[currentImageIndex].subtitle} through our advanced analytics platform, 
              delivering actionable insights for sustainable growth and maximum productivity.
            </p>
            
            {/* Feature Icons */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-charcoal-black">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className="font-semibold">Real-time</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-black">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <span className="font-semibold">Predictive</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal-black">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </div>
                <span className="font-semibold">Global Scale</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:shadow-large transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl">
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 text-charcoal-black hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-lg px-8 py-6 rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <div className="relative w-full h-[600px]">
                <img 
                  src={heroImages[currentImageIndex].src} 
                  alt={heroImages[currentImageIndex].subtitle}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    isTransitioning ? 'opacity-70 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-tr from-vibrant-orange/20 via-transparent to-deep-orange/10 transition-opacity duration-700 ${
                  isTransitioning ? 'opacity-50' : 'opacity-100'
                }`}></div>
              </div>
              
              {/* Animated Floating Stats Cards */}
              <div className={`absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-500 transform ${
                isTransitioning ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'
              }`}>
                <div className="text-2xl font-bold text-vibrant-orange transition-all duration-300">
                  {heroImages[currentImageIndex].stat1.number}
                </div>
                <div className="text-sm text-charcoal-black transition-all duration-300">
                  {heroImages[currentImageIndex].stat1.label}
                </div>
              </div>
              
              <div className={`absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-all duration-500 transform ${
                isTransitioning ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'
              }`}>
                <div className="text-2xl font-bold text-vibrant-orange transition-all duration-300">
                  {heroImages[currentImageIndex].stat2.number}
                </div>
                <div className="text-sm text-charcoal-black transition-all duration-300">
                  {heroImages[currentImageIndex].stat2.label}
                </div>
              </div>

              {/* Image Indicator Dots */}
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Animated Orange accent elements */}
            <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-hero rounded-full opacity-20 blur-2xl transition-all duration-1000 ${
              isTransitioning ? 'scale-110 opacity-30' : 'scale-100 opacity-20'
            }`}></div>
            <div className={`absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-orange rounded-full opacity-15 blur-3xl transition-all duration-1000 ${
              isTransitioning ? 'scale-110 opacity-25' : 'scale-100 opacity-15'
            }`}></div>
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