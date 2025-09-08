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
  Rocket,
  Brain,
  Sparkles,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useTestimonials } from "@/hooks/useTestimonials";

const Index = () => {
  const { testimonials: clientTestimonials, loading } = useTestimonials();
  
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation that transforms your business operations."
    },
    {
      icon: Globe,
      title: "Web Development", 
      description: "Modern web applications built with cutting-edge technology."
    },
    {
      icon: Sparkles,
      title: "Digital Strategy",
      description: "Data-driven strategies that amplify your digital presence."
    },
    {
      icon: Cpu,
      title: "Tech Innovation",
      description: "Revolutionary solutions that push the boundaries of possibility."
    }
  ];

  const stats = [
    { number: "500", label: "AI Models Deployed", description: "We've deployed over 500 AI models that are actively transforming businesses", suffix: "+" },
    { number: "300", label: "Growth Achieved", description: "Our intelligent solutions have helped clients achieve up to 300% efficiency gains", suffix: "%" },
    { number: "1000", label: "Happy Clients", description: "More than 1000 forward-thinking businesses trust us with their AI transformation", suffix: "+" }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Intelligent Automation",
      description: "Let AI handle the mundane while you focus on innovation and growth."
    },
    {
      icon: Clock,
      title: "24/7 AI Operations", 
      description: "Your AI systems work around the clock, delivering consistent results."
    },
    {
      icon: Target,
      title: "Precision Solutions",
      description: "Every AI solution is precisely calibrated to your unique business needs."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Military-grade security protocols protect your data and AI systems."
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Our AI systems evolve and improve, getting smarter every day."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="display-xl text-foreground mb-8 leading-tight">
                AI Reimagined,<br />
                <span className="text-gradient-purple">Possibilities Amplified</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Crafting intelligent solutions that turn your wildest tech dreams into reality.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <Button variant="gradient" size="lg" className="text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Colorful 3D-inspired Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mb-20"
            >
              <div className="relative max-w-4xl mx-auto h-80 flex items-center justify-center">
                {/* Background gradient cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-64 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl transform -rotate-12 opacity-80"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-56 bg-gradient-to-br from-green-400 to-green-500 rounded-3xl transform rotate-6 translate-x-20 opacity-85"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-88 h-60 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl transform -translate-x-12 translate-y-4 z-10 shadow-2xl">
                    <div className="p-8 h-full flex flex-col justify-center text-white">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">AI Community</h3>
                        <p className="text-sm opacity-90 mb-3">Join the AI revolution and unleash your creative spirit</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs opacity-75">More than 50K users</span>
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-white/30 rounded-full border border-white/40"></div>
                            <div className="w-6 h-6 bg-white/30 rounded-full border border-white/40"></div>
                            <div className="w-6 h-6 bg-white/30 rounded-full border border-white/40"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured In Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-20"
            >
              <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wide font-medium">As Featured In</p>
              <div className="flex items-center justify-center gap-12 opacity-60">
                <div className="text-2xl font-bold text-muted-foreground">TechCrunch</div>
                <div className="text-2xl font-bold text-muted-foreground">Forbes</div>
                <div className="text-2xl font-bold text-muted-foreground">Wired</div>
                <div className="text-2xl font-bold text-muted-foreground">VentureBeat</div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    {stat.number}<span className="text-gradient-purple">{stat.suffix || "+"}</span>
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
              Why choose our <span className="text-gradient-purple">AI solutions</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why partnering with us is the smartest move for your AI transformation journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-left group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Comprehensive AI solutions designed to revolutionize your business operations and unlock new possibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="text-gradient-purple">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what some of our amazing clients have to say about their AI transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="p-8 border-0 bg-card/50 backdrop-blur-sm">
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
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-1">
                    {testimonial.rating && (
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    )}
                    <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.testimonial_text}"</p>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.client_name}</div>
                      <div className="text-sm text-muted-foreground mt-1">
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
              Ready to Transform Your <span className="text-gradient-purple">Business</span> with AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create intelligent solutions that revolutionize how you operate. Get started with a free AI consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="gradient" size="lg" className="text-lg">
                  Get Free AI Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg">
                  Explore AI Services
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