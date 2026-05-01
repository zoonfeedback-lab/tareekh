import Link from "next/link";
import type { Article } from "@/data/articles";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="panel group flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1">
      <div>
        <MediaPlaceholder
          label="Cover image"
          className="mb-5 aspect-[16/10]"
        />
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-goldSoft">
          <span>{article.category}</span>
          <span className="text-muted">/</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl tracking-[0.06em] text-parchment">
          <Link href={`/blog/${article.slug}`} className="hover:text-gold">
            {article.title}
          </Link>
        </h3>
        <p className="mt-4 text-lg leading-7 text-mist/80">{article.excerpt}</p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-line/50 pt-4 text-sm text-goldSoft">
        <span>{article.author.name}</span>
        <span>{article.publishedAt}</span>
      </div>
    </article>
  );
}
