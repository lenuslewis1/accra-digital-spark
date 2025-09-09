import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactForm, type ContactFormData } from "@/hooks/useContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const { submitContact, isSubmitting } = useContactForm();

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContact(data);
    if (result.success) {
      reset();
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 24 123 4567", "+233 30 456 7890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@mainstreamdigital.gh", "info@mainstreamdigital.gh"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["East Legon, Accra", "Greater Accra Region, Ghana"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
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
              Get In <span className="text-gradient-purple">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's start a conversation about your business goals and how we can help you achieve them with proven strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-card/50 backdrop-blur-sm shadow-xl" id="contact-form">
                <h2 className="display-md text-foreground mb-8">
                  Send Us a <span className="text-gradient-purple">Message</span>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      placeholder="Enter your phone number"
                      {...register("phone")}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name"
                      {...register("company")}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select 
                      id="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      {...register("service")}
                    >
                      <option value="">Select a service</option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="branding">Brand Design & Identity</option>
                      <option value="web">Web Development</option>
                      <option value="email">Email Marketing</option>
                      <option value="content">Content Creation</option>
                      <option value="advertising">Digital Advertising</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project and goals..." 
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="gradient" 
                    size="lg" 
                    className="w-full text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="display-md text-foreground mb-8">
                  Contact <span className="text-gradient-purple">Information</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're here to help! Reach out to us through any of the following channels and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent via-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-3 text-foreground">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground mb-1 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 bg-card/50 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-4 text-foreground">Visit Our Office</h3>
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-gradient-purple">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our services? Here are some quick answers to help you get started on your digital transformation journey.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on scope, but most digital marketing projects are completed within 4-12 weeks from strategy development to full implementation and optimization."
                },
                {
                  question: "Do you work with businesses outside Accra?",
                  answer: "Yes! We work with clients across Ghana and West Africa, providing both remote services and on-site consultations as needed for your business."
                },
                {
                  question: "What's included in your digital marketing packages?",
                  answer: "Our packages are customized based on your needs but typically include strategy development, implementation, ongoing optimization, analytics monitoring, and comprehensive monthly reporting."
                },
                {
                  question: "Can you help improve our existing campaigns?",
                  answer: "Absolutely! We can audit and optimize existing digital assets, websites, and marketing campaigns to improve performance, increase ROI, and maximize your digital potential."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-bold mb-4 text-lg text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              Start Your <span className="text-gradient-purple">Digital Journey</span> Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait to transform your business. Every day without a strong digital presence is a missed opportunity for growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="gradient" 
                size="lg" 
                className="text-lg"
                onClick={() => {
                  const form = document.getElementById('contact-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;