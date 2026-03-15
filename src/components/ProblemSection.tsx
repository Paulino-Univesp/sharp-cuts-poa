import { XCircle } from "lucide-react";

const problems = [
  "Barbeiros que não entendem o que você quer",
  "Cortes genéricos que não valorizam seu rosto",
  "Falta de atenção aos detalhes e acabamento",
  "Ambiente desconfortável e sem higiene",
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
          O Problema
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Cansado de Cortes
          <span className="text-secondary"> Sem Personalidade?</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Muitos homens passam por frustrações toda vez que sentam na cadeira do barbeiro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-sm bg-background border border-secondary/20 text-left"
            >
              <XCircle className="w-5 h-5 text-secondary shrink-0" />
              <span className="font-body text-sm text-muted-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
