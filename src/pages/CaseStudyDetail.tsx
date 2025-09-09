import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
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
  Lightbulb,
  ArrowLeft,
  CheckCircle,
  Star,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CaseStudyDetail = () => {
  const { id } = useParams();

  const caseStudies = {
    "koneys-veterinary": {
      id: "koneys-veterinary",
      title: "Koney's Veterinary Hospital",
      subtitle: "Healthcare Digital Transformation",
      industry: "Veterinary Healthcare",
      location: "Greater Accra, Ghana",
      duration: "8 months",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      icon: TrendingUp,
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&h=600&fit=crop",
          caption: "Modern veterinary hospital website with appointment booking system"
        },
        {
          url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
          caption: "Social media content showcasing pet care tips and success stories"
        },
        {
          url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
          caption: "Educational content library with pet health guides and videos"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
          caption: "Community engagement initiatives building trust with pet owners"
        }
      ],
      overview: "Transformed Koney's Veterinary Hospital from minimal online presence to Greater Accra's premier veterinary service through comprehensive digital strategy, achieving 400% increase in online reach and establishing them as the go-to veterinary experts.",
      challenge: {
        title: "The Challenge",
        description: "Koney's Veterinary Hospital had minimal online presence and struggled to reach pet owners across Accra. They needed a comprehensive digital strategy to establish themselves as the premier veterinary service while building trust with pet owners through education and engagement.",
        points: [
          "Minimal online presence with low visibility",
          "Limited reach to pet owners across Greater Accra",
          "Need to build trust and credibility in healthcare",
          "Competition from established veterinary clinics",
          "Lack of educational content for pet owners",
          "No online appointment booking system",
          "Weak social media presence and engagement"
        ]
      },
      solution: {
        title: "Our Comprehensive Digital Strategy",
        description: "We developed a complete digital ecosystem including a professional website, comprehensive social media strategy, and content creation program that positioned them as Accra's leading veterinary experts through educational content and community engagement.",
        phases: [
          {
            title: "Phase 1: Foundation (Months 1-2)",
            tasks: [
              "Professional website development with appointment booking",
              "Brand identity establishment and visual consistency",
              "Basic social media setup and content framework",
              "Pet care resource database development",
              "Emergency contact integration and optimization"
            ]
          },
          {
            title: "Phase 2: Content & Engagement (Months 3-4)",
            tasks: [
              "Daily social media content creation and scheduling",
              "Educational content library development",
              "Pet photography and success story documentation",
              "Community engagement and interaction strategies",
              "Health information graphics and visual content"
            ]
          },
          {
            title: "Phase 3: SEO & Local Presence (Months 5-6)",
            tasks: [
              "Local SEO optimization for Greater Accra searches",
              "Google My Business optimization and management",
              "Veterinary keyword targeting and content optimization",
              "Location-based targeting and service area expansion",
              "Review management and reputation building"
            ]
          },
          {
            title: "Phase 4: Growth & Optimization (Months 7-8)",
            tasks: [
              "Performance analytics and optimization",
              "Advanced features implementation",
              "Community outreach and partnership development",
              "Client retention programs and loyalty initiatives",
              "Continuous content optimization and engagement"
            ]
          }
        ]
      },
      technologies: [
        { category: "Website Development", tools: ["React.js", "Appointment Booking System", "Pet Care Database", "Emergency Contact Integration"] },
        { category: "Social Media Management", tools: ["Facebook Business", "Instagram Creator Tools", "Content Scheduling", "Community Management"] },
        { category: "Content Creation", tools: ["Video Production", "Educational Content", "Pet Photography", "Health Information Graphics"] },
        { category: "SEO & Local Marketing", tools: ["Local SEO", "Google My Business", "Veterinary Keywords", "Location-Based Targeting"] },
        { category: "Analytics & Tracking", tools: ["Google Analytics", "Social Media Analytics", "Appointment Tracking", "Engagement Metrics"] }
      ],
      results: [
        { metric: "Online Reach", value: "+400%", description: "Social media following and website traffic increased dramatically", period: "8 months" },
        { metric: "Social Followers", value: "50K+", description: "Built engaged community of pet owners across platforms", period: "Final month" },
        { metric: "Appointment Bookings", value: "+250%", description: "Online appointment requests increased significantly", period: "6 months" },
        { metric: "Brand Recognition", value: "#1", description: "Became most recognized veterinary hospital in Greater Accra", period: "Month 6" },
        { metric: "Community Engagement", value: "85%", description: "High engagement rate on educational content", period: "Average" },
        { metric: "Client Retention", value: "92%", description: "Excellent client satisfaction and return rate", period: "Monthly average" },
        { metric: "Service Area", value: "3x", description: "Expanded service coverage across Greater Accra", period: "8 months" },
        { metric: "Website Traffic", value: "+320%", description: "Increased website visits and user engagement", period: "8 months" }
      ],
      testimonial: {
        quote: "Mainstream Digital transformed our online presence completely. Our social media following grew by 400% and we now reach pet owners across Greater Accra. Their content creation and website development have made us the go-to veterinary service in the area.",
        author: "Dr. Koney Mensah",
        role: "Chief Veterinarian",
        company: "Koney's Veterinary Hospital"
      },
      keyLearnings: [
        "Educational content builds trust faster than promotional content in healthcare",
        "Pet owners actively seek reliable veterinary information online",
        "Local SEO is crucial for healthcare service providers",
        "Visual content showcasing successful treatments drives engagement",
        "Community building through social media creates lasting client relationships"
      ],
      nextSteps: "Koney's Veterinary Hospital continued to expand their digital presence with telemedicine services and launched a mobile app for appointment booking, maintaining their position as Greater Accra's leading veterinary service provider."
    },
    "royal-boutique": {
      id: "royal-boutique",
      title: "The Royal Boutique",
      subtitle: "Luxury Fashion E-commerce Platform",
      industry: "Fashion & Retail",
      location: "Accra, Ghana",
      duration: "10 months",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      icon: Users,
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
          caption: "Luxury e-commerce platform showcasing premium fashion collections"
        },
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
          caption: "Professional fashion photography and product styling content"
        },
        {
          url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
          caption: "Social media campaigns driving luxury brand engagement"
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          caption: "Customer experience optimization and VIP program features"
        }
      ],
      overview: "Transformed The Royal Boutique from traditional retail to Ghana's premier luxury fashion destination, achieving 250% sales growth through sophisticated e-commerce platform and strategic social media presence.",
      challenge: {
        title: "The Challenge",
        description: "The Royal Boutique needed to transition from a traditional retail model to a sophisticated online presence that could showcase their luxury fashion items and compete with international brands while maintaining their premium brand image.",
        points: [
          "Traditional retail model limiting market reach",
          "Need to showcase luxury items effectively online",
          "Competition from international fashion brands",
          "Maintaining premium brand image in digital space",
          "Lack of sophisticated e-commerce platform",
          "Limited social media presence for luxury market",
          "Need for professional fashion photography and content"
        ]
      },
      solution: {
        title: "Luxury Fashion Digital Transformation",
        description: "We created a luxury e-commerce platform with sophisticated design, comprehensive social media strategy, and content creation that positioned them as Ghana's premier luxury fashion destination with seamless online shopping experience.",
        phases: [
          {
            title: "Phase 1: Platform Development (Months 1-3)",
            tasks: [
              "Luxury e-commerce platform development with advanced features",
              "Sophisticated UI/UX design reflecting premium brand",
              "Payment gateway integration for seamless transactions",
              "Inventory management system for fashion items",
              "Customer account and wishlist functionality"
            ]
          },
          {
            title: "Phase 2: Content & Photography (Months 4-6)",
            tasks: [
              "Professional fashion photography and styling",
              "Product catalog development with detailed descriptions",
              "Visual content creation for social media platforms",
              "Brand storytelling and luxury lifestyle content",
              "Fashion trend analysis and seasonal content planning"
            ]
          },
          {
            title: "Phase 3: Social Media & Marketing (Months 7-8)",
            tasks: [
              "Instagram marketing strategy for luxury audience",
              "Facebook business page optimization and advertising",
              "Influencer partnerships with fashion personalities",
              "Luxury brand management across digital platforms",
              "Customer engagement and community building"
            ]
          },
          {
            title: "Phase 4: Optimization & Scaling (Months 9-10)",
            tasks: [
              "Customer experience optimization and personalization",
              "Recommendation engine for personalized shopping",
              "VIP customer programs and exclusive access features",
              "Performance analytics and conversion optimization",
              "Advanced marketing automation and retention strategies"
            ]
          }
        ]
      },
      technologies: [
        { category: "E-commerce Development", tools: ["React E-commerce", "Payment Gateway Integration", "Inventory Management", "Luxury UI/UX Design"] },
        { category: "Content Creation", tools: ["Professional Photography", "Fashion Styling", "Product Catalogs", "Visual Content Creation"] },
        { category: "Social Media Marketing", tools: ["Instagram Marketing", "Facebook Business", "Influencer Partnerships", "Luxury Brand Management"] },
        { category: "Customer Experience", tools: ["Customer Portal", "Recommendation Engine", "VIP Programs", "Customer Analytics"] },
        { category: "Marketing Automation", tools: ["Email Marketing", "Customer Segmentation", "Conversion Tracking", "Retention Programs"] }
      ],
      results: [
        { metric: "Online Sales", value: "+250%", description: "E-commerce platform drove significant sales growth", period: "10 months" },
        { metric: "Customer Base", value: "30K+", description: "Built large customer database across Ghana and beyond", period: "Final month" },
        { metric: "Social Engagement", value: "+300%", description: "High engagement on fashion and lifestyle content", period: "Average" },
        { metric: "Average Order Value", value: "+180%", description: "Increased through strategic product recommendations", period: "6 months" },
        { metric: "Brand Recognition", value: "Top 3", description: "Recognized as leading luxury fashion brand in Ghana", period: "Month 8" },
        { metric: "Customer Satisfaction", value: "96%", description: "Excellent reviews and customer feedback", period: "Monthly average" },
        { metric: "Conversion Rate", value: "6.8%", description: "High conversion rate for luxury e-commerce", period: "Final 3 months" },
        { metric: "Return Customers", value: "58%", description: "Strong customer loyalty and repeat purchases", period: "Monthly average" }
      ],
      testimonial: {
        quote: "The e-commerce platform they built for us is exceptional. Our online sales increased by 250% within 6 months. Their social media management and content creation perfectly captures our luxury brand aesthetic. We couldn't be happier with the results.",
        author: "Sarah Osei",
        role: "CEO",
        company: "The Royal Boutique"
      },
      keyLearnings: [
        "Luxury brands require sophisticated visual presentation online",
        "High-quality photography is crucial for fashion e-commerce success",
        "Personalized shopping experiences increase customer loyalty",
        "Social media storytelling drives luxury brand engagement",
        "VIP programs are essential for premium customer retention"
      ],
      nextSteps: "The Royal Boutique expanded to neighboring countries and launched a mobile app with AR try-on features, maintaining their position as West Africa's leading luxury fashion destination."
    },
    "games-and-connect": {
      id: "games-and-connect",
      title: "Games and Connect",
      subtitle: "Gaming Community Platform Development",
      industry: "Gaming & Entertainment",
      location: "Accra, Ghana",
      duration: "12 months",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      icon: Zap,
      heroImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
          caption: "Interactive gaming platform with community features and user profiles"
        },
        {
          url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
          caption: "Tournament system and leaderboards driving community engagement"
        },
        {
          url: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop",
          caption: "Gaming content creation including reviews, tutorials, and news"
        },
        {
          url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
          caption: "Social media strategy targeting Ghana's gaming community"
        }
      ],
      overview: "Built Ghana's largest gaming community platform from scratch, achieving 15K+ active users and 300% engagement increase through strategic platform development and community-focused features.",
      challenge: {
        title: "The Challenge",
        description: "Games and Connect needed to build Ghana's largest gaming community platform from scratch, requiring both technical excellence and deep understanding of gaming culture to create an engaging platform that would attract and retain active users.",
        points: [
          "Building a gaming platform from zero user base",
          "Understanding and catering to Ghanaian gaming culture",
          "Creating engaging features for diverse gaming interests",
          "Competing with international gaming platforms",
          "Building technical infrastructure for real-time features",
          "Fostering active community participation and engagement",
          "Monetizing the platform while maintaining user experience"
        ]
      },
      solution: {
        title: "Gaming Community Platform Excellence",
        description: "We developed a comprehensive gaming platform with community features, social integration, and content management system that fostered engagement and built Ghana's most active gaming community through strategic content and feature development.",
        phases: [
          {
            title: "Phase 1: Platform Foundation (Months 1-3)",
            tasks: [
              "Gaming platform development with core functionality",
              "User management system and profile creation",
              "Basic community features and interaction tools",
              "Gaming APIs integration and real-time features",
              "Initial content management system setup"
            ]
          },
          {
            title: "Phase 2: Community Features (Months 4-6)",
            tasks: [
              "Community forums and discussion boards implementation",
              "Tournament system and competition features",
              "Leaderboards and achievement systems",
              "Social integration and friend connections",
              "Gaming news and content aggregation"
            ]
          },
          {
            title: "Phase 3: Content & Marketing (Months 7-9)",
            tasks: [
              "Gaming content strategy and creation program",
              "Video production for tutorials and reviews",
              "Community moderation and management systems",
              "Social media strategy targeting Ghanaian gamers",
              "Influencer partnerships and gaming community outreach"
            ]
          },
          {
            title: "Phase 4: Growth & Optimization (Months 10-12)",
            tasks: [
              "Advanced features rollout and platform optimization",
              "Gaming influencer network development",
              "Community scaling and engagement optimization",
              "Performance analytics and user behavior analysis",
              "Platform monetization and sustainability features"
            ]
          }
        ]
      },
      technologies: [
        { category: "Platform Development", tools: ["React Gaming Platform", "Real-time Features", "User Management", "Gaming APIs"] },
        { category: "Community Features", tools: ["Community Forums", "Tournament System", "Leaderboards", "Social Integration"] },
        { category: "Content Management", tools: ["Content Management System", "Gaming Content Creation", "Video Production", "Community Moderation"] },
        { category: "Social Media & Marketing", tools: ["Gaming Social Media", "Twitch Integration", "YouTube Channel", "Gaming Influencer Network"] },
        { category: "Analytics & Optimization", tools: ["User Analytics", "Engagement Tracking", "Performance Monitoring", "Community Insights"] }
      ],
      results: [
        { metric: "Active Users", value: "15K+", description: "Built large active gaming community across Ghana", period: "12 months" },
        { metric: "User Engagement", value: "+300%", description: "High daily active user rate and session duration", period: "Final 6 months" },
        { metric: "Community Growth", value: "+500%", description: "Rapid growth in community participation and content", period: "12 months" },
        { metric: "Platform Features", value: "25+", description: "Comprehensive gaming features and community tools", period: "Final release" },
        { metric: "Daily Sessions", value: "45 min", description: "High user engagement and platform stickiness", period: "Average" },
        { metric: "User Retention", value: "78%", description: "Strong user retention and community loyalty", period: "Monthly average" },
        { metric: "Content Creation", value: "500+", description: "User-generated content pieces and contributions", period: "Monthly" },
        { metric: "Tournament Participation", value: "5K+", description: "Active participants in gaming tournaments", period: "Monthly average" }
      ],
      testimonial: {
        quote: "They created an amazing gaming platform for our community. The website they built is fast, engaging, and perfectly captures the gaming culture. Our user engagement increased by 300% since launch.",
        author: "Kwame Appiah",
        role: "Founder",
        company: "Games and Connect"
      },
      keyLearnings: [
        "Gaming communities thrive on real-time interaction and competition",
        "Local gaming culture requires platform features tailored to preferences",
        "User-generated content drives long-term platform engagement",
        "Tournament features are crucial for gaming community retention",
        "Social features must balance competition with collaboration"
      ],
      nextSteps: "Games and Connect expanded to include mobile gaming tournaments and launched a gaming influencer program, establishing themselves as West Africa's premier gaming community platform."
    },
    "phastor-group": {
      id: "phastor-group",
      title: "Phastor Group Limited",
      subtitle: "Corporate Digital Solutions",
      industry: "Corporate Services",
      location: "Accra, Ghana",
      duration: "6 months",
      gradient: "from-indigo-500 via-indigo-600 to-purple-600",
      icon: TrendingUp,
      heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
          caption: "Professional corporate website showcasing services and expertise"
        },
        {
          url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
          caption: "Brand identity development with professional messaging and visuals"
        },
        {
          url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
          caption: "Strategic social media presence focusing on thought leadership"
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
          caption: "Digital marketing strategy expanding reach to new markets"
        }
      ],
      overview: "Established Phastor Group Limited's strong digital presence through comprehensive website development and strategic social media management, achieving 350% increase in online visibility and successful market expansion.",
      challenge: {
        title: "The Challenge",
        description: "Phastor Group Limited needed to establish a strong digital presence to reach new markets and showcase their corporate services. They required a comprehensive digital solution that would reflect their professionalism and expertise.",
        points: [
          "Limited digital presence in competitive corporate market",
          "Need to showcase professional expertise and services",
          "Requirement to reach new markets and expand client base",
          "Lack of cohesive brand identity across digital platforms",
          "No strategic social media presence for B2B engagement",
          "Need for professional website reflecting company values",
          "Requirement for thought leadership positioning in industry"
        ]
      },
      solution: {
        title: "Corporate Digital Excellence Strategy",
        description: "We developed a complete digital strategy including professional website development and comprehensive social media management that positioned them as a leading corporate service provider in Ghana.",
        phases: [
          {
            title: "Phase 1: Foundation & Brand (Months 1-2)",
            tasks: [
              "Professional website development with corporate design",
              "Brand identity enhancement and visual consistency",
              "Corporate messaging development and content strategy",
              "Professional photography and visual content creation",
              "Contact integration and lead generation setup"
            ]
          },
          {
            title: "Phase 2: Social Media Strategy (Months 3-4)",
            tasks: [
              "LinkedIn strategy for B2B thought leadership",
              "Facebook business page optimization and management",
              "Content planning and professional networking approach",
              "Industry-specific content creation and sharing",
              "Professional networking and connection building"
            ]
          },
          {
            title: "Phase 3: Marketing & Expansion (Months 5-6)",
            tasks: [
              "SEO strategy implementation for corporate services",
              "Content marketing approach for industry expertise",
              "Professional networking and relationship building",
              "Market analysis and expansion strategy development",
              "Performance optimization and lead tracking"
            ]
          }
        ]
      },
      technologies: [
        { category: "Website Development", tools: ["React", "Corporate CMS", "Professional Design", "Contact Integration"] },
        { category: "Brand Development", tools: ["Brand Guidelines", "Visual Identity", "Professional Photography", "Corporate Messaging"] },
        { category: "Social Media Strategy", tools: ["LinkedIn Strategy", "Facebook Business", "Content Planning", "Professional Networking"] },
        { category: "Digital Marketing", tools: ["SEO Strategy", "Content Marketing", "Professional Networking", "Market Analysis"] },
        { category: "Analytics & Tracking", tools: ["Lead Tracking", "Performance Analytics", "Market Insights", "ROI Measurement"] }
      ],
      results: [
        { metric: "Online Presence", value: "+350%", description: "Significant increase in digital visibility and reach", period: "6 months" },
        { metric: "Lead Generation", value: "+200%", description: "New business inquiries through digital channels", period: "6 months" },
        { metric: "Brand Recognition", value: "+180%", description: "Enhanced brand awareness in target markets", period: "6 months" },
        { metric: "Market Reach", value: "5 Cities", description: "Expanded service reach across multiple locations", period: "Month 6" },
        { metric: "Client Acquisition", value: "+150%", description: "New clients acquired through digital presence", period: "6 months" },
        { metric: "Professional Network", value: "2K+", description: "Built strong professional network online", period: "Final month" },
        { metric: "Website Traffic", value: "+280%", description: "Increased website visits and engagement", period: "6 months" },
        { metric: "Social Engagement", value: "+220%", description: "High engagement on professional content", period: "Average" }
      ],
      testimonial: {
        quote: "Mainstream Digital delivered a comprehensive digital solution that exceeded our expectations. Their website development and social media strategy helped us establish a strong online presence and reach new markets effectively.",
        author: "Emmanuel Asante",
        role: "Managing Director",
        company: "Phastor Group Limited"
      },
      keyLearnings: [
        "Professional branding is crucial for corporate service providers",
        "LinkedIn is essential for B2B thought leadership and networking",
        "Content marketing establishes industry expertise and credibility",
        "Professional website design reflects company values and quality",
        "Strategic social media presence opens new market opportunities"
      ],
      nextSteps: "Phastor Group Limited continued expanding their digital presence with thought leadership content and launched a client portal, establishing themselves as a leading corporate service provider across Ghana."
    },
    "east-legon-veterinary": {
      id: "east-legon-veterinary",
      title: "East Legon Veterinary Hospital",
      subtitle: "Veterinary Digital Marketing Excellence",
      industry: "Veterinary Healthcare",
      location: "East Legon, Accra",
      duration: "5 months",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      icon: Users,
      heroImage: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
          caption: "Website optimization for better user experience and appointment booking"
        },
        {
          url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
          caption: "Local SEO optimization dominating East Legon veterinary searches"
        },
        {
          url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
          caption: "Social media presence with pet care tips and community engagement"
        },
        {
          url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
          caption: "Educational content strategy focusing on pet health and care"
        }
      ],
      overview: "Significantly increased East Legon Veterinary Hospital's appointment bookings by 280% through targeted digital marketing, website optimization, and local SEO, establishing them as the #1 veterinary choice in East Legon.",
      challenge: {
        title: "The Challenge",
        description: "East Legon Veterinary Hospital needed to increase their appointment bookings and establish a stronger digital presence in the competitive East Legon area while building trust with pet owners.",
        points: [
          "Low appointment booking rates through digital channels",
          "Strong competition in affluent East Legon area",
          "Need to build trust and credibility with discerning clientele",
          "Limited visibility in local search results",
          "Weak social media presence and engagement",
          "Lack of educational content for pet owners",
          "Need for professional online reputation management"
        ]
      },
      solution: {
        title: "Healthcare Digital Marketing Excellence",
        description: "We implemented a targeted digital marketing strategy focusing on website optimization, local SEO, and social media presence that significantly increased their visibility and appointment bookings.",
        phases: [
          {
            title: "Phase 1: Website & Local SEO (Months 1-2)",
            tasks: [
              "Website optimization for better user experience",
              "Appointment booking system enhancement",
              "Mobile optimization for on-the-go pet owners",
              "Local SEO implementation for East Legon searches",
              "Google My Business optimization and management"
            ]
          },
          {
            title: "Phase 2: Content & Social Media (Months 3-4)",
            tasks: [
              "Social media presence development on key platforms",
              "Educational content creation for pet care",
              "Community engagement and interaction strategies",
              "Pet health tips and veterinary expertise content",
              "Visual content creation and photography"
            ]
          },
          {
            title: "Phase 3: Optimization & Growth (Month 5)",
            tasks: [
              "Performance optimization and advanced marketing",
              "Review management and reputation building",
              "Advanced analytics implementation",
              "Conversion optimization for appointment bookings",
              "Community outreach and partnership development"
            ]
          }
        ]
      },
      technologies: [
        { category: "Website Optimization", tools: ["Website Optimization", "Appointment System", "Mobile Optimization", "User Experience Design"] },
        { category: "Local SEO", tools: ["Local SEO", "Google My Business", "Local Keywords", "Map Optimization"] },
        { category: "Social Media Marketing", tools: ["Facebook Marketing", "Instagram Growth", "Content Creation", "Community Engagement"] },
        { category: "Content Strategy", tools: ["Educational Content", "Pet Care Guides", "Health Tips", "Video Content"] },
        { category: "Analytics & Tracking", tools: ["Performance Analytics", "Appointment Tracking", "Local Rankings", "ROI Measurement"] }
      ],
      results: [
        { metric: "Appointment Bookings", value: "+280%", description: "Significant increase in online appointment requests", period: "5 months" },
        { metric: "Local Visibility", value: "#1", description: "Top ranking for East Legon veterinary searches", period: "Month 4" },
        { metric: "Social Followers", value: "25K+", description: "Built engaged community of pet owners", period: "Final month" },
        { metric: "Website Traffic", value: "+320%", description: "Increased website visits and engagement", period: "5 months" },
        { metric: "Client Retention", value: "90%", description: "High client satisfaction and return rate", period: "Monthly average" },
        { metric: "Service Area", value: "3x", description: "Expanded service area reach through digital presence", period: "5 months" },
        { metric: "Review Rating", value: "4.9★", description: "Excellent online reviews and reputation", period: "Current" },
        { metric: "Conversion Rate", value: "12.5%", description: "High conversion from website visits to appointments", period: "Final 2 months" }
      ],
      testimonial: {
        quote: "Their expertise in digital marketing for healthcare is outstanding. Our appointment bookings increased significantly after they optimized our website and social media presence. Highly professional team.",
        author: "Dr. Akosua Darko",
        role: "Lead Veterinarian",
        company: "East Legon Veterinary Hospital"
      },
      keyLearnings: [
        "Local SEO is crucial for healthcare providers in specific areas",
        "Educational content builds trust in healthcare services",
        "Mobile optimization is essential for appointment bookings",
        "Social proof through reviews significantly impacts healthcare choices",
        "Community engagement drives word-of-mouth referrals in healthcare"
      ],
      nextSteps: "East Legon Veterinary Hospital expanded their services with telemedicine consultations and launched a pet wellness program, maintaining their position as East Legon's premier veterinary facility."
    },
    "tees-hoodies-hub": {
      id: "tees-hoodies-hub",
      title: "Tees and Hoodies Hub",
      subtitle: "Apparel Brand Digital Development",
      industry: "Fashion & Apparel",
      location: "Accra, Ghana",
      duration: "7 months",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      icon: Zap,
      heroImage: "https://images.unsplash.com/photo-1583743814966-8936f37f3652?w=1200&h=600&fit=crop",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop",
          caption: "E-commerce platform optimized for apparel sales and easy browsing"
        },
        {
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
          caption: "Brand development with cohesive identity and trendy messaging"
        },
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
          caption: "Social media content creation with fashion photography and styling"
        },
        {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
          caption: "Digital marketing campaigns targeting fashion enthusiasts"
        }
      ],
      overview: "Built Tees and Hoodies Hub into a recognized apparel brand through comprehensive e-commerce development, brand creation, and social media strategy, achieving 300% sales growth and establishing strong market presence.",
      challenge: {
        title: "The Challenge",
        description: "Tees and Hoodies Hub needed to build a strong online presence for their apparel brand and establish themselves in Ghana's competitive fashion market while connecting with their target audience.",
        points: [
          "New brand with no established market presence",
          "Highly competitive fashion and apparel market",
          "Need to connect with young, trend-conscious audience",
          "Requirement for professional e-commerce platform",
          "Lack of brand identity and consistent messaging",
          "Need for engaging social media content strategy",
          "Challenge of building customer trust and loyalty"
        ]
      },
      solution: {
        title: "Apparel Brand Digital Excellence",
        description: "We created a comprehensive brand development strategy including e-commerce setup, social media content creation, and digital marketing that positioned them as a trendy apparel destination.",
        phases: [
          {
            title: "Phase 1: Foundation & E-commerce (Months 1-2)",
            tasks: [
              "E-commerce platform development for apparel sales",
              "Product catalog setup with detailed descriptions",
              "Shopping cart and payment integration",
              "Mobile-responsive design for fashion shoppers",
              "Basic brand identity and logo development"
            ]
          },
          {
            title: "Phase 2: Brand Development (Months 3-4)",
            tasks: [
              "Comprehensive brand identity development",
              "Brand guidelines and visual consistency",
              "Fashion photography and product styling",
              "Professional product photography setup",
              "Brand messaging and tone development"
            ]
          },
          {
            title: "Phase 3: Content & Social Media (Months 5-6)",
            tasks: [
              "Instagram content creation and strategy",
              "Fashion photography and styling content",
              "Trend analysis and seasonal content planning",
              "Social media engagement and community building",
              "User-generated content campaigns"
            ]
          },
          {
            title: "Phase 4: Marketing & Growth (Month 7)",
            tasks: [
              "Digital marketing campaigns for fashion audience",
              "Influencer partnerships and collaborations",
              "Fashion campaign development and execution",
              "Performance optimization and scaling",
              "Customer retention and loyalty programs"
            ]
          }
        ]
      },
      technologies: [
        { category: "E-commerce Development", tools: ["E-commerce Development", "Product Catalog", "Shopping Cart", "Payment Integration"] },
        { category: "Brand Development", tools: ["Brand Identity", "Logo Design", "Brand Guidelines", "Fashion Photography"] },
        { category: "Content Creation", tools: ["Instagram Content", "Fashion Photography", "Styling Content", "Trend Analysis"] },
        { category: "Digital Marketing", tools: ["Social Media Ads", "Influencer Marketing", "Fashion Campaigns", "Target Audience"] },
        { category: "Analytics & Optimization", tools: ["Sales Analytics", "Social Media Analytics", "Fashion Trends", "Customer Insights"] }
      ],
      results: [
        { metric: "Online Sales", value: "+300%", description: "Significant growth in e-commerce sales", period: "7 months" },
        { metric: "Social Engagement", value: "+400%", description: "High engagement on fashion content", period: "Final 3 months" },
        { metric: "Brand Awareness", value: "+250%", description: "Increased recognition in fashion community", period: "7 months" },
        { metric: "Customer Base", value: "10K+", description: "Built loyal customer following", period: "Final month" },
        { metric: "Product Range", value: "50+", description: "Expanded product offerings successfully", period: "7 months" },
        { metric: "Market Position", value: "Top 10", description: "Established as popular apparel brand in Accra", period: "Month 6" },
        { metric: "Conversion Rate", value: "5.2%", description: "Strong e-commerce conversion rate", period: "Final 2 months" },
        { metric: "Return Customers", value: "42%", description: "Good customer retention and repeat purchases", period: "Monthly average" }
      ],
      testimonial: {
        quote: "Mainstream Digital helped us build a strong online presence for our apparel brand. Their social media content creation and e-commerce setup have been instrumental in our growth. Great team to work with!",
        author: "Akosua Frimpong",
        role: "Owner",
        company: "Tees and Hoodies Hub"
      },
      keyLearnings: [
        "Visual content is crucial for fashion and apparel brands",
        "Trend-focused content drives engagement in fashion industry",
        "Mobile-optimized e-commerce is essential for fashion shoppers",
        "Influencer partnerships accelerate brand awareness in fashion",
        "User-generated content builds authentic brand community"
      ],
      nextSteps: "Tees and Hoodies Hub expanded their product line with custom designs and launched a subscription box service, establishing themselves as a leading streetwear brand in Ghana."
    }
  };

  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`pt-32 pb-16 bg-gradient-to-br ${study.gradient} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <study.icon className="w-10 h-10" />
              </div>
              <div className="text-left">
                <h1 className="display-lg mb-2">{study.title}</h1>
                <p className="text-xl opacity-90">{study.subtitle}</p>
              </div>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              {study.overview}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{study.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{study.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>{study.industry}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="display-md text-foreground mb-6">Key Results</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {study.results.slice(0, 4).map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="display-md text-foreground mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-red-500" />
                {study.challenge.title}
              </h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {study.challenge.description}
              </p>
              <div className="space-y-3">
                {study.challenge.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <img 
                src={study.heroImage} 
                alt={study.title}
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="display-md text-foreground mb-6">Project Gallery</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visual highlights showcasing our work and the transformation achieved
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {study.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium leading-relaxed">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Phases */}
      <section className="py-16 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="display-md text-foreground mb-6 flex items-center justify-center gap-3">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              {study.solution.title}
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {study.solution.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {study.solution.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-0 bg-card/50 backdrop-blur-sm">
                  <h4 className="text-xl font-bold text-foreground mb-4">{phase.title}</h4>
                  <div className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="display-md text-foreground mb-6">Technologies & Tools Used</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The comprehensive tech stack that powered this transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {study.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-foreground mb-4">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="display-md text-foreground mb-6">Comprehensive Results</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {study.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border-0 bg-card/50 backdrop-blur-sm h-full">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {result.description}
                  </div>
                  <div className="text-xs text-muted-foreground/80">
                    {result.period}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 border-0 bg-gradient-to-br from-accent/5 via-purple-50 to-background">
              <Quote className="w-12 h-12 text-accent mb-6 mx-auto" />
              <blockquote className="text-2xl text-foreground italic text-center mb-8 leading-relaxed">
                "{study.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-600 rounded-full"></div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{study.testimonial.author}</div>
                  <div className="text-muted-foreground">{study.testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{study.testimonial.company}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 bg-gradient-to-br from-background via-card/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="display-md text-foreground mb-8">Key Learnings</h3>
              <div className="space-y-4">
                {study.keyLearnings.map((learning, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{learning}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="display-md text-foreground mb-8">What's Next</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {study.nextSteps}
              </p>
              
              <div className="space-y-4">
                <Button variant="gradient" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Start Your Success Story
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link to="/case-studies">
                    View More Case Studies
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
