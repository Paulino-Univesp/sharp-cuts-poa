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
                <p className="font-body text-muted-foreground">(11) 99999-9999</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.6!2d-46.3469!3d-23.5284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMxJzQyLjIiUyA0NsKwMjAnNDguOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
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
