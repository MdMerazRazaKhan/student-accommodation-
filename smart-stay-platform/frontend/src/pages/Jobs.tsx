import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobCard from "@/components/JobCard";
import { toast } from "sonner";

const jobListings = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechStartup Inc.",
    location: "Bangalore",
    type: "Remote",
    salary: "₹15,000/month",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&q=80",
    isInternship: true,
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "2",
    title: "Marketing Associate",
    company: "BrandCraft",
    location: "Mumbai",
    type: "On-site",
    salary: "₹4.5 LPA",
    posted: "1 week ago",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&q=80",
    isInternship: false,
    tags: ["Digital Marketing", "SEO", "Content"],
  },
  {
    id: "3",
    title: "Data Science Intern",
    company: "DataMinds",
    location: "Hyderabad",
    type: "Hybrid",
    salary: "₹20,000/month",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&q=80",
    isInternship: true,
    tags: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: "4",
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Delhi",
    type: "Remote",
    salary: "₹6 LPA",
    posted: "5 days ago",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&q=80",
    isInternship: false,
    tags: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: "5",
    title: "Backend Developer Intern",
    company: "CloudServe",
    location: "Pune",
    type: "On-site",
    salary: "₹18,000/month",
    posted: "1 day ago",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80",
    isInternship: true,
    tags: ["Node.js", "MongoDB", "APIs"],
  },
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleApply = (id: string) => {
    const job = jobListings.find((j) => j.id === id);
    toast.success(`Application submitted for ${job?.title} at ${job?.company}!`);
  };

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "internships") return matchesSearch && job.isInternship;
    if (activeTab === "jobs") return matchesSearch && !job.isInternship;
    return matchesSearch;
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
              Internships & Job Opportunities
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kickstart your career with opportunities tailored for students
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
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs & Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="all" className="gap-2">
                  All ({jobListings.length})
                </TabsTrigger>
                <TabsTrigger value="internships" className="gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Internships ({jobListings.filter((j) => j.isInternship).length})
                </TabsTrigger>
                <TabsTrigger value="jobs" className="gap-2">
                  <Briefcase className="h-4 w-4" />
                  Jobs ({jobListings.filter((j) => !j.isInternship).length})
                </TabsTrigger>
              </TabsList>
              <p className="text-muted-foreground text-sm hidden md:block">
                Showing {filteredJobs.length} opportunities
              </p>
            </div>

            <TabsContent value="all" className="mt-0">
              <JobList jobs={filteredJobs} onApply={handleApply} />
            </TabsContent>
            <TabsContent value="internships" className="mt-0">
              <JobList jobs={filteredJobs} onApply={handleApply} />
            </TabsContent>
            <TabsContent value="jobs" className="mt-0">
              <JobList jobs={filteredJobs} onApply={handleApply} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

const JobList = ({
  jobs,
  onApply,
}: {
  jobs: typeof jobListings;
  onApply: (id: string) => void;
}) => {
  if (jobs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <Briefcase className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">No opportunities found</h3>
        <p className="text-muted-foreground">Try a different search term</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} onApply={onApply} />
      ))}
    </div>
  );
};

export default Jobs;
