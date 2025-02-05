import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

function Intro() {
  return (
    <main
      id="about"
      className="w-full h-[100dvh] flex items-center lg:items-end justify-center text-center px-3 lg:p-20"
    >
      <div className="max-w-2xl flex flex-col gap-5 items-center justify-center">
        <h1 className="text-5xl text-transparent bg-gradient-to-r from-[#85858f]  via-slate-600 to-[#1e1e22] font-semibold -tracking-tighter bg-clip-text">
          hi! i'm aluru abhilash
        </h1>
        <p className="text-center flex gap-2 items-center justify-center text-gray-600">
          <MapPin className="size-4" />
          <span>Hyderabad, India.</span>
        </p>
        <p className="text-center text-gray-600">
          I'm an aspiring frontend developer who loves building responsive web
          apps with modern frontend technologies. Web development is something
          I'm really passionate about, and I enjoy creating websites.
        </p>
        <Button variant={"outline"}>
          <a href="/abhialuru.pdf" download={"/abhialuru.pdf"}>
            Download Resume
          </a>
        </Button>
      </div>
    </main>
  );
}

export default Intro;
