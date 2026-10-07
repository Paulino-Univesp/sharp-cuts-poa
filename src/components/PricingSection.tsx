const prices = [
  { service: "Corte Masculino", price: "R$ 35" },
  { service: "Corte + Barba", price: "R$ 60" },
  { service: "Sobrancelha Masculina", price: "R$ 20" },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Investimento
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            Tabela de Preços
          </h2>
        </div>

        <div className="space-y-0">
          {prices.map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 border-b border-primary/10 last:border-0"
            >
              <span className="font-body text-base text-foreground">{p.service}</span>
              <span className="font-display text-xl font-bold text-primary">{p.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-muted-foreground mt-8">
          * Valores sujeitos a alteração. Consulte para combos especiais.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
