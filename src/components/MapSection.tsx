import { MapPin, Phone, Clock } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Localização
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            Como Chegar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-body font-semibold text-sm uppercase tracking-widest mb-1">Endereço</h3>
                <p className="font-body text-muted-foreground">
                  R. União, 1135 - Poá, SP
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-body font-semibold text-sm uppercase tracking-widest mb-1">WhatsApp</h3>
                <a href="https://api.whatsapp.com/send?phone=5511945379081&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground hover:text-primary transition-colors">(11) 94537-9081</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-body font-semibold text-sm uppercase tracking-widest mb-1">Horário</h3>
                <p className="font-body text-muted-foreground">Seg a Sáb: 9h - 20h</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border border-primary/20 h-72">
            <iframe
              src="https://www.google.com/maps?q=R.%20Uni%C3%A3o%2C%201135%20-%20Po%C3%A1%2C%20SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Gildão Barbershop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
