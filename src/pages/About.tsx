import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Our Company
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Innovating for tomorrow, delivering results today
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-charcoal-black">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  Founded with a vision to transform how businesses operate through technology, 
                  we have grown from a small startup to a trusted partner for organizations 
                  across various industries.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team of experts combines deep industry knowledge with cutting-edge 
                  technology to deliver solutions that drive real business value. We believe 
                  in the power of innovation to solve complex challenges and create 
                  opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Gallery */}
        <section className="py-20 bg-light-grey/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-charcoal-black">
                Meet Our Founders
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                The visionary leaders who built our company from the ground up, bringing together decades of expertise in technology, agriculture, and forestry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    title: "CEO & Co-Founder",
                    description: "Agricultural data scientist with 15+ years in precision agriculture and machine learning.",
                    initials: "SC",
                    gradient: "bg-gradient-hero"
                  },
                  {
                    name: "Michael Rodriguez",
                    title: "CTO & Co-Founder", 
                    description: "Full-stack engineer and systems architect specializing in large-scale data platforms.",
                    initials: "MR",
                    gradient: "bg-gradient-orange"
                  },
                  {
                    name: "Dr. Emily Johnson",
                    title: "Chief Science Officer & Co-Founder",
                    description: "Forest ecology researcher and conservation expert with PhD from Stanford University.",
                    initials: "EJ",
                    gradient: "bg-gradient-hero"
                  },
                  {
                    name: "David Park",
                    title: "COO & Co-Founder",
                    description: "Operations leader and business strategist with experience scaling tech companies.",
                    initials: "DP",
                    gradient: "bg-gradient-orange"
                  }
                ].map((founder, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6">
                        <div className={`w-24 h-24 ${founder.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl font-bold text-white">
                            {founder.initials}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-charcoal-black">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3">
                        {founder.title}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {founder.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-charcoal-black">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal-black">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push boundaries and embrace new technologies to stay ahead of the curve.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal-black">Quality</h3>
                <p className="text-muted-foreground">
                  Excellence in everything we do, from initial concept to final delivery and beyond.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-charcoal-black">Partnership</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships with our clients based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;