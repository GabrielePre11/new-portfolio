import GoUpButton from "@/components/atoms/go-up-button/GoUpButton";
import GetInTouch from "@/components/organisms/contact-section/GetInTouch";
import Education from "@/components/organisms/education-section/Education";
import Hero from "@/components/organisms/hero-section/Hero";
import Projects from "@/components/organisms/projects-section/Projects";
import Technologies from "@/components/organisms/technologies-section/Technologies";

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
