function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] hover:-translate-y-0.5",

    secondary:
      "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",

    outline:
      "border border-slate-300 bg-white text-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)]",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;