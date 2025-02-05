import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectAbstractTypes {
  title: string;
  techStack: string;
  description: string;
  projectLink: string;
  imageSrc1: string;
  imageSrc2: string;
}

function ProjectAbstract({
  title,
  techStack,
  description,
  projectLink,
  imageSrc1,
  imageSrc2,
}: ProjectAbstractTypes) {
  console.log(projectLink);

  return (
    <div className="w-full lg:w-[80%] overflow-hidden mx-auto hover:scale-105 rounded-lg transition-all duration-300 flex flex-col lg:flex-row gap-5 hover:bg-[#ECEFF1] h-[80%] px-5 lg:p-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:justify-around">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <div className="text-gray-700 text-sm tracking-tight">{techStack}</div>
        <p className="text-gray-900 text-sm tracking-tight">
          <span className="font-bold text-gray-900">Description :- </span>
          {description}
        </p>
        <div className="w-full flex lg:block justify-center items-center">
          <Link
            className="px-5 p-3 w-40 bg-white rounded-lg flex justify-around items-center lg:mt-10 lg:ml-10 lg:text-start"
            href={projectLink}
            target="_blank"
          >
            <span>Explore</span>
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-around">
        <div className="w-full shrink-0 h-[45%] border border-gray-200">
          <Image
            className="w-full h-full object-fill"
            src={imageSrc1}
            alt="project images"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full shrink-0 h-[45%] border border-gray-200">
          <Image
            className="w-full h-full object-fill"
            src={imageSrc2}
            alt="project images"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectAbstract;
