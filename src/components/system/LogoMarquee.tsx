import Image from "next/image";

const logos = [
  { src: "/blackseatech/bst-icon.png", alt: "Black Sea Technology", h: 34 },
  { src: "/partners/Tulip/Tulip White Logo.png", alt: "Tulip Interfaces", h: 30 },
  { src: "/partners/UnitedManufacturingHub/UMH_WhiteTransparent.png", alt: "United Manufacturing Hub", h: 38 },
  { src: "/partners/Litmus/Litmus White Logo.webp", alt: "Litmus", h: 28 },
  { src: "/clients/jazeera-paints.jpg", alt: "Jazeera Paints", h: 34, invert: true },
  { src: "/clients/alimex.jpg", alt: "Alimex", h: 32, invert: true },
  { src: "/clients/tamawira.svg", alt: "Tamawira Enterprise", h: 34, invert: true },
  { src: "/clients/cisgenics.png", alt: "Cisgenics", h: 32 },
  { src: "/clients/jpi-solutions.jpg", alt: "JPI Solutions", h: 34, invert: true },
  { src: "/clients/leading-with-meaning.png", alt: "Leading With Meaning", h: 36 },
];

/** Continuous partner/client logo strip — pauses on hover, static under reduced motion. */
export default function LogoMarquee() {
  return (
    <div className="overflow-hidden border-b border-line bg-ink-900/60 py-6">
      <p className="mb-5 text-center font-mono text-[11px] tracking-[0.3em] text-ink-400">
        BRANDS WE REPRESENT · COMPANIES WE&apos;VE SERVED
      </p>
      {/* Two identical halves; track translates -50% for a seamless loop, so
          all spacing lives inside the repeating cells — none on the track. */}
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {logos.map((l) => (
              <div
                key={`${dup}-${l.alt}`}
                className="mx-10 flex h-12 w-36 shrink-0 items-center justify-center"
              >
                <Image
                  src={l.src}
                  alt={dup === 0 ? l.alt : ""}
                  width={150}
                  height={l.h}
                  style={{
                    objectFit: "contain",
                    maxHeight: `${l.h}px`,
                    maxWidth: "100%",
                    width: "auto",
                    // invert flips dark-on-white logos to light-on-black; screen
                    // blend then drops the black box into the dark band
                    filter: `grayscale(1) ${l.invert ? "invert(1) " : ""}brightness(1.6)`,
                    mixBlendMode: "screen",
                    opacity: 0.8,
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
