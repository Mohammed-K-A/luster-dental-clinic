import Badge from "./Badge";

function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="mb-14 text-center">

      {badge && <Badge>{badge}</Badge>}

      <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-[var(--text)] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-light)]">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;