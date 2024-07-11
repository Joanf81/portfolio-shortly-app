interface HamburgerButtonPros {
  open: boolean;
  handleClick(): void;
  className?: string;
}

export default function HamburgerButton({
  open,
  handleClick,
  className,
}: HamburgerButtonPros) {
  const openClass = open && "open";

  return (
    <button
      type="button"
      className={`block hamburger focus:outline-none ${openClass} ${className}`}
      onClick={handleClick}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}
