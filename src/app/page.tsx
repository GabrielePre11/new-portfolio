import Education from "@/components/Education";
import GetInTouch from "@/components/GetInTouch";
import GoUpButton from "@/components/GoUpButton";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <GoUpButton />
      <Hero />
      <Technologies />
      <Education />
      <Projects />
      <GetInTouch />
    </>
  );
}
