import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-digital font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              Yield
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transforming agriculture and forestry through intelligent data aggregation 
              and advanced analytics. Empowering sustainable growth worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><span className="text-white/80">info@yieldrobotics.se</span></li>
              <li><span className="text-white/80">Gothenburg, Sweden</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 YIELD Robotics AB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;