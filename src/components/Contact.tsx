import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl h-full mx-auto bg-slate-50 px-5 pb-7 pt-10 mb-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Contact{" "}
        <span className="text-gray-600 font-normal underline underline-offset-2">
          me
        </span>
      </h1>
      <div className="max-w-xl mx-auto gap-3 flex flex-col lg:flex-row justify-between items-center">
        <a href="https://www.linkedin.com/in/abhialuru" target="_blank">
          <Button variant={"outline"} className="px-14">
            <LinkedinIcon className="text-blue-400" fill="fill" />
            Linkedin
          </Button>
        </a>
        <a href="mailto:alurabhi9346@gmail.com" target="_blank">
          <Button variant={"outline"} className="px-14">
            <Mail />
            Gmail
          </Button>
        </a>
        <a href="https://github.com/abhialuru" target="_blank">
          <Button variant={"outline"} className="px-14">
            <GithubIcon />
            Github
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
