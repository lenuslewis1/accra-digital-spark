import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Users, 
  Mail, 
  MessageSquare, 
  Star, 
  BarChart3, 
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";

type Contact = Tables<"contacts">;
type Newsletter = Tables<"newsletter_subscriptions">;
type ServiceRequest = Tables<"service_requests">;
type Testimonial = Tables<"testimonials">;

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Data states
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Stats
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalNewsletters: 0,
    totalServiceRequests: 0,
    totalTestimonials: 0,
    newThisMonth: 0,
    pendingRequests: 0
  });

  useEffect(() => {
    fetchAllData();
    seedSampleData(); // Add sample data if tables are empty
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [contactsRes, newslettersRes, serviceRequestsRes, testimonialsRes] = await Promise.all([
        supabase.from("contacts").select("*").order("created_at", { ascending: false }),
        supabase.from("newsletter_subscriptions").select("*").order("created_at", { ascending: false }),
        supabase.from("service_requests").select("*").order("created_at", { ascending: false }),
        supabase.from("testimonials").select("*").order("created_at", { ascending: false })
      ]);

      if (contactsRes.data) setContacts(contactsRes.data);
      if (newslettersRes.data) setNewsletters(newslettersRes.data);
      if (serviceRequestsRes.data) setServiceRequests(serviceRequestsRes.data);
      if (testimonialsRes.data) setTestimonials(testimonialsRes.data);

      // Calculate stats
      const now = new Date();
      const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      
      const newContactsThisMonth = contactsRes.data?.filter(c => new Date(c.created_at) >= thisMonth).length || 0;
      const newServiceRequestsThisMonth = serviceRequestsRes.data?.filter(sr => new Date(sr.created_at) >= thisMonth).length || 0;
      const pendingRequests = serviceRequestsRes.data?.filter(sr => sr.status === "pending" || !sr.status).length || 0;

      setStats({
        totalContacts: contactsRes.data?.length || 0,
        totalNewsletters: newslettersRes.data?.length || 0,
        totalServiceRequests: serviceRequestsRes.data?.length || 0,
        totalTestimonials: testimonialsRes.data?.length || 0,
        newThisMonth: newContactsThisMonth + newServiceRequestsThisMonth,
        pendingRequests
      });

    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch admin data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const seedSampleData = async () => {
    try {
      // Check if we need to seed data
      const { data: existingContacts } = await supabase.from("contacts").select("id").limit(1);
      const { data: existingNewsletters } = await supabase.from("newsletter_subscriptions").select("id").limit(1);
      const { data: existingServiceRequests } = await supabase.from("service_requests").select("id").limit(1);

      // Seed contacts if empty
      if (!existingContacts || existingContacts.length === 0) {
        await supabase.from("contacts").insert([
          {
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone: "+233 24 123 4567",
            company: "Tech Solutions Ltd",
            service: "Web Development",
            message: "Looking for a modern website for our tech company",
            status: "new"
          },
          {
            first_name: "Jane",
            last_name: "Smith",
            email: "jane.smith@business.com",
            phone: "+233 20 987 6543",
            company: "Business Corp",
            service: "Digital Marketing",
            message: "Need help with our social media presence",
            status: "in_progress"
          },
          {
            first_name: "Kwame",
            last_name: "Asante",
            email: "kwame@startup.gh",
            phone: "+233 54 555 1234",
            company: "StartupGH",
            service: "SEO",
            message: "Want to improve our search rankings",
            status: "completed"
          }
        ]);
      }

      // Seed newsletters if empty
      if (!existingNewsletters || existingNewsletters.length === 0) {
        await supabase.from("newsletter_subscriptions").insert([
          {
            email: "subscriber1@example.com",
            status: "active",
            source: "website"
          },
          {
            email: "subscriber2@business.com",
            status: "active",
            source: "social_media"
          },
          {
            email: "subscriber3@startup.gh",
            status: "active",
            source: "website"
          }
        ]);
      }

      // Seed service requests if empty
      if (!existingServiceRequests || existingServiceRequests.length === 0) {
        await supabase.from("service_requests").insert([
          {
            first_name: "Alice",
            last_name: "Johnson",
            email: "alice@company.com",
            phone: "+233 24 111 2222",
            company: "Alice & Co",
            service_type: "Mobile App Development",
            project_title: "E-commerce Mobile App",
            project_description: "We need a mobile app for our online store with payment integration",
            budget_range: "$10,000 - $25,000",
            timeline: "3-6 months",
            status: "pending"
          },
          {
            first_name: "Bob",
            last_name: "Wilson",
            email: "bob@restaurant.gh",
            phone: "+233 20 333 4444",
            company: "Bob's Restaurant",
            service_type: "UI/UX Design",
            project_title: "Restaurant Website Redesign",
            project_description: "Modernize our restaurant website with online ordering system",
            budget_range: "$5,000 - $10,000",
            timeline: "1-3 months",
            status: "in_progress"
          }
        ]);
      }

    } catch (error) {
      console.error("Error seeding sample data:", error);
    }
  };

  const updateServiceRequestStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("service_requests")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;

      setServiceRequests(prev => 
        prev.map(sr => sr.id === id ? { ...sr, status } : sr)
      );

      toast({
        title: "Status Updated",
        description: "Service request status has been updated successfully"
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive"
      });
    }
  };

  const deleteRecord = async (table: "contacts" | "newsletter_subscriptions" | "service_requests" | "testimonials", id: string) => {
    try {
      let error;
      
      switch (table) {
        case "contacts":
          ({ error } = await supabase.from("contacts").delete().eq("id", id));
          break;
        case "newsletter_subscriptions":
          ({ error } = await supabase.from("newsletter_subscriptions").delete().eq("id", id));
          break;
        case "service_requests":
          ({ error } = await supabase.from("service_requests").delete().eq("id", id));
          break;
        case "testimonials":
          ({ error } = await supabase.from("testimonials").delete().eq("id", id));
          break;
      }
      
      if (error) throw error;

      // Update local state based on table
      switch (table) {
        case "contacts":
          setContacts(prev => prev.filter(c => c.id !== id));
          break;
        case "newsletter_subscriptions":
          setNewsletters(prev => prev.filter(n => n.id !== id));
          break;
        case "service_requests":
          setServiceRequests(prev => prev.filter(sr => sr.id !== id));
          break;
        case "testimonials":
          setTestimonials(prev => prev.filter(t => t.id !== id));
          break;
      }

      toast({
        title: "Deleted",
        description: "Record has been deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting record:", error);
      toast({
        title: "Error",
        description: "Failed to delete record",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string | null) => {
    if (!status) return <Badge variant="secondary">Pending</Badge>;
    
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "in_progress":
        return <Badge variant="default">In Progress</Badge>;
      case "completed":
        return <Badge variant="outline" className="border-green-500 text-green-700">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your business data and customer interactions</p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
          >
            <Card className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Contacts</p>
                  <p className="text-2xl font-bold">{stats.totalContacts}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Newsletter</p>
                  <p className="text-2xl font-bold">{stats.totalNewsletters}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Service Requests</p>
                  <p className="text-2xl font-bold">{stats.totalServiceRequests}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Testimonials</p>
                  <p className="text-2xl font-bold">{stats.totalTestimonials}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">New This Month</p>
                  <p className="text-2xl font-bold">{stats.newThisMonth}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-red-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">{stats.pendingRequests}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="contacts">Contacts</TabsTrigger>
                <TabsTrigger value="service-requests">Service Requests</TabsTrigger>
                <TabsTrigger value="newsletters">Newsletter</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Contacts</h3>
                    <div className="space-y-3">
                      {contacts.slice(0, 5).map((contact) => (
                        <div key={contact.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{contact.first_name} {contact.last_name}</p>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(contact.created_at)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Service Requests</h3>
                    <div className="space-y-3">
                      {serviceRequests.slice(0, 5).map((request) => (
                        <div key={request.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{request.project_title}</p>
                            <p className="text-sm text-muted-foreground">{request.service_type}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(request.status)}
                            <p className="text-xs text-muted-foreground mt-1">
                              {formatDate(request.created_at)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Newsletter Subscriptions</h3>
                    <div className="space-y-3">
                      {newsletters.slice(0, 5).map((newsletter) => (
                        <div key={newsletter.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{newsletter.email}</p>
                            <p className="text-sm text-muted-foreground">{newsletter.source || "website"}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={newsletter.status === "active" ? "default" : "secondary"} className="text-xs">
                              {newsletter.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {formatDate(newsletter.created_at)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="contacts" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Search contacts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts
                        .filter(contact => 
                          searchTerm === "" || 
                          contact.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contact.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contact.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell>{contact.first_name} {contact.last_name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.company || "-"}</TableCell>
                          <TableCell>{contact.service || "-"}</TableCell>
                          <TableCell>{getStatusBadge(contact.status)}</TableCell>
                          <TableCell>{formatDate(contact.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => deleteRecord("contacts", contact.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="service-requests" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Search requests..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Timeline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceRequests
                        .filter(request => {
                          const matchesSearch = searchTerm === "" || 
                            request.project_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            request.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            request.last_name.toLowerCase().includes(searchTerm.toLowerCase());
                          
                          const matchesStatus = filterStatus === "all" || 
                            request.status === filterStatus ||
                            (filterStatus === "pending" && !request.status);
                          
                          return matchesSearch && matchesStatus;
                        })
                        .map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.project_title}</TableCell>
                          <TableCell>{request.first_name} {request.last_name}</TableCell>
                          <TableCell>{request.service_type}</TableCell>
                          <TableCell>{request.budget_range || "-"}</TableCell>
                          <TableCell>{request.timeline || "-"}</TableCell>
                          <TableCell>
                            <Select
                              value={request.status || "pending"}
                              onValueChange={(value) => updateServiceRequestStatus(request.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="in_progress">In Progress</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                          <TableCell>{formatDate(request.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => deleteRecord("service_requests", request.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="newsletters" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Search subscribers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead>Subscribed Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newsletters
                        .filter(newsletter => 
                          searchTerm === "" || 
                          newsletter.email.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((newsletter) => (
                        <TableRow key={newsletter.id}>
                          <TableCell className="font-medium">{newsletter.email}</TableCell>
                          <TableCell>
                            <Badge variant={newsletter.status === "active" ? "default" : "secondary"}>
                              {newsletter.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{newsletter.source || "website"}</TableCell>
                          <TableCell>{formatDate(newsletter.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => deleteRecord("newsletter_subscriptions", newsletter.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials" className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Search testimonials..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Testimonial
                    </Button>
                  </div>
                </div>

                <Card>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Testimonial</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {testimonials
                        .filter(testimonial => 
                          searchTerm === "" || 
                          testimonial.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (testimonial.client_company && testimonial.client_company.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                        .map((testimonial) => (
                        <TableRow key={testimonial.id}>
                          <TableCell>{testimonial.client_name}</TableCell>
                          <TableCell>{testimonial.client_company || "-"}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                              {testimonial.rating || "-"}
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {testimonial.testimonial_text}
                          </TableCell>
                          <TableCell>
                            {testimonial.featured ? (
                              <Badge variant="default">Featured</Badge>
                            ) : (
                              <Badge variant="secondary">Not Featured</Badge>
                            )}
                          </TableCell>
                          <TableCell>{getStatusBadge(testimonial.status)}</TableCell>
                          <TableCell>{formatDate(testimonial.created_at)}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => deleteRecord("testimonials", testimonial.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
