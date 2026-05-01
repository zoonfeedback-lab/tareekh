import Image from "next/image";
import Link from "next/link";
import heroBackdrop from "@/assets/cae1b97e-f441-418c-8586-9f29f74cf8c1.png";
import { featuredArticles } from "@/data/articles";
import { manifestoChapters } from "@/data/manifesto";
import { ArticleCard } from "@/components/ui/article-card";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden py-12 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={heroBackdrop}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-55 brightness-[0.72]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_36%,rgba(215,194,154,0.12),transparent_24%),linear-gradient(to_right,rgba(5,5,5,0.8),rgba(5,5,5,0.42)_40%,rgba(5,5,5,0.68)),linear-gradient(to_bottom,rgba(5,5,5,0.3),rgba(5,5,5,0.7))]" />
        </div>
        <div className="shell relative">
          <div className="absolute -left-8 top-0 hidden h-40 w-40 rounded-full bg-gold/10 blur-3xl lg:block" />
          <p className="gold-label">Archive of memory</p>
          <h1 className="mt-6 font-display text-5xl leading-tight tracking-[0.1em] text-parchment sm:text-6xl lg:text-7xl">
            Tareekh
            <span className="mt-4 block text-4xl tracking-[0.22em] text-goldSoft sm:text-5xl">
              تاریخ
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-mist/88">
            A living manuscript for Islamic heritage, intellectual continuity,
            and the patient recovery of civilizational memory.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/manifesto"
              className="border border-gold px-6 py-3 text-xs uppercase tracking-[0.3em] text-parchment transition hover:bg-gold hover:text-ink"
            >
              Read the manifesto
            </Link>
            <Link
              href="/blog"
              className="border border-lineBright px-6 py-3 text-xs uppercase tracking-[0.3em] text-goldSoft transition hover:border-gold hover:text-parchment"
            >
              Enter the archive
            </Link>
          </div>
        </div>
      </section>

      <OrnamentalDivider className="py-8" />

      <section className="shell grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-8">
          <p className="gold-label">Ideology teaser</p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.08em] text-parchment md:text-4xl">
            History is a mirror before it is a museum.
          </h2>
          <div className="prose-manuscript mt-6">
            <p>
              Our work begins from the belief that Islamic heritage should be
              studied as a living inheritance, not merely an atmosphere of
              elegant ruins.
            </p>
            <p>
              Tareekh cultivates editorial seriousness, disciplined memory, and
              a brotherhood of readers capable of translating admiration into
              stewardship.
            </p>
          </div>
          <Link
            href="/manifesto"
            className="mt-8 inline-flex text-sm uppercase tracking-[0.28em] text-gold hover:text-parchment"
          >
            Continue into the manifesto
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <MediaPlaceholder
            label="Exhibit image"
            className="aspect-[16/11] md:col-span-2"
          />
          {manifestoChapters.slice(0, 4).map((chapter) => (
            <div key={chapter.id} className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-goldSoft">
                Chapter {chapter.chapter}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-[0.06em] text-parchment">
                {chapter.title}
              </h3>
              <p className="mt-4 text-lg leading-7 text-mist/78">
                {chapter.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="gold-label">Latest writings</p>
            <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-parchment">
              Recent entries from the archive
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden text-sm uppercase tracking-[0.28em] text-goldSoft hover:text-parchment md:inline-flex"
          >
            View all essays
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
