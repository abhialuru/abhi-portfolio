import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "abhialuru - portfolio",
  description = "Welcome to my online portfolio. I'm a web developer with expertise in frontend development",
  icons = "/favicon.ico",
}: { title?: string; description?: string; icons?: string } = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    metadataBase: new URL("https://abhialuru.vercel.app"),
  };
}
