import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Globe, 
  Star,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  Clock,
  Shield,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useTestimonials } from "@/hooks/useTestimonials";

const Index = () => {
  const { testimonials: clientTestimonials, loading } = useTestimonials();
  
  const services = [
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies that convert."
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Beautiful, fast websites that engage visitors and drive results."
    },
    {
      icon: Target,
      title: "SEO & Analytics",
      description: "Get found online and track your success with advanced SEO."
    },
    {
      icon: Zap,
      title: "Brand Strategy",
      description: "Create a memorable brand that resonates with your audience."
    }
  ];

  const stats = [
    { number: "250", label: "Projects Delivered", description: "We've successfully completed over 250 projects—and we're just getting started!" },
    { number: "70", label: "Business Growth", description: "Our strategies have helped clients achieve up to 70% revenue growth in just one year!", suffix: "%" },
    { number: "500", label: "Happy Clients", description: "More than 500 satisfied clients trust us to bring their ideas to life.", suffix: "+" }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Lead Generation on Autopilot",
      description: "We take care of generating leads while you focus on doing what you love—running your business!"
    },
    {
      icon: Clock,
      title: "24/7 Brand Visibility", 
      description: "Your brand stays visible 24/7 with our automated marketing strategies."
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Every solution is tailored to fit your unique business needs—no cookie-cutter strategies here!"
    },
    {
      icon: Shield,
      title: "Big Agency Results",
      description: "Get big agency results without breaking the bank."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Our team comes up with out-of-the-box ideas to make your brand stand out."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="display-xl text-foreground mb-6">
                Big ideas, smart strategies,<br />
                and endless creativity to<br />
                supercharge <span className="accent-text">⚡</span> your brand!
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your go-to agency for designs that inspire and strategies that deliver. We turn ideas into lasting impressions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Button variant="hero" size="lg">
                Get Started Today
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mb-16"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Over 200+ Five Star Reviews</span>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    {stat.number}<span className="accent-text">{stat.suffix || "+"}</span>
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              See why partnering with us is the smartest move.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Our <span className="accent-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions designed to help your business succeed in Ghana's evolving digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-smooth group border-border">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              What Our <span className="accent-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what some of our amazing clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="p-6 border-border">
                  <div className="animate-pulse">
                    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-muted rounded w-full mb-2"></div>
                    <div className="h-3 bg-muted rounded w-5/6 mb-4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </Card>
              ))
            ) : (
              clientTestimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-smooth border-border">
                    {testimonial.rating && (
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    )}
                    <p className="text-muted-foreground mb-4">"{testimonial.testimonial_text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.client_name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.client_title && testimonial.client_company 
                          ? `${testimonial.client_title}, ${testimonial.client_company}`
                          : testimonial.client_title || testimonial.client_company || 'Valued Client'
                        }
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="display-lg text-foreground mb-6">
              Ready to Grow Your <span className="accent-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create a digital presence that drives real results for your business. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;