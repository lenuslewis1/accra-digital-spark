import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface ServiceRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceType: string;
  projectTitle: string;
  projectDescription: string;
  budgetRange?: string;
  timeline?: string;
}

export const useServiceRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitServiceRequest = async (data: ServiceRequestData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('service_requests')
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service_type: data.serviceType,
          project_title: data.projectTitle,
          project_description: data.projectDescription,
          budget_range: data.budgetRange,
          timeline: data.timeline,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Service Request Submitted!",
        description: "We'll get back to you within 24 hours to discuss your project.",
      });

      return { success: true };
    } catch (error) {
      console.error('Service request submission error:', error);
      toast({
        title: "Error Submitting Request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitServiceRequest,
    isSubmitting,
  };
};