import { useState } from 'react';

const useHome = () => {
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          message: 'Interested in properties',
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      alert('Thank you for your interest! We will contact you soon.');
      e.target.reset();
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleContactSubmit,
  };
};

export default useHome;