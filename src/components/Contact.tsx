import { GithubIcon, LinkedinIcon, LucideIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface LinkButtonTypes {
  href: string;
  name: string;
  Icon: LucideIcon;
}

function LinkButton({ href, name, Icon }: LinkButtonTypes) {
  return (
    <Link href={href} target="_blank">
      <Button variant={"outline"} className="w-48">
        <Icon className="text-blue-400" fill="fill" />
        {name}
      </Button>
    </Link>
  );
}

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
          <LinkButton
            href="https://www.linkedin.com/in/abhialuru"
            name="LinkedIn"
            Icon={LinkedinIcon}
          />
          <LinkButton
            href="mailto:alurabhi9346@gmail.com"
            name="Gmail"
            Icon={Mail}
          />
          <LinkButton
            href="https://github.com/abhialuru"
            name="GitHub"
            Icon={GithubIcon}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
