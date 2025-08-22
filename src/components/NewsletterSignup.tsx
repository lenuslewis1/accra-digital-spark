import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNewsletter } from '@/hooks/useNewsletter';

interface NewsletterSignupProps {
  source?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterSignup = ({ 
  source = 'website', 
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  className = ""
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const { subscribe, isSubmitting } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const result = await subscribe(email, source);
    if (result.success) {
      setEmail('');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className={`flex gap-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button 
        type="submit" 
        variant="hero" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : buttonText}
      </Button>
    </motion.form>
  );
};

export default NewsletterSignup;