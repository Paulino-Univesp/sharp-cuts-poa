import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M.",
    text: "Melhor barbeiro de Poá! O Gildão entende exatamente o que você quer. Saí de lá me sentindo outro homem.",
  },
  {
    name: "Rafael S.",
    text: "Ambiente top, atendimento premium. Não troco por nada. O fade que ele faz é perfeito.",
  },
  {
    name: "Pedro H.",
    text: "Fui indicado por um amigo e agora sou cliente fiel. Profissionalismo e qualidade de verdade.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            O que Dizem Nossos Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-card border border-primary/10 rounded-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground mb-4 italic leading-relaxed">
                "{t.text}"
              </p>
              <span className="font-body text-xs uppercase tracking-widest text-primary">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
