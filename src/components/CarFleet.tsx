import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase } from "lucide-react";
import innovaCar from "@/assets/innova-car.jpg";
import auraCar from "@/assets/aura-car.jpg";
import dzireCar from "@/assets/dzire-car.jpg";

const CarFleet = () => {
  const cars = [
    {
      name: "Toyota Innova Crysta",
      image: innovaCar,
      capacity: "7 Seaters",
      luggage: "3-4 Bags",
      type: "Premium MPV",
      features: ["AC", "Spacious", "Comfortable", "Family Friendly"],
      description: "Perfect for family trips and group travel with premium comfort"
    },
    {
      name: "Hyundai Aura",
      image: auraCar,
      capacity: "4 Seaters",
      luggage: "2-3 Bags",
      type: "Compact Sedan",
      features: ["AC", "Fuel Efficient", "City Rides", "Affordable"],
      description: "Ideal for city travel and short-distance journeys"
    },
    {
      name: "Swift Dzire",
      image: dzireCar,
      capacity: "4 Seaters",
      luggage: "2-3 Bags",
      type: "Premium Sedan",
      features: ["AC", "Comfortable", "Stylish", "Reliable"],
      description: "Popular choice for both business and leisure travel"
    }
  ];

  return (
    <section id="cars" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Fleet
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Well-maintained vehicles to suit every travel need and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {car.type}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{car.name}</CardTitle>
                <CardDescription className="text-base">{car.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{car.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{car.luggage}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarFleet;
