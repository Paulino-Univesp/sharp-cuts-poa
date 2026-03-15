import cutFade from "@/assets/cut-fade.jpg";
import cutSocial from "@/assets/cut-social.jpg";
import cutBeard from "@/assets/cut-beard.jpg";

const images = [
  { src: cutFade, label: "Fade Moderno" },
  { src: cutSocial, label: "Social Texturizado" },
  { src: cutBeard, label: "Barba Alinhada" },
];

const ProofGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Nosso Trabalho
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            Cortes que Falam por Si
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm border border-primary/20 hover:border-primary/50 transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-body text-sm uppercase tracking-widest text-primary">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofGallery;
