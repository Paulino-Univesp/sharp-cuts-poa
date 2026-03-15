import { CheckCircle2, Star } from "lucide-react";

const highlights = [
  "Cortes modernos personalizados para cada rosto",
  "Atendimento premium com hora marcada",
  "Produtos de alta qualidade",
  "Ambiente confortável e sofisticado",
];

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          A Solução
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Conheça o <span className="text-gradient-gold">GILDÃO</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Especialista em cortes masculinos modernos com anos de experiência
          transformando o visual dos homens de Poá e região.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-sm bg-card border border-primary/20 text-left"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="font-body text-sm text-foreground">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="font-body text-sm text-muted-foreground ml-2">
            +500 clientes satisfeitos
          </span>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
