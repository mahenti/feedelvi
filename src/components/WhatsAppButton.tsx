import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "+358123456789"; // Replace with actual number
  const message = encodeURIComponent("Hi! I'm interested in FeedElvi products. Can you help me?");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="font-bold text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap" style={{ fontFamily: 'Onest, sans-serif' }}>
        Chat with us
      </span>
    </a>
  );
}
