import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511945379081&text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio.&type=phone_number&app_absent=0";

const StickyWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
};

export default StickyWhatsApp;
