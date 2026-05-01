import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main className="pb-20 pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
