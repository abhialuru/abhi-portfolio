import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Page() {
  return (
    <section className="max-w-4xl h-full mx-auto bg-slate-50 px-5 pt-5 mb-14">
      <div className="w-full flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-800">
          1. CaseCraze - Create your custom phone case.
        </h3>
        <div>
          <p>
            Live Link :{" "}
            <span>
              <a
                target="_blank"
                className="text-blue-700 font-medium hover:text-blue-900"
                href="https://casecraze.vercel.app"
              >
                Link
              </a>
            </span>
          </p>
          <p>
            Github Link :{" "}
            <span>
              <a
                target="_blank"
                className="text-blue-700 font-medium hover:text-blue-900"
                href="https://github.com/abhialuru/casecraze"
              >
                Link
              </a>
            </span>
          </p>
        </div>
        <div>
          <p className="font-bold">Built With :</p>
          <p>
            Next.js, React.js, Typescript, Postgres, Edgestore(Image storage),
            Clerk, Tailwind css, Shadcn UI, DND(drag and drop), Rnd(Resizable
            and Draggable), Razorpay.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/casecraze.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/casecraze-2.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/casecraze-3.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/casecraze-4.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/casecraze-5.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <h3 className="font-bold">Description :-</h3>
          <p>
            This project is a fully responsive web application that allows users
            to personalize their phone cases. Unlike traditional online stores,
            users can upload their own images, adjust the design to fit a phone
            case template, and choose from a variety of colors and materials.
            Once satisfied with the design, they can easily place an order for a
            custom phone case tailored to their preferences.
          </p>
          <p className="font-bold">Key Features :- </p>
          <ul className="list-disc ml-3">
            <li>
              Implemented a drag-and-drop(used dropzone) feature for users to
              upload their images onto a phone case template.
            </li>
            <li>
              Used React RND (Resizable and Draggable) for allowing users to
              adjust, resize and reposition images to customize their design on
              the phone case.
            </li>
            <li>
              Integrated Razorpay payment gateway (in test mode) to handle
              payments for custom phone case orders
            </li>
            <li>
              Built a fully responsive and mobile friendly design using Tailwind
              css and Integrated Shadcn UI for pixel perfect UI components
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
