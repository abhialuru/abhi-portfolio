import { Button } from "./ui/button";

function Intro() {
  return (
    <main
      id="about"
      className="h-[calc(100dvh-4.5rem)] w-full flex items-center justify-start"
    >
      <div className="max-w-lg h- flex flex-col gap-3">
        <div>
          <p className="text-sm text-gray-700 mb-1">Hello! I'm</p>
          <h1 className="text-5xl font-bold text-gray-800">ALURU ABHILASH</h1>
        </div>
        <p>
          I'm an aspiring frontend developer who loves building responsive web
          apps with modern frontend technologies. Web development is something
          I'm really passionate about, and I enjoy creating websites.
        </p>
        <div className="flex flex-col mt-3">
          <p>I Build projects with :</p>
          <ul className="list-disc ml-3">
            <li>Next.js</li>
            <li>React.js</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Tailwind css</li>
            <li>Shadcn UI</li>
            <li>Database(Mongo DB, Postgres)</li>
          </ul>
        </div>
        <Button variant={"outline"} className="w-60 mt-5">
          <a href="/abhialuru.pdf" download={"/abhialuru.pdf"}>
            Download Resume
          </a>
        </Button>
      </div>
    </main>
  );
}

export default Intro;
