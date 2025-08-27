import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      ),
      title: "Data Aggregation",
      description: "Seamlessly collect and unify data from multiple sources across your forestry and agricultural operations."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26 22 9L17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9 10.91 8.26 12 2Z"/>
          <circle cx="12" cy="12" r="2" fill="hsl(var(--dark-grey))"/>
        </svg>
      ),
      title: "Crop Intelligence", 
      description: "Advanced analytics for crop monitoring, yield prediction, and optimization strategies."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <rect x="11" y="11" width="2" height="6" fill="hsl(var(--dark-grey))"/>
        </svg>
      ),
      title: "Forest Management",
      description: "Comprehensive forestry data analysis for sustainable timber harvesting and conservation."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
        </svg>
      ),
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and identify optimization opportunities."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6" fill="hsl(var(--dark-grey))"/>
          <circle cx="12" cy="12" r="2" fill="hsl(var(--primary))"/>
        </svg>
      ),
      title: "Satellite Integration",
      description: "Real-time satellite imagery and remote sensing data for comprehensive field monitoring."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Real-time Insights",
      description: "Instant alerts and dashboards that keep you informed of critical changes and opportunities."
    }
  ];

  return (
    <section className="py-20 bg-light-grey/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-grey">
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
                <h3 className="text-xl font-bold mb-4 text-dark-grey">
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