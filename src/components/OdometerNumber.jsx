import useInView from "../hooks/useInView";
import "./OdometerNumber.css";

const DIGITS = "0123456789".split("");

function OdometerDigit({ digit, active }) {
  const target = active ? Number(digit) : 0;
  return (
    <span className="jackpot-digit-cell">
      <span
        className="jackpot-digit-strip"
        style={{ transform: `translateY(-${target * 10}%)` }}
      >
        {DIGITS.map((d) => (
          <span key={d} className="jackpot-digit">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

// Renders a value like "1M+" or "₹120Cr+" — digits roll like a slot machine
// into place, everything else (letters/symbols) renders statically.
export default function OdometerNumber({ value, className = "" }) {
  const [ref, active] = useInView({ threshold: 0.5 });
  const chars = value.split("");

  return (
    <span ref={ref} className={`odometer-number ${className}`}>
      {chars.map((ch, i) =>
        /[0-9]/.test(ch) ? (
          <OdometerDigit key={i} digit={ch} active={active} />
        ) : (
          <span key={i} className="odometer-static">
            {ch}
          </span>
        )
      )}
    </span>
  );
}
