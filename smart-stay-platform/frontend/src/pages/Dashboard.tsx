import { motion } from "framer-motion";
import {
  Calendar,
  CreditCard,
  CheckCircle2,
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Edit2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardCard from "@/components/DashboardCard";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 9876543210",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
    college: "IIT Mumbai",
    roomNumber: "A-204",
  };

  const accommodation = {
    name: "Modern Studio Apartment",
    location: "Andheri West, Mumbai",
    startDate: "Jan 15, 2024",
    endDate: "Jan 14, 2025",
    duration: "12 months",
    totalRent: 144000,
    paidAmount: 84000,
    pendingAmount: 60000,
    nextPaymentDate: "Feb 15, 2024",
  };

  const paymentProgress = (accommodation.paidAmount / accommodation.totalRent) * 100;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name.split(" ")[0]}! 👋</h1>
          <p className="text-muted-foreground">Here's an overview of your accommodation and payments</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <DashboardCard
            title="Agreement Duration"
            value={accommodation.duration}
            subtitle={`${accommodation.startDate} - ${accommodation.endDate}`}
            icon={Calendar}
            variant="default"
          />
          <DashboardCard
            title="Total Rent"
            value={`₹${accommodation.totalRent.toLocaleString()}`}
            subtitle="For the entire agreement"
            icon={CreditCard}
            variant="accent"
          />
          <DashboardCard
            title="Paid Amount"
            value={`₹${accommodation.paidAmount.toLocaleString()}`}
            subtitle={`${paymentProgress.toFixed(0)}% completed`}
            icon={CheckCircle2}
            variant="success"
          />
          <DashboardCard
            title="Pending Amount"
            value={`₹${accommodation.pendingAmount.toLocaleString()}`}
            subtitle={`Next payment: ${accommodation.nextPaymentDate}`}
            icon={Clock}
            variant="warning"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accommodation Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Accommodation Details</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Edit2 className="h-4 w-4" />
                  Edit
                </Button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80"
                  alt={accommodation.name}
                  className="w-full md:w-48 h-32 object-cover rounded-xl"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{accommodation.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{accommodation.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>Room: {user.roomNumber}</span>
                  </div>
                </div>
              </div>

              {/* Payment Progress */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Payment Progress</span>
                  <span className="text-sm text-muted-foreground">{paymentProgress.toFixed(0)}%</span>
                </div>
                <Progress value={paymentProgress} className="h-3" />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>₹{accommodation.paidAmount.toLocaleString()} paid</span>
                  <span>₹{accommodation.pendingAmount.toLocaleString()} remaining</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="mt-6">
                <Button className="w-full bg-gradient-hero hover:opacity-90 gap-2">
                  <CreditCard className="h-5 w-5" />
                  Pay ₹{(accommodation.pendingAmount / 6).toLocaleString()} (Monthly Installment)
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Profile</h2>
                <Button variant="ghost" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col items-center text-center mb-6">
                <Avatar className="h-20 w-20 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-xl">{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                <p className="text-muted-foreground text-sm">{user.college}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground truncate">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">{user.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <Building2 className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Room</p>
                    <p className="text-sm font-medium text-foreground">{user.roomNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
