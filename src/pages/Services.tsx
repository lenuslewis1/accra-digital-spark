import { motion } from "framer-motion";
import { 
  Smartphone, 
  Search, 
  PenTool, 
  BarChart3, 
  Globe, 
  Mail,
  Video,
  ShoppingBag,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Printer,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Create custom mobile applications that engage users and drive business growth with intuitive design and functionality.",
      features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design beautiful, user-friendly interfaces that provide exceptional experiences and increase conversion rates.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      icon: Printer,
      title: "Printing Services",
      description: "Professional printing solutions for all your marketing materials, from business cards to large format displays.",
      features: ["Business Cards", "Brochures", "Banners", "Marketing Collateral"],
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
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="display-xl text-foreground mb-8 leading-tight">
              Digital Marketing <span className="text-gradient-purple">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to help your business thrive in Ghana's evolving digital landscape and reach new heights of success.
            </p>
            <Button variant="gradient" size="lg" className="text-lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Why Choose <span className="text-gradient-purple">Mainstream Digital</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine local market expertise with international best practices to deliver results that matter for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Over 200 successful campaigns with measurable ROI increases for our clients across Ghana."
              },
              {
                icon: Star,
                title: "Local Expertise",
                description: "Deep understanding of the Ghanaian market and consumer behavior patterns."
              },
              {
                icon: Check,
                title: "Full-Service Agency",
                description: "Everything you need under one roof - from strategy to execution and optimization."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Our <span className="text-gradient-purple">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing solutions that drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-white transition-all duration-300" asChild>
                    <Link to="/request-service">
                      Request Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Our <span className="text-gradient-purple">Process</span>
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
                <div className="w-20 h-20 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="display-lg text-foreground mb-6">
              Ready to Get <span className="text-gradient-purple">Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our digital marketing services can help your business achieve its goals and reach new heights of success in Ghana and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;