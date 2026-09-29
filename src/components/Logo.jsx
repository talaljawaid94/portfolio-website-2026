// The site's logo mark — used in the top nav (small) and the homepage hero
// (large). Edit it here once and both places update.
//
// Currently points at /public/talal-logo.svg. Its own width/height
// attributes (800x800) only set its intrinsic aspect ratio — the `size`
// prop below controls the actual rendered size, so swapping in a
// differently-sized export later won't break anything.
export default function Logo({ size = 40, className }) {
  return (
    <img
      src="/talal-logo.svg"
      width={size}
      height={size}
      className={className}
      alt=""
      style={{ display: "block" }}
    />
  );
}
