// Card artwork for the Home case study cards and the AI Experiments cards.
//
// `images` has one entry per breakpoint (phone < 768px, tablet 768-1279px,
// desktop >= 1280px, same as the 340px-tall card box in Home.css). Each entry is
// either a single URL, or an object keyed by pixel density so phones and
// tablets (2x-3x screens) can get a sharper file:
//
//   phone: "/Banner/x/mobile.webp"
//   phone: { "1x": "/Banner/x/mobile.webp", "2x": "/Banner/x/mobile@2x.webp",
//            "3x": "/Banner/x/mobile@3x.webp" }
//
// The browser downloads only the file that fits the screen (so an extra
// @2x/@3x export never slows desktop), lazy-loads cards below the fold, and
// the `alt` text gives search engines and screen readers a description of the
// image, which a CSS background image can't.
const encode = (url) => encodeURI(url); // paths contain spaces, e.g. "AI Experiment"

function toSet(value) {
  if (typeof value === "string") return { src: encode(value), srcSet: undefined };
  const entries = Object.entries(value); // [["1x", url], ["2x", url], ...]
  return {
    src: encode(value["1x"] ?? entries[0][1]),
    srcSet: entries.map(([density, url]) => `${encode(url)} ${density}`).join(", "),
  };
}

export default function CardImage({ images, alt = "", eager = false }) {
  const phone = toSet(images.phone);
  const tablet = toSet(images.tablet);
  const desktop = toSet(images.desktop);
  return (
    <picture>
      <source media="(min-width: 1280px)" srcSet={desktop.srcSet ?? desktop.src} />
      <source media="(min-width: 768px)" srcSet={tablet.srcSet ?? tablet.src} />
      <img
        className="card-img"
        src={phone.src}
        srcSet={phone.srcSet}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
