import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap,
  Calendar,
  MapPin,
  ExternalLink,
  BarChart3,
  Target,
  Globe,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "koneys-veterinary",
      title: "Koney's Veterinary Hospital",
      subtitle: "Healthcare Digital Transformation",
      industry: "Veterinary Healthcare",
      location: "Greater Accra, Ghana",
      duration: "8 months",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      icon: TrendingUp,
      featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      challenge: "Koney's Veterinary Hospital had minimal online presence and struggled to reach pet owners across Accra. They needed a comprehensive digital strategy to establish themselves as the premier veterinary service while building trust with pet owners through education and engagement.",
      solution: "We developed a complete digital ecosystem including a professional website, comprehensive social media strategy, and content creation program that positioned them as Accra's leading veterinary experts through educational content and community engagement.",
      detailedSolution: {
        title: "Complete Healthcare Digital Transformation",
        components: [
          {
            name: "Professional Website Development",
            description: "Built a comprehensive veterinary website with appointment booking, pet care resources, and emergency contact features",
            technologies: ["React", "Online Booking System", "Pet Care Database", "Emergency Contact Integration"]
          },
          {
            name: "Social Media Management",
            description: "Created engaging social media presence across Facebook and Instagram with daily pet care tips and success stories",
            technologies: ["Facebook Business", "Instagram Creator Tools", "Content Scheduling", "Community Management"]
          },
          {
            name: "Content Creation Program",
            description: "Developed educational content library including pet care guides, health tips, and treatment success stories",
            technologies: ["Video Production", "Educational Content", "Pet Photography", "Health Information Graphics"]
          },
          {
            name: "Local SEO Optimization",
            description: "Optimized online presence for local searches and veterinary service queries across Greater Accra",
            technologies: ["Local SEO", "Google My Business", "Veterinary Keywords", "Location-Based Targeting"]
          }
        ]
      },
      results: [
        { metric: "Online Reach", value: "+400%", description: "Social media following and website traffic increased dramatically" },
        { metric: "Social Followers", value: "50K+", description: "Built engaged community of pet owners across platforms" },
        { metric: "Appointment Bookings", value: "+250%", description: "Online appointment requests increased significantly" },
        { metric: "Brand Recognition", value: "#1", description: "Became most recognized veterinary hospital in Greater Accra" },
        { metric: "Community Engagement", value: "85%", description: "High engagement rate on educational content" },
        { metric: "Client Retention", value: "92%", description: "Excellent client satisfaction and return rate" }
      ],
      timeline: [
        { phase: "Month 1-2", task: "Website development and brand identity establishment" },
        { phase: "Month 3-4", task: "Social media setup and content creation program launch" },
        { phase: "Month 5-6", task: "SEO optimization and community engagement initiatives" },
        { phase: "Month 7-8", task: "Performance optimization and advanced features implementation" }
      ],
      services: ["Website Development", "Social Media Management", "Content Creation", "Local SEO", "Brand Development", "Community Management"],
      testimonial: {
        quote: "Mainstream Digital transformed our online presence completely. Our social media following grew by 400% and we now reach pet owners across Greater Accra. Their content creation and website development have made us the go-to veterinary service in the area.",
        author: "Dr. Koney Mensah",
        role: "Chief Veterinarian, Koney's Veterinary Hospital"
      }
    },
    {
      id: "royal-boutique",
      title: "The Royal Boutique",
      subtitle: "Luxury Fashion E-commerce",
      industry: "Fashion & Retail",
      location: "Accra, Ghana",
      duration: "10 months",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      icon: Users,
      featuredImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      challenge: "The Royal Boutique needed to transition from a traditional retail model to a sophisticated online presence that could showcase their luxury fashion items and compete with international brands while maintaining their premium brand image.",
      solution: "We created a luxury e-commerce platform with sophisticated design, comprehensive social media strategy, and content creation that positioned them as Ghana's premier luxury fashion destination with seamless online shopping experience.",
      detailedSolution: {
        title: "Luxury Fashion Digital Platform",
        components: [
          {
            name: "E-commerce Platform Development",
            description: "Built sophisticated e-commerce website with luxury design, advanced filtering, and seamless checkout experience",
            technologies: ["React E-commerce", "Payment Gateway Integration", "Inventory Management", "Luxury UI/UX Design"]
          },
          {
            name: "Fashion Photography & Content",
            description: "Created high-end fashion photography and styling content that showcases luxury items with professional presentation",
            technologies: ["Professional Photography", "Fashion Styling", "Product Catalogs", "Visual Content Creation"]
          },
          {
            name: "Social Media Strategy",
            description: "Developed sophisticated social media presence focusing on luxury lifestyle and fashion inspiration",
            technologies: ["Instagram Marketing", "Facebook Business", "Influencer Partnerships", "Luxury Brand Management"]
          },
          {
            name: "Customer Experience Optimization",
            description: "Implemented personalized shopping experience with wish lists, recommendations, and VIP customer programs",
            technologies: ["Customer Portal", "Recommendation Engine", "VIP Programs", "Customer Analytics"]
          }
        ]
      },
      results: [
        { metric: "Online Sales", value: "+250%", description: "E-commerce platform drove significant sales growth" },
        { metric: "Customer Base", value: "30K+", description: "Built large customer database across Ghana and beyond" },
        { metric: "Social Engagement", value: "+300%", description: "High engagement on fashion and lifestyle content" },
        { metric: "Average Order Value", value: "+180%", description: "Increased through strategic product recommendations" },
        { metric: "Brand Recognition", value: "Top 3", description: "Recognized as leading luxury fashion brand in Ghana" },
        { metric: "Customer Satisfaction", value: "96%", description: "Excellent reviews and customer feedback" }
      ],
      timeline: [
        { phase: "Month 1-3", task: "E-commerce platform development and design" },
        { phase: "Month 4-6", task: "Content creation and social media strategy implementation" },
        { phase: "Month 7-8", task: "Customer experience optimization and marketing campaigns" },
        { phase: "Month 9-10", task: "Performance analysis and advanced features rollout" }
      ],
      services: ["E-commerce Development", "Fashion Photography", "Social Media Management", "Content Creation", "Brand Strategy", "Customer Experience Design"],
      testimonial: {
        quote: "The e-commerce platform they built for us is exceptional. Our online sales increased by 250% within 6 months. Their social media management and content creation perfectly captures our luxury brand aesthetic. We couldn't be happier with the results.",
        author: "Sarah Osei",
        role: "CEO, The Royal Boutique"
      }
    },
    {
      id: "games-and-connect",
      title: "Games and Connect",
      subtitle: "Gaming Community Platform",
      industry: "Gaming & Entertainment",
      location: "Accra, Ghana",
      duration: "12 months",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      icon: Zap,
      featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      challenge: "Games and Connect needed to build Ghana's largest gaming community platform from scratch, requiring both technical excellence and deep understanding of gaming culture to create an engaging platform that would attract and retain active users.",
      solution: "We developed a comprehensive gaming platform with community features, social integration, and content management system that fostered engagement and built Ghana's most active gaming community through strategic content and feature development.",
      detailedSolution: {
        title: "Gaming Community Platform Development",
        components: [
          {
            name: "Gaming Platform Development",
            description: "Built interactive gaming platform with community features, user profiles, and gaming content management system",
            technologies: ["React Gaming Platform", "Real-time Features", "User Management", "Gaming APIs"]
          },
          {
            name: "Community Engagement Features",
            description: "Implemented forums, tournaments, leaderboards, and social features to foster active gaming community",
            technologies: ["Community Forums", "Tournament System", "Leaderboards", "Social Integration"]
          },
          {
            name: "Content Creation & Management",
            description: "Developed gaming content strategy including reviews, tutorials, news, and community-generated content",
            technologies: ["Content Management System", "Gaming Content Creation", "Video Production", "Community Moderation"]
          },
          {
            name: "Social Media & Marketing",
            description: "Created comprehensive social media strategy targeting gamers across Ghana with engaging content and community building",
            technologies: ["Gaming Social Media", "Twitch Integration", "YouTube Channel", "Gaming Influencer Network"]
          }
        ]
      },
      results: [
        { metric: "Active Users", value: "15K+", description: "Built large active gaming community across Ghana" },
        { metric: "User Engagement", value: "+300%", description: "High daily active user rate and session duration" },
        { metric: "Community Growth", value: "+500%", description: "Rapid growth in community participation and content" },
        { metric: "Platform Features", value: "25+", description: "Comprehensive gaming features and community tools" },
        { metric: "Daily Sessions", value: "45 min", description: "High user engagement and platform stickiness" },
        { metric: "User Retention", value: "78%", description: "Strong user retention and community loyalty" }
      ],
      timeline: [
        { phase: "Month 1-3", task: "Platform development and core features implementation" },
        { phase: "Month 4-6", task: "Community features and user engagement tools" },
        { phase: "Month 7-9", task: "Content creation program and social media strategy" },
        { phase: "Month 10-12", task: "Advanced features and community scaling" }
      ],
      services: ["Platform Development", "Community Management", "Content Creation", "Social Media Strategy", "Gaming Content", "User Experience Design"],
      testimonial: {
        quote: "They created an amazing gaming platform for our community. The website they built is fast, engaging, and perfectly captures the gaming culture. Our user engagement increased by 300% since launch.",
        author: "Kwame Appiah",
        role: "Founder, Games and Connect"
      }
    },
    {
      id: "phastor-group",
      title: "Phastor Group Limited",
      subtitle: "Corporate Digital Solutions",
      industry: "Corporate Services",
      location: "Accra, Ghana",
      duration: "6 months",
      gradient: "from-indigo-500 via-indigo-600 to-purple-600",
      icon: TrendingUp,
      featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      challenge: "Phastor Group Limited needed to establish a strong digital presence to reach new markets and showcase their corporate services. They required a comprehensive digital solution that would reflect their professionalism and expertise.",
      solution: "We developed a complete digital strategy including professional website development and comprehensive social media management that positioned them as a leading corporate service provider in Ghana.",
      detailedSolution: {
        title: "Corporate Digital Presence Development",
        components: [
          {
            name: "Professional Website Development",
            description: "Built a sophisticated corporate website showcasing services, expertise, and company values with professional design",
            technologies: ["React", "Corporate CMS", "Professional Design", "Contact Integration"]
          },
          {
            name: "Brand Identity Enhancement",
            description: "Developed cohesive brand identity across all digital platforms with professional messaging and visual consistency",
            technologies: ["Brand Guidelines", "Visual Identity", "Professional Photography", "Corporate Messaging"]
          },
          {
            name: "Social Media Strategy",
            description: "Created strategic social media presence focusing on thought leadership and corporate expertise",
            technologies: ["LinkedIn Strategy", "Facebook Business", "Content Planning", "Professional Networking"]
          },
          {
            name: "Digital Marketing Strategy",
            description: "Implemented comprehensive digital marketing approach to reach new markets and establish market presence",
            technologies: ["SEO Strategy", "Content Marketing", "Professional Networking", "Market Analysis"]
          }
        ]
      },
      results: [
        { metric: "Online Presence", value: "+350%", description: "Significant increase in digital visibility and reach" },
        { metric: "Lead Generation", value: "+200%", description: "New business inquiries through digital channels" },
        { metric: "Brand Recognition", value: "+180%", description: "Enhanced brand awareness in target markets" },
        { metric: "Market Reach", value: "5 Cities", description: "Expanded service reach across multiple locations" },
        { metric: "Client Acquisition", value: "+150%", description: "New clients acquired through digital presence" },
        { metric: "Professional Network", value: "2K+", description: "Built strong professional network online" }
      ],
      timeline: [
        { phase: "Month 1-2", task: "Website development and brand identity establishment" },
        { phase: "Month 3-4", task: "Social media setup and content strategy implementation" },
        { phase: "Month 5-6", task: "Digital marketing campaigns and network building" }
      ],
      services: ["Website Development", "Brand Identity", "Social Media Management", "Digital Marketing", "Content Strategy", "Professional Networking"],
      testimonial: {
        quote: "Mainstream Digital delivered a comprehensive digital solution that exceeded our expectations. Their website development and social media strategy helped us establish a strong online presence and reach new markets effectively.",
        author: "Emmanuel Asante",
        role: "Managing Director, Phastor Group Limited"
      }
    },
    {
      id: "east-legon-veterinary",
      title: "East Legon Veterinary Hospital",
      subtitle: "Veterinary Digital Marketing",
      industry: "Veterinary Healthcare",
      location: "East Legon, Accra",
      duration: "5 months",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      icon: Users,
      featuredImage: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&h=400&fit=crop",
      challenge: "East Legon Veterinary Hospital needed to increase their appointment bookings and establish a stronger digital presence in the competitive East Legon area while building trust with pet owners.",
      solution: "We implemented a targeted digital marketing strategy focusing on website optimization, local SEO, and social media presence that significantly increased their visibility and appointment bookings.",
      detailedSolution: {
        title: "Healthcare Digital Marketing Excellence",
        components: [
          {
            name: "Website Optimization",
            description: "Optimized existing website for better user experience, appointment booking, and search engine visibility",
            technologies: ["Website Optimization", "Appointment System", "Mobile Optimization", "User Experience Design"]
          },
          {
            name: "Local SEO Strategy",
            description: "Implemented comprehensive local SEO to dominate East Legon veterinary searches and attract local pet owners",
            technologies: ["Local SEO", "Google My Business", "Local Keywords", "Map Optimization"]
          },
          {
            name: "Social Media Presence",
            description: "Built engaging social media presence with pet care tips, success stories, and community engagement",
            technologies: ["Facebook Marketing", "Instagram Growth", "Content Creation", "Community Engagement"]
          },
          {
            name: "Content Marketing",
            description: "Developed educational content strategy focusing on pet health, care tips, and veterinary expertise",
            technologies: ["Educational Content", "Pet Care Guides", "Health Tips", "Video Content"]
          }
        ]
      },
      results: [
        { metric: "Appointment Bookings", value: "+280%", description: "Significant increase in online appointment requests" },
        { metric: "Local Visibility", value: "#1", description: "Top ranking for East Legon veterinary searches" },
        { metric: "Social Followers", value: "25K+", description: "Built engaged community of pet owners" },
        { metric: "Website Traffic", value: "+320%", description: "Increased website visits and engagement" },
        { metric: "Client Retention", value: "90%", description: "High client satisfaction and return rate" },
        { metric: "Service Area", value: "3x", description: "Expanded service area reach through digital presence" }
      ],
      timeline: [
        { phase: "Month 1-2", task: "Website optimization and local SEO implementation" },
        { phase: "Month 3-4", task: "Social media strategy and content creation" },
        { phase: "Month 5", task: "Performance optimization and advanced marketing" }
      ],
      services: ["Website Optimization", "Local SEO", "Social Media Marketing", "Content Creation", "Digital Marketing", "Community Engagement"],
      testimonial: {
        quote: "Their expertise in digital marketing for healthcare is outstanding. Our appointment bookings increased significantly after they optimized our website and social media presence. Highly professional team.",
        author: "Dr. Akosua Darko",
        role: "Lead Veterinarian, East Legon Veterinary Hospital"
      }
    },
    {
      id: "tees-hoodies-hub",
      title: "Tees and Hoodies Hub",
      subtitle: "Apparel Brand Development",
      industry: "Fashion & Apparel",
      location: "Accra, Ghana",
      duration: "7 months",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: Zap,
      featuredImage: "https://images.unsplash.com/photo-1583743814966-8936f37f3652?w=600&h=400&fit=crop",
      challenge: "Tees and Hoodies Hub needed to build a strong online presence for their apparel brand and establish themselves in Ghana's competitive fashion market while connecting with their target audience.",
      solution: "We created a comprehensive brand development strategy including e-commerce setup, social media content creation, and digital marketing that positioned them as a trendy apparel destination.",
      detailedSolution: {
        title: "Apparel Brand Digital Development",
        components: [
          {
            name: "E-commerce Platform Setup",
            description: "Built user-friendly e-commerce platform optimized for apparel sales with easy browsing and checkout",
            technologies: ["E-commerce Development", "Product Catalog", "Shopping Cart", "Payment Integration"]
          },
          {
            name: "Brand Development",
            description: "Developed cohesive brand identity and messaging that resonates with target audience and fashion trends",
            technologies: ["Brand Identity", "Logo Design", "Brand Guidelines", "Fashion Photography"]
          },
          {
            name: "Social Media Content Creation",
            description: "Created engaging fashion content including product showcases, styling tips, and trend-focused posts",
            technologies: ["Instagram Content", "Fashion Photography", "Styling Content", "Trend Analysis"]
          },
          {
            name: "Digital Marketing Strategy",
            description: "Implemented targeted marketing campaigns focusing on fashion enthusiasts and apparel buyers",
            technologies: ["Social Media Ads", "Influencer Marketing", "Fashion Campaigns", "Target Audience"]
          }
        ]
      },
      results: [
        { metric: "Online Sales", value: "+300%", description: "Significant growth in e-commerce sales" },
        { metric: "Social Engagement", value: "+400%", description: "High engagement on fashion content" },
        { metric: "Brand Awareness", value: "+250%", description: "Increased recognition in fashion community" },
        { metric: "Customer Base", value: "10K+", description: "Built loyal customer following" },
        { metric: "Product Range", value: "50+", description: "Expanded product offerings successfully" },
        { metric: "Market Position", value: "Top 10", description: "Established as popular apparel brand in Accra" }
      ],
      timeline: [
        { phase: "Month 1-2", task: "E-commerce platform development and brand identity" },
        { phase: "Month 3-4", task: "Social media content creation and photography" },
        { phase: "Month 5-6", task: "Digital marketing campaigns and influencer partnerships" },
        { phase: "Month 7", task: "Performance optimization and expansion planning" }
      ],
      services: ["E-commerce Development", "Brand Development", "Social Media Management", "Content Creation", "Fashion Photography", "Digital Marketing"],
      testimonial: {
        quote: "Mainstream Digital helped us build a strong online presence for our apparel brand. Their social media content creation and e-commerce setup have been instrumental in our growth. Great team to work with!",
        author: "Akosua Frimpong",
        role: "Owner, Tees and Hoodies Hub"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="display-lg text-foreground mb-6">
              Our <span className="text-gradient-purple">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Real results for real businesses. Discover how we've helped Ghanaian companies achieve remarkable growth through strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  {/* Header with gradient and icon */}
                  <div className={`h-48 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}>
                    <img 
                      src={study.featuredImage} 
                      alt={`${study.title} project showcase`}
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                        <study.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                      <p className="text-sm opacity-90">{study.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.duration}</span>
                      <span>•</span>
                      <span>{study.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {study.challenge}
                    </p>

                    {/* Key metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-muted/30 rounded-lg">
                          <div className="font-bold text-lg text-foreground">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Services tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.services.slice(0, 3).map((service, idx) => (
                        <span key={idx} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          {service}
                        </span>
                      ))}
                      {study.services.length > 3 && (
                        <span className="px-2 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs">
                          +{study.services.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <Link to={`/case-studies/${study.id}`}>
                      <Button variant="gradient" size="sm" className="w-full">
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-accent/5 via-purple-50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="display-md text-foreground mb-6">
              Ready to Create Your <span className="text-gradient-purple">Success Story?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss how we can help your business achieve similar results with our proven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link to="/services">
                  View Our Services
                  <Globe className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
