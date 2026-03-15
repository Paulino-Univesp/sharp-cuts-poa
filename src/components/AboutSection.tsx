import galleryInterior from "@/assets/gallery-interior.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="border-2 border-primary/30 rounded-sm overflow-hidden">
            <img
              src={galleryInterior}
              alt="Barbearia Gildão"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/40 rounded-sm" />
        </div>

        <div>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Sobre
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            A Arte de <span className="text-gradient-gold">Cortar Cabelo</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Com mais de 10 anos de experiência no mercado, Gildão se especializou em
              cortes masculinos modernos que valorizam a personalidade de cada cliente.
            </p>
            <p>
              Formado pelas melhores academias de barbearia do Brasil, combina técnicas
              clássicas com as tendências mais atuais do mundo da barbearia internacional.
            </p>
            <p>
              Cada corte é tratado como uma obra de arte, com atenção meticulosa a cada
              detalhe, do degradê perfeito ao acabamento impecável.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <span className="font-display text-3xl font-bold text-gradient-gold">10+</span>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Anos de Experiência
              </p>
            </div>
            <div>
              <span className="font-display text-3xl font-bold text-gradient-gold">500+</span>
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Clientes Satisfeitos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
