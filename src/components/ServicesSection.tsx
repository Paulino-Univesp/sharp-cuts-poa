import { Scissors, SparkleIcon, Droplets, Palette, Eye, Wind } from "lucide-react";

const services = [
  { icon: Scissors, title: "Corte Masculino", desc: "Fade, social moderno, undercut e mais" },
  { icon: SparkleIcon, title: "Corte + Barba", desc: "Combo completo com acabamento premium" },
  { icon: Droplets, title: "Hidratação Capilar", desc: "Tratamento profundo para cabelos saudáveis" },
  { icon: Palette, title: "Pigmentação de Barba", desc: "Preenchimento natural e uniforme" },
  { icon: Eye, title: "Sobrancelha Masculina", desc: "Design limpo e natural" },
  { icon: Wind, title: "Progressiva Masculina", desc: "Alinhamento e redução de volume" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-6 bg-card border border-primary/10 rounded-sm hover:border-primary/40 transition-all duration-500"
            >
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
