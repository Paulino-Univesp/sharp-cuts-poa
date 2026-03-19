import { Instagram, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient-gold">Cabeleireiro GILDÃO</h3>
            <p className="font-body text-xs text-muted-foreground mt-1">
              "Deus em primeiro lugar."
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram">
              
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5511945379081"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp">
              
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary/5 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2025 Gildão Barbershop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;