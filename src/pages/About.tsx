import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "150+", icon: Target },
    { label: "Happy Clients", value: "100+", icon: Users },
    { label: "Years Experience", value: "8+", icon: Award },
    { label: "Global Reach", value: "15+", icon: Globe },
  ];

  const team = [
    {
      name: "Kwame Asante",
      role: "CEO & Digital Strategist",
      bio: "Leading digital transformation for Ghanaian businesses with 10+ years experience.",
    },
    {
      name: "Ama Osei",
      role: "Creative Director",
      bio: "Award-winning designer creating impactful brand experiences across Africa.",
    },
    {
      name: "Kojo Mensah",
      role: "Technical Lead",
      bio: "Full-stack developer specializing in scalable web solutions and e-commerce.",
    },
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
              About Mainstream Digital
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empowering Ghanaian businesses to thrive in the digital age through innovative marketing solutions and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2016 in Accra, Mainstream Digital was born from a vision to bridge the digital divide for African businesses. We recognized that many local companies had incredible products and services but lacked the digital presence to compete in the modern marketplace.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're proud to be one of Ghana's leading digital marketing agencies, helping businesses across West Africa establish powerful online presences, drive meaningful engagement, and achieve sustainable growth through strategic digital solutions.
              </p>
              <Button variant="hero">Learn About Our Process</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-primary rounded-2xl shadow-elegant"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of digital experts combines local market knowledge with international best practices to deliver exceptional results.
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
                <Card className="p-6 text-center hover:shadow-elegant transition-smooth">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </Card>
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
              Ready to Transform Your <span className="gradient-text">Digital Presence</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create digital experiences that drive real business growth and meaningful connections with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;