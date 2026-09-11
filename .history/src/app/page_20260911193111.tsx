import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Software from "@/components/Software";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Services />
        <Software />
      </main>
    </>
  );
}