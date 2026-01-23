import { motion } from "framer-motion";
import { MapPin, Users, Wifi, Car, Droplets, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RoomCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  image: string;
  rating: number;
  amenities: string[];
  available: boolean;
}

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  parking: Car,
  water: Droplets,
};

const RoomCard = ({
  id,
  title,
  location,
  price,
  type,
  image,
  rating,
  amenities,
  available,
}: RoomCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={`${available ? "bg-success" : "bg-destructive"} text-white`}>
            {available ? "Available" : "Occupied"}
          </Badge>
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {type}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg bg-background/90 backdrop-blur-sm">
          <Star className="h-4 w-4 text-warning fill-warning" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {/* Amenities */}
        <div className="flex gap-3 mb-4">
          {amenities.slice(0, 3).map((amenity) => {
            const Icon = amenityIcons[amenity.toLowerCase()] || Users;
            return (
              <div
                key={amenity}
                className="flex items-center gap-1 text-xs text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="capitalize">{amenity}</span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <Button size="sm" className="bg-gradient-hero hover:opacity-90">
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
