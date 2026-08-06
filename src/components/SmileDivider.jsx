export default function SmileDivider({ flip = false }) {
  return (
    <svg
      className="smile-divider"
      viewBox="0 0 1120 64"
      preserveAspectRatio="none"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path d="M0,10 C 220,64 900,64 1120,10" />
      <circle cx="180" cy="32" r="3" />
      <circle cx="560" cy="46" r="3" />
      <circle cx="940" cy="32" r="3" />
    </svg>
  );
}
