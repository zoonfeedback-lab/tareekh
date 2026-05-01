import { articles } from "@/data/articles";
import { ArticleCard } from "@/components/ui/article-card";
import { PageHero } from "@/components/ui/page-hero";

export default function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Essays and notes"
        title="The Archive Journal"
        subtitle="Editorial reflections on institutions, manuscripts, architecture, memory, and the disciplines that make inheritance possible."
      />

      <section className="shell pb-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
