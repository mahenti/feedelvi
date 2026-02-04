import { useState } from 'react';
import { X, Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    animalType: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-[#f5f0e4] rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#205a40]/10 flex items-center justify-center hover:bg-[#205a40]/20 transition-colors"
          >
            <X className="w-5 h-5 text-[#205a40]" />
          </button>
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-[#205a40] flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black text-[#133425] mb-3" style={{ fontFamily: 'Onest, sans-serif' }}>
              Quote Request Sent!
            </h3>
            <p className="text-[#205a40] font-medium mb-6" style={{ fontFamily: 'Onest, sans-serif' }}>
              Thank you for your interest. Our team will contact you within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-[#205a40] hover:bg-[#2d805b] text-white px-8 py-3 rounded-full font-black uppercase tracking-wider transition-all"
              style={{ fontFamily: 'Onest, sans-serif' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#f5f0e4] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
        {/* Header */}
        <div className="bg-[#205a40] px-8 py-6 rounded-t-3xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Onest, sans-serif' }}>
              Get Your Quote
            </h2>
            <p className="text-[#e7dbbf] text-sm font-medium mt-1" style={{ fontFamily: 'Onest, sans-serif' }}>
              Premium feed solutions for your livestock
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#205a40]" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none"
                  style={{ fontFamily: 'Onest, sans-serif' }}
                  placeholder="John Smith"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#205a40]" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none"
                  style={{ fontFamily: 'Onest, sans-serif' }}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#205a40]" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none"
                  style={{ fontFamily: 'Onest, sans-serif' }}
                  placeholder="+358 12 345 6789"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Company/Farm Name
              </label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#205a40]" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none"
                  style={{ fontFamily: 'Onest, sans-serif' }}
                  placeholder="Nordic Farms Ltd"
                />
              </div>
            </div>
          </div>

          {/* Animal Type & Quantity */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Animal Type *
              </label>
              <select
                name="animalType"
                required
                value={formData.animalType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none appearance-none cursor-pointer"
                style={{ fontFamily: 'Onest, sans-serif' }}
              >
                <option value="">Select animal type</option>
                <option value="cattle">Cattle</option>
                <option value="sheep-goat">Sheep & Goats</option>
                <option value="pigs">Pigs</option>
                <option value="poultry">Poultry</option>
                <option value="rabbits">Rabbits</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
                Estimated Quantity (kg/month)
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none"
                style={{ fontFamily: 'Onest, sans-serif' }}
                placeholder="e.g., 5000"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#133425] uppercase tracking-wider" style={{ fontFamily: 'Onest, sans-serif' }}>
              Additional Requirements
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#205a40]" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#205a40]/20 focus:border-[#205a40] bg-white text-[#133425] font-medium transition-colors outline-none resize-none"
                style={{ fontFamily: 'Onest, sans-serif' }}
                placeholder="Tell us about your specific needs..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#205a40] hover:bg-[#2d805b] disabled:bg-[#205a40]/50 text-white py-4 rounded-xl font-black text-lg uppercase tracking-wider transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl"
            style={{ fontFamily: 'Onest, sans-serif' }}
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Request Quote
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#205a40]/60 font-medium" style={{ fontFamily: 'Onest, sans-serif' }}>
            By submitting, you agree to our privacy policy. We respect your data.
          </p>
        </form>
      </div>
    </div>
  );
}
