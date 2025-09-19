import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Ready to start your next project? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 text-charcoal-black">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a question or want to discuss a project? Reach out to us through 
                  any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-gradient-card border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal-black mb-2">Email</h3>
                        <a href="mailto:info@yieldrobotics.se" className="text-muted-foreground hover:text-primary transition-colors">
                          info@yieldrobotics.se
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-0 shadow-medium">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-charcoal-black mb-2">Office</h3>
                        <p className="text-muted-foreground">
                          YIELD Robotics AB<br />
                          Eklandagatan 41B<br />
                          412 61 Gothenburg, Sweden
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-charcoal-black mb-6">
                      Business Hours
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-muted-foreground">
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p>9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p>10:00 AM - 4:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;