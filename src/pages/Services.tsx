import { motion } from "framer-motion";
import { 
  Smartphone, 
  Search, 
  PenTool, 
  BarChart3, 
  Globe, 
  Mail,
  Video,
  ShoppingBag 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your visibility on Google and drive organic traffic with our proven SEO strategies tailored for the Ghanaian market.",
      features: ["Local SEO", "Technical SEO", "Content Optimization", "Link Building"],
    },
    {
      icon: BarChart3,
      title: "Social Media Marketing",
      description: "Build meaningful connections with your audience across Facebook, Instagram, Twitter, and LinkedIn with engaging content.",
      features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
    },
    {
      icon: PenTool,
      title: "Brand Design & Identity",
      description: "Create a memorable brand identity that resonates with your target audience and stands out in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Website Design"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Build fast, responsive websites that convert visitors into customers with our custom development solutions.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
      features: ["Campaign Design", "Automation", "List Management", "A/B Testing"],
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "Tell your story through compelling visual content including photography, videography, and graphic design.",
      features: ["Photography", "Video Production", "Graphic Design", "Copywriting"],
    },
    {
      icon: Smartphone,
      title: "Digital Advertising",
      description: "Maximize your ROI with targeted advertising campaigns across Google Ads, Facebook, and other platforms.",
      features: ["PPC Management", "Social Ads", "Display Advertising", "Remarketing"],
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Launch and grow your online store with our comprehensive e-commerce development and marketing services.",
      features: ["Store Setup", "Payment Integration", "Inventory Management", "Marketing Automation"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitive landscape to develop a customized digital strategy."
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Our creative team brings your vision to life with stunning designs and robust development that delivers results."
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "We launch your campaigns and continuously monitor performance, making data-driven optimizations for maximum impact."
    },
    {
      step: "04",
      title: "Grow & Scale",
      description: "As your business grows, we scale our strategies and explore new opportunities to maintain your competitive edge."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive digital solutions designed to help your business thrive in Ghana's evolving digital landscape.
            </p>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing solutions that drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-smooth group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our digital marketing services can help your business achieve its goals and reach new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;