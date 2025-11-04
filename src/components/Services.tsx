import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Car, Shield, Users, Route } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <MapPin className="w-10 h-10 text-primary" />,
      title: "All India Permit",
      description: "Travel anywhere across India without restrictions. Our vehicles have valid permits for interstate travel."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for your convenience. Book anytime, travel anytime with our dedicated support."
    },
    {
      icon: <Car className="w-10 h-10 text-primary" />,
      title: "AC / Non-AC Options",
      description: "Choose from budget-friendly non-AC or premium AC vehicles based on your comfort preferences."
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Safe & Insured",
      description: "All vehicles are fully insured with comprehensive coverage for your peace of mind during travel."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Professional Drivers",
      description: "Experienced and courteous drivers who know the routes well and ensure a smooth journey."
    },
    {
      icon: <Route className="w-10 h-10 text-primary" />,
      title: "Road Trip Packages",
      description: "Customized road trip packages for families, groups, and corporate travel needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive travel solutions designed for comfort, safety, and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
