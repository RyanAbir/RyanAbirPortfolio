type LogoProps = {
  className?: string;
  title?: string;
};

// Geometric "R" lettermark — signal-orange fill.
export default function Logo({ className, title }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="10 4 118 144"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path
        fill="var(--accent)"
        fillRule="evenodd"
        d="M26,16 L72,16 C104,16 104,78 72,78 L112,136 L84,136 L52,86 L52,136 L26,136 Z M52,34 L70,34 C92,34 92,62 62,62 L52,62 Z"
      />
    </svg>
  );
}
