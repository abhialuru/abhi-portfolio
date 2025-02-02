import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="max-w-4xl h-full mx-auto bg-slate-50 px-5 mb-10">
      <Intro />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
    </div>
  );
}
