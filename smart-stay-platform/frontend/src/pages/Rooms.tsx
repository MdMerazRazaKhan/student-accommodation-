import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RoomCard from "@/components/RoomCard";

const allRooms = [
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
  {
    id: "4",
    title: "Premium 2 BHK Flat",
    location: "Bandra East, Mumbai",
    price: 25000,
    type: "2 BHK",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    rating: 4.9,
    amenities: ["WiFi", "Parking", "Water"],
    available: true,
  },
  {
    id: "5",
    title: "Budget Single Room",
    location: "BTM Layout, Bangalore",
    price: 5500,
    type: "Single",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    rating: 4.2,
    amenities: ["WiFi", "Water"],
    available: true,
  },
  {
    id: "6",
    title: "Luxurious Studio Near College",
    location: "Powai, Mumbai",
    price: 18000,
    type: "Studio",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    rating: 4.7,
    amenities: ["WiFi", "Parking", "Water"],
    available: true,
  },
];

const roomTypes = ["All", "Studio", "1 BHK", "2 BHK", "Shared", "Single"];
const priceRanges = ["All", "Under ₹8,000", "₹8,000 - ₹15,000", "₹15,000 - ₹25,000", "Above ₹25,000"];

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const filteredRooms = allRooms.filter((room) => {
    const matchesSearch =
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || room.type === selectedType;
    
    let matchesPrice = true;
    if (selectedPrice === "Under ₹8,000") matchesPrice = room.price < 8000;
    else if (selectedPrice === "₹8,000 - ₹15,000") matchesPrice = room.price >= 8000 && room.price <= 15000;
    else if (selectedPrice === "₹15,000 - ₹25,000") matchesPrice = room.price > 15000 && room.price <= 25000;
    else if (selectedPrice === "Above ₹25,000") matchesPrice = room.price > 25000;
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Room
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our curated selection of student accommodations
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-4 shadow-sm border border-border max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location or room name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 border-0 bg-secondary"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-40 h-12 border-0 bg-secondary">
                  <SelectValue placeholder="Room Type" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {roomTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger className="w-full md:w-48 h-12 border-0 bg-secondary">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredRooms.length}</span> rooms
            </p>
            <div className="flex gap-2">
              {selectedType !== "All" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedType}
                  <button onClick={() => setSelectedType("All")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
              {selectedPrice !== "All" && (
                <Badge variant="secondary" className="gap-1">
                  {selectedPrice}
                  <button onClick={() => setSelectedPrice("All")} className="ml-1 hover:text-destructive">×</button>
                </Badge>
              )}
            </div>
          </div>

          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} {...room} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <MapPin className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No rooms found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                  setSelectedPrice("All");
                }}
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
