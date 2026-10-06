import heroBg from "@/assets/hero-gildao-cover.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <img
        src={heroBg}
        alt="Cabeleireiro Gildão em Poá, São Paulo"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </section>
  );
};

export default HeroSection;
