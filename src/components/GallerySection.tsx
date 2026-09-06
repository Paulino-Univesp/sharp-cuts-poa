import cutFade from "@/assets/cut-fade.jpg";
import cutSocial from "@/assets/cut-social.jpg";
import cutBeard from "@/assets/cut-beard.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import serviceHydration from "@/assets/service-hydration.jpg";
import serviceEyebrow from "@/assets/service-eyebrow.jpg";
import childCutOneAsset from "@/assets/gildao-corte-infantil-1.jpg.asset.json";
import childCutTwoAsset from "@/assets/gildao-corte-infantil-2.jpg.asset.json";
import childCutThreeAsset from "@/assets/gildao-corte-infantil-3.jpg.asset.json";
import childCutBlondeAsset from "@/assets/gildao-corte-infantil-loiro.jpg.asset.json";

const images = [
  { src: cutFade, alt: "Fade moderno" },
  { src: galleryInterior, alt: "Interior premium" },
  { src: cutSocial, alt: "Social texturizado" },
  { src: serviceHydration, alt: "Tratamento capilar" },
  { src: cutBeard, alt: "Barba alinhada" },
  { src: serviceEyebrow, alt: "Resultado premium" },
  { src: childCutOneAsset.url, alt: "Corte infantil low fade" },
  { src: childCutTwoAsset.url, alt: "Corte infantil em cabelo crespo" },
  { src: childCutThreeAsset.url, alt: "Corte infantil taper fade" },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Galeria
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold">
            Ambiente & Resultados
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-sm aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500 flex items-center justify-center">
                <span className="font-body text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
