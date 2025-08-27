import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </div>
      ),
      title: "Data Aggregation",
      description: "Seamlessly collect and unify data from multiple sources across your forestry and agricultural operations."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      ),
      title: "Crop Intelligence", 
      description: "Advanced analytics for crop monitoring, yield prediction, and optimization strategies."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
      ),
      title: "Forest Management",
      description: "Comprehensive forestry data analysis for sustainable timber harvesting and conservation."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
        </div>
      ),
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and identify optimization opportunities."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
          </svg>
        </div>
      ),
      title: "Satellite Integration",
      description: "Real-time satellite imagery and remote sensing data for comprehensive field monitoring."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
      ),
      title: "Real-time Insights",
      description: "Instant alerts and dashboards that keep you informed of critical changes and opportunities."
    }
  ];

  return (
    <section className="py-20 bg-silver-birch/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-swedish-charcoal">
            Powerful Features for 
            <span className="text-primary"> Modern Agriculture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to make data-driven decisions 
            that improve yields, reduce costs, and promote sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-swedish-charcoal">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;