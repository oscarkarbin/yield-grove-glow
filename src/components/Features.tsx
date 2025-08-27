import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "Data Aggregation",
      description: "Seamlessly collect and unify data from multiple sources across your forestry and agricultural operations."
    },
    {
      icon: "🌱",
      title: "Crop Intelligence", 
      description: "Advanced analytics for crop monitoring, yield prediction, and optimization strategies."
    },
    {
      icon: "🌲",
      title: "Forest Management",
      description: "Comprehensive forestry data analysis for sustainable timber harvesting and conservation."
    },
    {
      icon: "📈",
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and identify optimization opportunities."
    },
    {
      icon: "🛰️",
      title: "Satellite Integration",
      description: "Real-time satellite imagery and remote sensing data for comprehensive field monitoring."
    },
    {
      icon: "⚡",
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
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
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