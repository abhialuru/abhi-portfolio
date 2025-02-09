import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}
