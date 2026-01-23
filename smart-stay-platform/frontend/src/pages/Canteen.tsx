import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FoodCard from "@/components/FoodCard";
import { toast } from "sonner";

const foodItems = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "Crispy rice crepe with spiced potato filling, served with sambar and chutney",
    price: 60,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
    category: "Breakfast",
    prepTime: "15 min",
    calories: 350,
    isVeg: true,
  },
  {
    id: "2",
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato-based creamy sauce with butter",
    price: 180,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    category: "Main Course",
    prepTime: "25 min",
    calories: 550,
    isVeg: false,
  },
  {
    id: "3",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated in spices and yogurt",
    price: 150,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    category: "Starters",
    prepTime: "20 min",
    calories: 400,
    isVeg: true,
  },
  {
    id: "4",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices",
    price: 200,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    category: "Main Course",
    prepTime: "30 min",
    calories: 650,
    isVeg: false,
  },
  {
    id: "5",
    name: "Fresh Fruit Juice",
    description: "Seasonal fresh fruit juice, no added sugar",
    price: 40,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&q=80",
    category: "Beverages",
    prepTime: "5 min",
    calories: 120,
    isVeg: true,
  },
  {
    id: "6",
    name: "Gulab Jamun",
    description: "Sweet milk solids dumplings soaked in rose-flavored sugar syrup",
    price: 50,
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=400&q=80",
    category: "Desserts",
    prepTime: "10 min",
    calories: 280,
    isVeg: true,
  },
];

const categories = ["All", "Breakfast", "Starters", "Main Course", "Beverages", "Desserts"];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Canteen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (id: string, quantity: number) => {
    const item = foodItems.find((f) => f.id === id);
    if (!item) return;

    setCart((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (quantity === 0) {
        return prev.filter((c) => c.id !== id);
      }
      if (existing) {
        return prev.map((c) => (c.id === id ? { ...c, quantity } : c));
      }
      return [...prev, { id, name: item.name, price: item.price, quantity }];
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredItems = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCheckout = () => {
    toast.success("Order placed successfully! Your food will be ready soon.");
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-accent/5 via-background to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campus Canteen
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delicious, healthy, and affordable meals for students
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border sticky top-16 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 flex-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-hero" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Cart Button */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative ml-4 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="hidden sm:inline">Cart</span>
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-card border-border">
                <SheetHeader>
                  <SheetTitle>Your Cart ({cartCount} items)</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col h-full">
                  {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                      <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="flex-1 space-y-4 overflow-y-auto">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">
                                ₹{item.price} × {item.quantity}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">₹{item.price * item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleAddToCart(item.id, 0)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4 mt-4 space-y-4">
                        <div className="flex items-center justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span>₹{cartTotal}</span>
                        </div>
                        <Button
                          className="w-full bg-gradient-hero hover:opacity-90"
                          onClick={handleCheckout}
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Food Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} {...item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground">Try a different search or category</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Canteen;
