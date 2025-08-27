import { Card, CardContent } from "@/components/ui/card";

const BusinessAreas = () => {
  const businessAreas = [
    {
      title: "Forestry Management Platform",
      description: "Comprehensive forestry data analysis for sustainable timber harvesting, conservation planning, and forest health monitoring.",
      features: [
        "Forest inventory management",
        "Timber yield optimization", 
        "Conservation planning tools",
        "Disease and pest monitoring",
        "Sustainable harvesting analytics"
      ],
      icon: (
        <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <circle cx="12" cy="12" r="3" fill="hsl(var(--dark-grey))"/>
        </svg>
      )
    },
    {
      title: "Agriculture Data Analysis & Prediction System", 
      description: "Advanced agricultural analytics for crop monitoring, yield prediction, and farming optimization through data-driven insights.",
      features: [
        "Crop yield prediction models",
        "Soil health analysis",
        "Weather pattern integration",
        "Irrigation optimization",
        "Market trend forecasting"
      ],
      icon: (
        <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          <rect x="7" y="8" width="2" height="8" fill="hsl(var(--dark-grey))"/>
          <rect x="15" y="10" width="2" height="6" fill="hsl(var(--dark-grey))"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-grey">
            Our <span className="text-primary">Business Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized solutions for forestry management and agricultural optimization, 
            powered by advanced data analytics and predictive intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {businessAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 h-full">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-dark-grey text-center">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;