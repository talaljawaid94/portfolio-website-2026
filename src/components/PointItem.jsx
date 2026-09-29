// A bullet with a small colored dot and an optional bold "label:" lead-in —
// e.g. "Merchants needed X: they wanted Y." renders the "Merchants needed X"
// part bold. Just pass a plain string if you don't need the split.
export default function PointItem({ text }) {
  const splitAt = text.indexOf(": ");
  if (splitAt === -1) {
    return (
      <li className="point-item">
        <span className="point-dot" />
        {text}
      </li>
    );
  }
  return (
    <li className="point-item">
      <span className="point-dot" />
      <span className="point-label">{text.slice(0, splitAt + 1)}</span>
      {text.slice(splitAt + 1)}
    </li>
  );
}
