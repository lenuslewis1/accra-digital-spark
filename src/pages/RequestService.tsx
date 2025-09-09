import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  Calendar,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useServiceRequest } from "@/hooks/useServiceRequest";

const RequestService = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { submitServiceRequest, isSubmitting } = useServiceRequest();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    projectTitle: "",
    message: ""
  });

  const services = [
    "Search Engine Optimization",
    "Social Media Marketing", 
    "Brand Design & Identity",
    "Web Development",
    "Email Marketing",
    "Content Creation",
    "Digital Advertising",
    "E-commerce Solutions",
    "Mobile App Development",
    "UI/UX Design",
    "Printing Services"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Not sure yet"
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitServiceRequest({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceType: formData.service,
      projectTitle: formData.projectTitle,
      projectDescription: formData.message,
      budgetRange: formData.budget,
      timeline: formData.timeline,
    });
    
    if (result.success) {
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        projectTitle: "",
        message: ""
      });
      
      // Redirect to home
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Request a Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and we'll create a custom proposal tailored to your business needs and goals.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-0 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center">
                    <User className="mr-3 w-6 h-6 text-accent" />
                    Contact Information
                  </h2>
                  
                   <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <Label htmlFor="firstName">First Name *</Label>
                       <Input
                         id="firstName"
                         value={formData.firstName}
                         onChange={(e) => handleInputChange("firstName", e.target.value)}
                         placeholder="Your first name"
                         required
                         className="h-12"
                       />
                     </div>
                     
                     <div className="space-y-2">
                       <Label htmlFor="lastName">Last Name *</Label>
                       <Input
                         id="lastName"
                         value={formData.lastName}
                         onChange={(e) => handleInputChange("lastName", e.target.value)}
                         placeholder="Your last name"
                         required
                         className="h-12"
                       />
                     </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+233 XX XXX XXXX"
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground flex items-center">
                    <MessageSquare className="mr-3 w-6 h-6 text-accent" />
                    Project Details
                  </h2>
                  
                   <div className="space-y-6">
                     <div className="space-y-2">
                       <Label htmlFor="projectTitle">Project Title *</Label>
                       <Input
                         id="projectTitle"
                         value={formData.projectTitle}
                         onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                         placeholder="Brief title for your project"
                         required
                         className="h-12"
                       />
                     </div>
                   </div>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <Label htmlFor="service">Service Needed *</Label>
                       <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                         <SelectTrigger className="h-12">
                           <SelectValue placeholder="Select a service" />
                         </SelectTrigger>
                         <SelectContent>
                           {services.map((service) => (
                             <SelectItem key={service} value={service}>
                               {service}
                             </SelectItem>
                           ))}
                         </SelectContent>
                       </Select>
                     </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your project, goals, and any specific requirements..."
                    rows={6}
                    required
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="text-lg px-12 py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Submit Service Request
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Fast Response</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours with a detailed proposal.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">No hidden fees. Clear, upfront pricing for all our services.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Flexible Timeline</h3>
                <p className="text-muted-foreground">We work with your schedule to deliver results on time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
