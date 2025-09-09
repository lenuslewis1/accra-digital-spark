import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Blog = () => {
  // Sample blog posts - these would come from your CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Strategies That Work in Ghana",
      excerpt: "Discover the most effective digital marketing strategies specifically tailored for the Ghanaian market and how to implement them.",
      author: "Mainstream Digital Team",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Digital Marketing",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Local SEO in Accra",
      excerpt: "Learn the essential steps to improve your local search rankings and attract more customers in Accra and surrounding areas.",
      author: "SEO Specialist",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "SEO",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 3,
      title: "Social Media Marketing Trends for Ghanaian Businesses",
      excerpt: "Stay ahead of the curve with the latest social media marketing trends that are driving engagement and conversions in Ghana.",
      author: "Social Media Manager",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Social Media",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 4,
      title: "PPC Advertising on a Budget: A Guide for Small Businesses",
      excerpt: "Maximize your advertising budget with these proven PPC strategies designed for small and medium businesses.",
      author: "PPC Specialist",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "PPC",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 5,
      title: "Building Brand Awareness Through Content Marketing",
      excerpt: "Create compelling content that resonates with your audience and builds lasting brand recognition in the digital space.",
      author: "Content Strategist",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Content Marketing",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: 6,
      title: "Email Marketing Best Practices for Higher Conversion Rates",
      excerpt: "Transform your email campaigns with these proven strategies that drive engagement and boost conversion rates.",
      author: "Email Marketing Expert",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = [
    "All",
    "Digital Marketing",
    "SEO",
    "Social Media",
    "PPC",
    "Content Marketing",
    "Email Marketing"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags would be handled by your routing solution */}
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="display-lg text-foreground mb-6 leading-tight">
              Digital Marketing <span className="text-gradient-purple">Insights</span> & <span className="text-gradient-orange">Tips</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest digital marketing trends, strategies, and best practices to grow your business in Ghana and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/60 rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-smooth">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                        <Tag className="w-4 h-4" />
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-muted-foreground">Featured</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${featuredPost.id}`}>
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/60 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-smooth group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-accent">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-accent/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="display-md text-foreground mb-6">
              Ready to <span className="text-gradient-purple">transform</span> your digital presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert digital marketing strategies tailored specifically for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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

export default Blog;