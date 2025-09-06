import { Button } from "@/components/ui/button";

const Hero = () => {
  console.log("Hero component is rendering");
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 py-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed text-charcoal-black pb-2">
              <span className="block">
                Data Intelligence for
              </span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent mt-3 pb-1">
                Agriculture & Forestry
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-grey leading-relaxed max-w-lg py-2">
              Advanced analytics platform that aggregates data from agricultural and forestry operations, 
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
          
          {/* Image Side - Simplified for testing */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-green-500">
              <div className="w-full h-[600px] flex items-center justify-center text-white text-2xl font-bold">
                Agricultural Data Platform
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">25%</div>
                <div className="text-sm text-gray-800">Yield Increase</div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-green-600">10M+</div>
                <div className="text-sm text-gray-800">Acres Monitored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;