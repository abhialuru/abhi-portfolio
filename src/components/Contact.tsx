import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-[100dvh] mt-10 flex justify-center items-center"
    >
      <div className="max-w-fit">
        <h1 className="text-5xl text-center text-transparent bg-gradient-to-r from-[#85858f]  via-slate-600 to-[#1e1e22] font-semibold -tracking-tighter bg-clip-text mb-10">
          Contacts
        </h1>
        <div className="max-w-fit flex flex-col lg:flex-row gap-5 mx-auto">
          <Link href="https://www.linkedin.com/in/abhialuru" target="_blank">
            <Button variant={"outline"} className="w-48">
              <LinkedinIcon className="text-blue-400" fill="fill" />
              Linkedin
            </Button>
          </Link>
          <Link href="mailto:alurabhi9346@gmail.com" target="_blank">
            <Button variant={"outline"} className="w-48">
              <Mail />
              Gmail
            </Button>
          </Link>
          <Link href="https://github.com/abhialuru" target="_blank">
            <Button variant={"outline"} className="w-48">
              <GithubIcon />
              Github
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
