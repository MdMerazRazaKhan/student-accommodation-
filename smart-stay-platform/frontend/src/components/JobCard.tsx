import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, DollarSign, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  isInternship: boolean;
  tags: string[];
  onApply: (id: string) => void;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  type,
  salary,
  posted,
  logo,
  isInternship,
  tags,
  onApply,
}: JobCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 4 }}
      className="group bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Logo */}
        <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 overflow-hidden">
          {logo ? (
            <img src={logo} alt={company} className="h-full w-full object-cover" />
          ) : (
            <Building className="h-7 w-7 text-muted-foreground" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <Badge className={`${isInternship ? "bg-accent" : "bg-primary"} text-white flex-shrink-0`}>
              {isInternship ? "Internship" : "Full-time"}
            </Badge>
          </div>

          {/* Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{type}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>{salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{posted}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => onApply(id)}
              className="bg-gradient-hero hover:opacity-90"
            >
              Apply Now
            </Button>
            <Button variant="outline">Save Job</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
