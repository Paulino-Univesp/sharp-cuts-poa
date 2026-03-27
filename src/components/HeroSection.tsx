import heroBg from "@/assets/hero-barbershop.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511932628689?text=Olá! Gostaria de agendar um horário.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-block mb-6 px-4 py-1.5 border border-primary/40 rounded-sm">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">
            Poá, São Paulo
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient-gold">Especialista</span> em Corte{" "}
          <br className="hidden md:block" />
          Masculino Moderno em Poá
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Corte que valoriza seu estilo e sua personalidade.
        </p>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="xl" className="gap-3">
            <MessageCircle className="w-5 h-5" />
            Agendar pelo WhatsApp
          </Button>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
