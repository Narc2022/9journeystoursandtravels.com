import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto py-20 px-6 text-center text-primary-foreground">
        <Badge className="mb-6 text-base px-6 py-2 bg-accent text-accent-foreground hover:bg-accent/90">
          Available 24/7 · All India Permit
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
          9JOURNEYS Tours & Travels
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Your trusted travel partner for car rentals, road trips, and memorable journeys across India. 
          Premium AC/Non-AC vehicles with professional drivers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 items-center">
          <a 
            href="tel:8999128018"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            <Phone className="w-5 h-5" />
            8999128018
          </a>
          
          <a 
            href="tel:8999449018"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5" />
            8999449018
          </a>
        </div>

        <p className="mt-6 text-sm opacity-90">
          Sajan Jadhav — Owner & Travel Consultant
        </p>
      </div>
    </section>
  );
};

export default Hero;
