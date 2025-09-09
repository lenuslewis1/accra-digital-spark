import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Heart, Lightbulb, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Campaigns Launched", value: "200+", icon: Target },
    { label: "Happy Clients", value: "500+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Award },
    { label: "Market Reach", value: "15+", icon: Globe },
  ];

  const team = [
    {
      name: "Kwame Asante",
      role: "CEO & Digital Strategist",
      bio: "Leading digital transformation for Ghanaian businesses with 10+ years experience in marketing and strategy.",
    },
    {
      name: "Ama Osei",
      role: "Creative Director",
      bio: "Award-winning designer creating impactful brand experiences across Africa with expertise in visual storytelling.",
    },
    {
      name: "Kojo Mensah",
      role: "Technical Lead",
      bio: "Full-stack developer specializing in scalable web solutions, e-commerce platforms, and digital optimization.",
    },
    {
      name: "Akosua Boateng",
      role: "Social Media Manager",
      bio: "Social media expert driving engagement and growth for brands across Ghana and West Africa.",
    },
    {
      name: "Nana Adjei",
      role: "SEO Specialist",
      bio: "Search engine optimization expert helping businesses achieve top rankings and drive organic traffic.",
    },
    {
      name: "Efua Darko",
      role: "Content Strategist",
      bio: "Content marketing specialist creating compelling narratives that resonate with African audiences.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Every strategy we develop is tailored specifically to your business goals and target audience.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "We stay ahead of digital trends to ensure your brand always stands out in the marketplace.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "We measure success through tangible results and ROI that directly impact your bottom line.",
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Open communication and honest reporting build the foundation of our client relationships.",
    },
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
              About <span className="text-gradient-purple">Mainstream Digital</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering Ghanaian businesses to thrive in the digital age through innovative marketing solutions, creative excellence, and data-driven strategies that deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our <span className="text-gradient-purple">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for businesses across Ghana.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="display-md text-foreground mb-8">
                Our <span className="text-gradient-purple">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016 in the heart of Accra, Mainstream Digital was born from a vision to bridge the digital divide for African businesses. We recognized that many local companies had incredible products and services but lacked the digital presence to compete in the modern marketplace.
                </p>
                <p>
                  What started as a small team of passionate digital enthusiasts has grown into Ghana's most trusted digital marketing agency. We've helped transform businesses from local startups to established corporations, enabling them to reach new markets and achieve unprecedented growth.
                </p>
                <p>
                  Today, we're proud to be at the forefront of Ghana's digital revolution, combining international best practices with deep local market knowledge to deliver strategies that truly resonate with African audiences.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/services">
                  <Button variant="gradient" size="lg">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl transform -rotate-6 opacity-80"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl transform rotate-6 shadow-2xl">
                  <div className="p-8 h-full flex flex-col justify-center text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <h3 className="text-xl font-semibold mb-3">Digital Excellence</h3>
                      <p className="text-sm opacity-90 mb-4">Transforming businesses across Ghana with innovative digital solutions</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs opacity-75">Since 2016</span>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient-purple">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we partner with businesses across Ghana.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-gradient-purple">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of digital experts combines local market knowledge with international best practices to deliver exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 shadow-lg"></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="display-lg text-foreground mb-6">
              Ready to Transform Your <span className="text-gradient-purple">Digital Presence</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create digital experiences that drive real business growth and meaningful connections with your audience across Ghana and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gradient" size="lg" className="text-lg" asChild>
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;