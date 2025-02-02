"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [openSheet, SetOpenSheet] = useState(false);

  return (
    <nav className="max-w-4xl p-3 mx-auto h-15 text-sm bg-slate-50 border-b border-slate-300 sticky top-0">
      <div className="w-full h-full flex items-center justify-between lg:justify-around">
        <Link href="/">Home</Link>
        <div className="hidden lg:flex gap-10 items-center">
          <a href="#about">About</a>
          <div className="h-1 w-1 rounded-full bg-black" />
          <a href="#projects">Projects</a>
          <div className="h-1 w-1 rounded-full bg-black" />
          <a href="#contact">Contact</a>
        </div>
        <Sheet open={openSheet} onOpenChange={() => SetOpenSheet(!openSheet)}>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[80%] h-dvh">
            <SheetHeader>
              <SheetTitle>
                <a onClick={() => SetOpenSheet(!openSheet)} href="#about">
                  About
                </a>
              </SheetTitle>
              <SheetTitle>
                <a onClick={() => SetOpenSheet(!openSheet)} href="#projects">
                  Projects
                </a>
              </SheetTitle>
              <SheetTitle>
                <a onClick={() => SetOpenSheet(!openSheet)} href="#contact">
                  Contact
                </a>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
