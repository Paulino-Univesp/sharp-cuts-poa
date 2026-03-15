import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário.";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Agende seu Horário <span className="text-gradient-gold">Agora</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10">
          Não perca mais tempo com cortes genéricos. Marque seu horário e
          descubra a diferença de um atendimento premium.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="xl" className="gap-3">
            <MessageCircle className="w-5 h-5" />
            Agendar pelo WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
