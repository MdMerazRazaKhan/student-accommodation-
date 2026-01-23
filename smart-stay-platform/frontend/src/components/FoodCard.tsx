import { motion } from "framer-motion";
import { Plus, Minus, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface FoodCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  prepTime: string;
  calories: number;
  isVeg: boolean;
  onAddToCart: (id: string, quantity: number) => void;
}

const FoodCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  prepTime,
  calories,
  isVeg,
  onAddToCart,
}: FoodCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
    onAddToCart(id, quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      onAddToCart(id, quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge
            className={`${isVeg ? "bg-success" : "bg-destructive"} text-white`}
          >
            {isVeg ? "Veg" : "Non-Veg"}
          </Badge>
        </div>
        <Badge variant="secondary" className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm">
          {category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>

        {/* Info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            <span>{calories} cal</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          
          {quantity === 0 ? (
            <Button
              size="sm"
              onClick={handleAdd}
              className="bg-gradient-hero hover:opacity-90 gap-1"
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8"
                onClick={handleRemove}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <Button
                size="icon"
                className="h-8 w-8 bg-gradient-hero hover:opacity-90"
                onClick={handleAdd}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
