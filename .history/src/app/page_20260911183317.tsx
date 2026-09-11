import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Software from "@/components/Software";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}