import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  Megaphone,
  Sparkles,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useTestimonials } from "@/hooks/useTestimonials";
// removed embla carousel for a stacked-cards hero interaction

const Index = () => {
  const { testimonials: clientTestimonials, loading } = useTestimonials();
  
  // Typewriter effect for hero text
  const typewriterTexts = [
    "Shine Online.",
    "Grow Online.",
    "Get Seen Everywhere.",
    "Dominate the Digital Space.",
    "Reach the Right Audience."
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    let timeoutId;
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeoutId);
  }, [currentTextIndex, displayText, isTyping, typewriterTexts]);
  
  const services = [
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Drive organic traffic and maximize your online visibility in Accra and beyond."
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing", 
      description: "Engage your audience across all major social platforms with compelling content."
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Targeted advertising campaigns that deliver measurable ROI and conversions."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven strategies that turn insights into actionable marketing decisions."
    }
  ];

  const stats = [
    { number: "200", label: "Campaigns Launched", description: "We've launched over 200 successful marketing campaigns across Ghana", suffix: "+" },
    { number: "150", label: "ROI Increase", description: "Our digital strategies have helped clients achieve up to 150% return on investment", suffix: "%" },
    { number: "500", label: "Happy Clients", description: "More than 500 businesses in Accra trust us with their digital marketing", suffix: "+" }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Rapid Growth",
      description: "Accelerate your business growth with proven digital marketing strategies."
    },
    {
      icon: Globe,
      title: "Global Reach", 
      description: "Expand your market reach from Accra to international audiences."
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Every campaign is precisely targeted to your ideal customer demographics."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Comprehensive reputation management to protect and enhance your brand."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Fresh, creative approaches that make your brand stand out in the market."
    }
  ];

  // Hero cards for auto-rotating stacked display
  const heroCards = [
    {
      icon: Search,
      title: "SEO Growth",
      description: "Climb Google rankings and get discovered by customers in Accra.",
      gradient: "from-purple-500 to-purple-600",
      textColor: "text-purple-500",
      bgColor: "bg-purple-50",
      content: {
        title: "SEO Performance",
        items: [
          { label: "Keyword Rankings", value: "+45%", change: "↗", time: "This month" },
          { label: "Organic Traffic", value: "12.4K", change: "↗", time: "Last 30 days" },
          { label: "Click Through Rate", value: "8.7%", change: "↗", time: "Weekly avg" }
        ]
      }
    },
    {
      icon: Megaphone,
      title: "Social Media",
      description: "Build a loyal community with standout content and campaigns.",
      gradient: "from-pink-500 to-rose-500",
      textColor: "text-pink-500",
      bgColor: "bg-pink-50",
      content: {
        title: "Social Metrics",
        items: [
          { label: "Engagement Rate", value: "+32%", change: "↗", time: "This week" },
          { label: "New Followers", value: "2.8K", change: "↗", time: "Last 7 days" },
          { label: "Reach", value: "45.2K", change: "↗", time: "Campaign" }
        ]
      }
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Run laser-focused ads that convert clicks into customers.",
      gradient: "from-orange-400 to-orange-500",
      textColor: "text-orange-400",
      bgColor: "bg-orange-50",
      content: {
        title: "Ad Performance",
        items: [
          { label: "ROAS", value: "4.2x", change: "↗", time: "Current" },
          { label: "Conversions", value: "156", change: "↗", time: "This week" },
          { label: "Cost per Click", value: "₵2.40", change: "↘", time: "Average" }
        ]
      }
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Track, learn, and optimize with real insights that drive ROI.",
      gradient: "from-green-400 to-emerald-500",
      textColor: "text-green-400",
      bgColor: "bg-green-50",
      content: {
        title: "Analytics Dashboard",
        items: [
          { label: "Revenue Growth", value: "+68%", change: "↗", time: "Quarter" },
          { label: "Conversion Rate", value: "12.3%", change: "↗", time: "Current" },
          { label: "Customer LTV", value: "₵890", change: "↗", time: "Average" }
        ]
      }
    },
  ];

  // Autoplay control for stacked hero
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) {
        setCurrent((i) => (i + 1) % heroCards.length)
      }
    }, 2800);
    return () => clearInterval(id);
  }, [paused, heroCards.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className={`pt-32 pb-24 relative overflow-hidden transition-colors duration-1000 ${heroCards[current].bgColor}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
    {/* Dynamic radial soft background that changes with active card */}
    <div className={`pointer-events-none absolute left-1/2 top-20 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full transition-all duration-1000 blur-2xl`} 
         style={{
           background: current === 0 ? 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15), rgba(255, 255, 255, 0) 60%)' :
                      current === 1 ? 'radial-gradient(circle at center, rgba(236, 72, 153, 0.15), rgba(255, 255, 255, 0) 60%)' :
                      current === 2 ? 'radial-gradient(circle at center, rgba(251, 146, 60, 0.15), rgba(255, 255, 255, 0) 60%)' :
                      'radial-gradient(circle at center, rgba(74, 222, 128, 0.15), rgba(255, 255, 255, 0) 60%)'
         }} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="display-lg text-foreground mb-8 leading-tight">
                We Help Your Business<br />
                <span className={`transition-colors duration-500 ${heroCards[current].textColor}`}>
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Mainstream Digital transforms Ghanaian businesses through innovative digital marketing strategies that drive real results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <Button variant="pill" size="sm" className="text-sm md:text-base" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Neura-style stacked, auto-rotating cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mb-20"
            >
              <div
                className="relative max-w-5xl mx-auto h-[360px] sm:h-[400px] md:h-[440px]"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {(() => {
                  const prev = (current - 1 + heroCards.length) % heroCards.length
                  const next = (current + 1) % heroCards.length
                  const center = heroCards[current]
                  const left = heroCards[prev]
                  const right = heroCards[next]
                  return (
                    <>
                      {/* Left/back card - positioned underneath and to the left */}
                      <motion.div
                        key={`left-${left.title}`}
                        initial={{ opacity: 0.6, x: -60, scale: 0.90, y: 20 }}
                        animate={{ opacity: 0.7, x: 0, scale: 0.85, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`absolute left-0 top-8 w-[70%] h-[75%] rounded-[28px] shadow-lg bg-gradient-to-br ${left.gradient} z-10`}
                        style={{ transform: "translateX(-15%)" }}
                        aria-hidden
                      />

                      {/* Right/back card - positioned underneath and to the right */}
                      <motion.div
                        key={`right-${right.title}`}
                        initial={{ opacity: 0.6, x: 60, scale: 0.90, y: 20 }}
                        animate={{ opacity: 0.7, x: 0, scale: 0.85, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`absolute right-0 top-8 w-[70%] h-[75%] rounded-[28px] shadow-lg bg-gradient-to-br ${right.gradient} z-10`}
                        style={{ transform: "translateX(15%)" }}
                        aria-hidden
                      />

                      {/* Center/foreground card with content - highest z-index */}
                      <motion.div
                        key={`center-${center.title}`}
                        initial={{ opacity: 0.85, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className={`absolute inset-0 m-auto w-[86%] h-[78%] rounded-[32px] shadow-2xl bg-gradient-to-br ${center.gradient} text-white flex items-center justify-center z-20`}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 max-w-sm w-[86%] shadow-lg">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold">{center.content.title}</h4>
                            <div className="h-1 w-14 rounded-full bg-white/60"></div>
                          </div>
                          <div className="space-y-3 text-sm">
                            {center.content.items.map((item, index) => (
                              <div key={index} className="flex items-center justify-between bg-white/10 rounded-xl p-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                    <center.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{item.label}</div>
                                    <div className="opacity-80 text-xs">{item.time}</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="font-semibold">{item.value}</span>
                                  <span className="text-xs opacity-80">{item.change}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )
                })()}
              </div>
            </motion.div>

            {/* Featured In Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-20"
            >
              <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wide font-medium text-center">Trusted By Leading Businesses</p>
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                <div className="flex animate-scroll-infinite whitespace-nowrap">
                  <div className="flex items-center gap-16 opacity-60 pr-16">
                    <div className="text-2xl font-bold text-muted-foreground">Koney's Veterinary Hospital</div>
                    <div className="text-2xl font-bold text-muted-foreground">Phastor Group Limited</div>
                    <div className="text-2xl font-bold text-muted-foreground">East Legon Veterinary Hospital</div>
                    <div className="text-2xl font-bold text-muted-foreground">The Royal Boutique</div>
                    <div className="text-2xl font-bold text-muted-foreground">Games and Connect</div>
                    <div className="text-2xl font-bold text-muted-foreground">Tees and Hoodies Hub</div>
                  </div>
                  <div className="flex items-center gap-16 opacity-60 pr-16">
                    <div className="text-2xl font-bold text-muted-foreground">Koney's Veterinary Hospital</div>
                    <div className="text-2xl font-bold text-muted-foreground">Phastor Group Limited</div>
                    <div className="text-2xl font-bold text-muted-foreground">East Legon Veterinary Hospital</div>
                    <div className="text-2xl font-bold text-muted-foreground">The Royal Boutique</div>
                    <div className="text-2xl font-bold text-muted-foreground">Games and Connect</div>
                    <div className="text-2xl font-bold text-muted-foreground">Tees and Hoodies Hub</div>
                  </div>
                </div>
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
              Why choose our <span className="text-gradient-purple">digital marketing</span> services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See why partnering with Mainstream Digital is the smartest move for your business growth in Ghana.
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
              Comprehensive digital marketing solutions designed to elevate your brand and drive business growth across Ghana and beyond.
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
                View All Marketing Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Our <span className="text-gradient-purple">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results for real businesses. See how we've helped Ghanaian companies transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop" 
                    alt="Veterinary hospital digital presence"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-600/80 to-indigo-600/80"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">Koney's Veterinary Hospital</h4>
                    <p className="text-sm opacity-90">Healthcare Digital Transformation</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Complete Digital Makeover</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Comprehensive website development, social media management, and content creation that established them as Accra's premier veterinary service.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold text-blue-600">+400%</div>
                        <div className="text-muted-foreground">Online Reach</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">50K+</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                    </div>
                    <Link to="/case-studies/koneys-veterinary">
                      <Button variant="ghost" size="sm" className="group-hover:bg-blue-50">
                        View Case <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop" 
                    alt="Fashion boutique success"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-purple-600/80 to-pink-500/80"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">The Royal Boutique</h4>
                    <p className="text-sm opacity-90">Fashion E-commerce Platform</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Luxury Fashion Online</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Built a sophisticated e-commerce platform with social media integration that positioned them as Ghana's premier luxury fashion destination.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold text-purple-600">250%</div>
                        <div className="text-muted-foreground">Sales Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-purple-600">30K+</div>
                        <div className="text-muted-foreground">Customers</div>
                      </div>
                    </div>
                    <Link to="/case-studies/royal-boutique">
                      <Button variant="ghost" size="sm" className="group-hover:bg-purple-50">
                        View Case <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop" 
                    alt="Gaming and apparel business"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 via-emerald-500/80 to-teal-600/80"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">Games and Connect</h4>
                    <p className="text-sm opacity-90">Gaming & Entertainment</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">Gaming Community Hub</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Created a dynamic gaming platform with integrated social features and comprehensive digital marketing that built Ghana's largest gaming community.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold text-green-600">15K+</div>
                        <div className="text-muted-foreground">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-green-600">300%</div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                    </div>
                    <Link to="/case-studies/games-and-connect">
                      <Button variant="ghost" size="sm" className="group-hover:bg-green-50">
                        View Case <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="text-lg">
                View All Case Studies
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
              Don't just take our word for it. Here's what some of our amazing clients have to say about their digital transformation.
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

      {/* Our Clients Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="display-lg text-foreground mb-6">
              Trusted by <span className="text-gradient-purple">Leading Businesses</span> Across Ghana
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to partner with innovative businesses across various industries, delivering comprehensive digital solutions that drive growth and success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Koney's Veterinary Hospital */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Koney's Veterinary Hospital</h3>
                <p className="text-muted-foreground mb-4">Complete digital transformation with website development, social media management, and content creation for Ghana's premier veterinary service.</p>
                <div className="text-sm text-accent font-medium">Healthcare • Digital Marketing • Web Development</div>
              </Card>
            </motion.div>

            {/* Phastor Group Limited */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Phastor Group Limited</h3>
                <p className="text-muted-foreground mb-4">Comprehensive digital solution including website development and social media strategy to establish strong online presence and reach new markets.</p>
                <div className="text-sm text-accent font-medium">Corporate • Web Development • Social Media</div>
              </Card>
            </motion.div>

            {/* East Legon Veterinary Hospital */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">East Legon Veterinary Hospital</h3>
                <p className="text-muted-foreground mb-4">Digital marketing expertise for healthcare with website optimization and social media presence that significantly increased appointment bookings.</p>
                <div className="text-sm text-accent font-medium">Healthcare • Digital Marketing • SEO</div>
              </Card>
            </motion.div>

            {/* The Royal Boutique */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">The Royal Boutique</h3>
                <p className="text-muted-foreground mb-4">Luxury e-commerce platform with sophisticated design and social media integration positioning them as Ghana's premier fashion destination.</p>
                <div className="text-sm text-accent font-medium">Fashion • E-commerce • Social Media</div>
              </Card>
            </motion.div>

            {/* Games and Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Games and Connect</h3>
                <p className="text-muted-foreground mb-4">Dynamic gaming platform with integrated social features building Ghana's largest gaming community through strategic content and development.</p>
                <div className="text-sm text-accent font-medium">Gaming • Platform Development • Community</div>
              </Card>
            </motion.div>

            {/* Tees and Hoodies Hub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Tees and Hoodies Hub</h3>
                <p className="text-muted-foreground mb-4">Strong online presence for apparel brand with social media content creation and e-commerce setup driving significant growth and engagement.</p>
                <div className="text-sm text-accent font-medium">Apparel • E-commerce • Content Creation</div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-8">
              Ready to join our growing family of successful businesses?
            </p>
            <Button variant="outline" size="lg" className="text-lg" asChild>
              <Link to="/contact">
                Start Your Digital Transformation
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
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
              Ready to Transform Your <span className="text-gradient-purple">Business</span> with Digital Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create powerful marketing strategies that revolutionize how you reach and engage customers. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Get Free Marketing Consultation
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link to="/services">
                  Explore Marketing Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;