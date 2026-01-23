import { motion } from "framer-motion";
import { Building2, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSearch from "@/components/HeroSearch";
import RoomCard from "@/components/RoomCard";

const featuredRooms = [
  {
    id: "1",
    title: "Modern Studio Apartment",
    location: "Andheri West, Mumbai",
    price: 12000,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    rating: 4.8,
    amenities: ["WiFi", "Parking", "Water"],
    available: true,
  },
  {
    id: "2",
    title: "Cozy 1 BHK Near Metro",
    location: "Koramangala, Bangalore",
    price: 15000,
    type: "1 BHK",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    rating: 4.6,
    amenities: ["WiFi", "Parking", "Water"],
    available: true,
  },
  {
    id: "3",
    title: "Spacious Shared Room",
    location: "Hauz Khas, Delhi",
    price: 6000,
    type: "Shared",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    rating: 4.5,
    amenities: ["WiFi", "Water"],
    available: false,
  },
];

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All listings are personally verified for your safety",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round the clock assistance for all your needs",
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Connect with fellow students in your area",
  },
  {
    icon: Building2,
    title: "Best Locations",
    description: "Properties near colleges and transit points",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSearch />

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SmartStay?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make finding student accommodation simple, safe, and stress-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Accommodations
              </h2>
              <p className="text-muted-foreground">
                Hand-picked rooms at the best prices
              </p>
            </div>
            <Link to="/rooms">
              <Button variant="outline" className="gap-2">
                View All Rooms
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Perfect Stay?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of students who have found their ideal accommodation through SmartStay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="gap-2 min-w-[180px]">
                  Get Started Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/rooms">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 min-w-[180px]">
                  Browse Rooms
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
