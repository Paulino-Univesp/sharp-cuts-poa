const GratitudeSection = () => {
  return (
    <section className="py-20 px-4 border-t border-primary/10">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
          Agradecimento
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-8">
          Nossa Gratidão
        </h2>

        <div className="space-y-5 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            Antes de tudo, agradecemos a Deus, que tem nos sustentado, guiado nossos passos e abençoado cada etapa dessa caminhada.
          </p>
          <p>
            O <strong className="text-foreground">Cabeleireiro Gildão</strong> é mais do que um lugar para cuidar do visual. É um espaço construído com trabalho, dedicação, respeito, união familiar e, acima de tudo, fé em Deus.
          </p>
          <p>
            Somos gratos a cada cliente que confia em nosso trabalho e faz parte dessa história.
          </p>
          <p>
            Que Deus continue abençoando o nosso caminho,<br />
            <span className="block">nosso trabalho e cada pessoa que passa por aqui.</span>
          </p>
          <p className="font-semibold text-foreground pt-2">
            Que Deus abençoe você e sua família!
          </p>
        </div>

        <p className="font-display text-lg text-primary mt-8">
          — Família Gildão
        </p>
      </div>
    </section>
  );
};

export default GratitudeSection;
