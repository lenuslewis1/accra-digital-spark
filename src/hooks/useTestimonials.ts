import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Testimonial {
  id: string;
  client_name: string;
  client_title?: string;
  client_company?: string;
  testimonial_text: string;
  rating?: number;
  featured: boolean;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback testimonials from actual clients
  const fallbackTestimonials: Testimonial[] = [
    {
      id: '1',
      client_name: 'Dr. Koney Mensah',
      client_title: 'Chief Veterinarian',
      client_company: "Koney's Veterinary Hospital",
      testimonial_text: 'Mainstream Digital transformed our online presence completely. Our social media following grew by 400% and we now reach pet owners across Greater Accra. Their content creation and website development have made us the go-to veterinary service in the area.',
      rating: 5,
      featured: true
    },
    {
      id: '2',
      client_name: 'Sarah Osei',
      client_title: 'CEO',
      client_company: 'The Royal Boutique',
      testimonial_text: 'The e-commerce platform they built for us is exceptional. Our online sales increased by 250% within 6 months. Their social media management and content creation perfectly captures our luxury brand aesthetic. We couldn\'t be happier with the results.',
      rating: 5,
      featured: true
    },
    {
      id: '3',
      client_name: 'Emmanuel Asante',
      client_title: 'Managing Director',
      client_company: 'Phastor Group Limited',
      testimonial_text: 'Mainstream Digital delivered a comprehensive digital solution that exceeded our expectations. Their website development and social media strategy helped us establish a strong online presence and reach new markets effectively.',
      rating: 5,
      featured: true
    },
    {
      id: '4',
      client_name: 'Dr. Akosua Darko',
      client_title: 'Lead Veterinarian',
      client_company: 'East Legon Veterinary Hospital',
      testimonial_text: 'Their expertise in digital marketing for healthcare is outstanding. Our appointment bookings increased significantly after they optimized our website and social media presence. Highly professional team.',
      rating: 5,
      featured: true
    },
    {
      id: '5',
      client_name: 'Kwame Appiah',
      client_title: 'Founder',
      client_company: 'Games and Connect',
      testimonial_text: 'They created an amazing gaming platform for our community. The website they built is fast, engaging, and perfectly captures the gaming culture. Our user engagement increased by 300% since launch.',
      rating: 5,
      featured: true
    },
    {
      id: '6',
      client_name: 'Akosua Frimpong',
      client_title: 'Owner',
      client_company: 'Tees and Hoodies Hub',
      testimonial_text: 'Mainstream Digital helped us build a strong online presence for our apparel brand. Their social media content creation and e-commerce setup have been instrumental in our growth. Great team to work with!',
      rating: 5,
      featured: true
    }
  ];

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      // Use database testimonials if available, otherwise use fallback
      const testimonialData = data && data.length > 0 ? data : fallbackTestimonials;
      setTestimonials(testimonialData);
      setError(null);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      // Use fallback testimonials if database fails
      setTestimonials(fallbackTestimonials);
      setError(null); // Don't show error to users, just use fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    refetch: fetchTestimonials,
  };
};