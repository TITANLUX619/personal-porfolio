import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LanguageSelector from "@/components/LanguageSelector";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";

export default async function Home({ params: { locale } }: { params: { locale: string }; }) {

  return (
    <main className="relative bg-zinc-950 bg-dot-white/[0.09] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience locale={locale} />
        <Approach />
        <Footer />
      </div>
      <LanguageSelector />
    </main>
  );
}
