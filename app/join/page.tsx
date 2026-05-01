"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Application"
        title="Join the Circle"
        subtitle="A quiet place for readers, researchers, and builders who believe memory should become stewardship."
      />

      <section className="shell pb-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel p-8">
            <MediaPlaceholder
              label="Application visual"
              className="mb-6 aspect-[4/3]"
            />
            <p className="gold-label">Who this is for</p>
            <h2 className="mt-4 font-display text-3xl tracking-[0.08em] text-parchment">
              Membership is a discipline before it is a status.
            </h2>
            <div className="prose-manuscript mt-6">
              <p>
                We welcome applicants who value reading, care with language,
                seriousness of method, and a desire to contribute to the moral
                recovery of heritage.
              </p>
              <p>
                This is a frontend-only application flow for the demo, so your
                submission will produce a local success state rather than a
                network request.
              </p>
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            {!submitted ? (
              <form
                className="space-y-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="gold-label block">Name</label>
                  <input
                    required
                    className="mt-3 w-full border-b border-line bg-transparent px-0 py-3 text-lg text-parchment outline-none placeholder:text-muted focus:border-gold"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="gold-label block">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-3 w-full border-b border-line bg-transparent px-0 py-3 text-lg text-parchment outline-none placeholder:text-muted focus:border-gold"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="gold-label block">Ideological statement</label>
                  <textarea
                    required
                    rows={7}
                    className="mt-3 w-full border-b border-line bg-transparent px-0 py-3 text-lg text-parchment outline-none placeholder:text-muted focus:border-gold"
                    placeholder="Tell us why the preservation of Islamic heritage matters to you."
                  />
                </div>
                <button
                  type="submit"
                  className="border border-gold px-6 py-3 text-xs uppercase tracking-[0.3em] text-parchment transition hover:bg-gold hover:text-ink"
                >
                  Submit application
                </button>
              </form>
            ) : (
              <div className="py-12">
                <p className="gold-label">Submission received</p>
                <h2 className="mt-4 font-display text-3xl tracking-[0.08em] text-parchment">
                  Your application has been entered into the ledger.
                </h2>
                <p className="mt-6 max-w-2xl text-xl leading-8 text-mist/85">
                  In this demo, no backend is connected, but the success state
                  mirrors a polished application confirmation for the finished
                  product.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
