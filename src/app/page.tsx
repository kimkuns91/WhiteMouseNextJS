import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <div className="homeWrap">
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
