const Stats = () => {
  const stats = [
    {
      number: "10M+",
      label: "Acres Monitored",
      description: "Agricultural and forestry land under management"
    },
    {
      number: "25%",
      label: "Average Yield Increase",
      description: "Improvement in crop productivity for our clients"
    },
    {
      number: "500+",
      label: "Data Sources",
      description: "Integrated platforms and sensors"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable, always-on data processing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Driving Results Across the Industry
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Trusted by leading agricultural and forestry operations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2 text-white/90">
                {stat.label}
              </div>
              <p className="text-white/80 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;