type GlitchTextProps = {
  children: string;
  className?: string;
};

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <span className={className} aria-label={children} role="text">
      <span className="glitch-text" data-text={children} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
