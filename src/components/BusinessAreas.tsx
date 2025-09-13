import { Card, CardContent } from "@/components/ui/card";

const BusinessAreas = () => {
  const businessAreas = [
    {
      title: "Quantitative Agriculture Data",
      description: "Advanced data analytics and quantitative modeling for precision agriculture, crop optimization, and yield prediction.",
      features: [
        "Quantitative yield prediction models",
        "Precision agriculture analytics",
        "Crop performance optimization",
        "Data-driven farming insights",
        "Statistical modeling & forecasting"
      ],
      icon: (
        <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
      )
    },
    {
      title: "Forestry Management Platform",
      description: "Comprehensive forestry data analysis platform for sustainable timber operations, conservation planning, and forest health monitoring.",
      features: [
        "Forest inventory management",
        "Sustainable harvesting analytics", 
        "Conservation planning tools",
        "Forest health monitoring",
        "Timber yield optimization"
      ],
      icon: (
        <div className="w-20 h-20 bg-gradient-orange rounded-2xl flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
      )
    },
    {
      title: "Additional Services",
      description: "Custom technology solutions, consulting services, and specialized platforms tailored to meet your unique business requirements.",
      features: [
        "Custom software development",
        "Data integration services",
        "Technology consulting",
        "API development & integration",
        "Business intelligence solutions"
      ],
      icon: (
        <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-black">
            Our <span className="text-primary">Core Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized solutions in quantitative agriculture, forestry management, 
            and custom technology services powered by advanced data analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {businessAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 h-full">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-charcoal-black text-center">
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