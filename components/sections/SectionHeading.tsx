/** Consistent section heading: keeps every section on a single <h2> style. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-pretty text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
