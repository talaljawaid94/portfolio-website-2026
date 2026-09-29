// The corner-bracket "target lock" highlight used around one keyword in
// each big heading across the site.
export default function BracketWord({ children }) {
  return (
    <span className="bracket-word">
      <span>{children}</span>
    </span>
  );
}
