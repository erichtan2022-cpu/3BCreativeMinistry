import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '628118331111';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  );
}
