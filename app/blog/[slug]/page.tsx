import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { ArticleCard } from "@/components/ui/article-card";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((entry) => entry.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((entry) =>
    article.relatedSlugs.includes(entry.slug)
  );

  return (
    <div>
      <section className="shell py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <MediaPlaceholder
            label="Hero banner"
            className="mb-8 aspect-[16/8]"
          />
          <p className="gold-label">{article.category}</p>
          <h1 className="mt-4 font-display text-4xl tracking-[0.08em] text-parchment md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-mist/86">
            {article.heroNote}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-line/60 py-4 text-sm text-goldSoft">
            <span>{article.author.name}</span>
            <span>{article.author.role}</span>
            <span>{article.publishedAt}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="shell pb-16">
        <article className="panel mx-auto max-w-4xl p-8 md:p-12">
          <div className="prose-manuscript">
            <p className="text-2xl italic text-parchment/90">{article.excerpt}</p>
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <OrnamentalDivider className="py-10" />

          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-4">
              <MediaPlaceholder
                label="Author"
                className="h-16 w-16 shrink-0"
                innerClassName="inset-2 rounded-full"
              />
              <div>
                <p className="uppercase tracking-[0.26em] text-goldSoft">Author</p>
                <p className="mt-2 text-lg text-parchment">{article.author.name}</p>
                <p className="text-mist/75">{article.author.role}</p>
              </div>
            </div>
            <Link
              href="/blog"
              className="border border-lineBright px-5 py-3 text-xs uppercase tracking-[0.3em] text-goldSoft transition hover:border-gold hover:text-parchment"
            >
              Back to archive
            </Link>
          </div>
        </article>
      </section>

      <section className="shell pb-16">
        <div className="mb-8">
          <p className="gold-label">Related readings</p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-parchment">
            Continue the thread
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((entry) => (
            <ArticleCard key={entry.slug} article={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
