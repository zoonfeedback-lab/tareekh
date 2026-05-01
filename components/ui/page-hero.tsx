import { OrnamentalDivider } from "@/components/ui/ornamental-divider";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="shell py-10 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <p className="gold-label">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl tracking-[0.1em] text-parchment sm:text-5xl">
          {title}
        </h1>
        <OrnamentalDivider className="py-8" />
        <p className="mx-auto max-w-2xl text-lg leading-8 text-mist/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
