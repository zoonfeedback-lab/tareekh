import { manifestoChapters } from "@/data/manifesto";
import { PageHero } from "@/components/ui/page-hero";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export default function ManifestoPage() {
  return (
    <div>
      <PageHero
        eyebrow="Founding document"
        title="The Manifesto of Tareekh"
        subtitle="A reading-room statement on memory, method, stewardship, and the moral burden of inheritance."
      />

      <section className="shell pb-10">
        <div className="grid gap-6 md:grid-cols-[1.5fr_0.9fr]">
          <MediaPlaceholder
            label="Manuscript plate"
            className="aspect-[16/9]"
          />
          <MediaPlaceholder
            label="Architectural detail"
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="shell grid gap-8 pb-16 lg:grid-cols-[280px_1fr]">
        <aside className="panel top-28 h-fit p-6 lg:sticky">
          <p className="gold-label">Chapters</p>
          <nav className="mt-6 space-y-4">
            {manifestoChapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="block border-l border-line pl-4 text-sm uppercase tracking-[0.26em] text-goldSoft transition hover:border-gold hover:text-parchment"
              >
                {chapter.chapter}. {chapter.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="space-y-10">
          {manifestoChapters.map((chapter) => (
            <section key={chapter.id} id={chapter.id} className="panel p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-goldSoft">
                Chapter {chapter.chapter}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-parchment md:text-4xl">
                {chapter.title}
              </h2>
              <blockquote className="mt-8 border-l-2 border-gold pl-6 text-2xl italic leading-9 text-parchment/90">
                {chapter.quote}
              </blockquote>
              <div className="prose-manuscript mt-8">
                {chapter.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <OrnamentalDivider className="pt-10" />
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
