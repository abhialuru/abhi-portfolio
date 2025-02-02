import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function page() {
  return (
    <section className="max-w-4xl h-full mx-auto bg-slate-50 px-5 pt-5 mb-14">
      <div className="w-full flex flex-col gap-3">
        <h3 className="text-xl font-bold text-gray-800">
          2. GoShop - Trendy, high quality fashion wear.
        </h3>
        <div>
          <p>
            Live Link :{" "}
            <span>
              <a
                target="_blank"
                className="text-blue-700 font-medium hover:text-blue-900"
                href="https://goshop-rose.vercel.app"
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
                href="https://github.com/abhialuru/e-commerce"
              >
                Link
              </a>
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="w-full flex items-center justify-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/go-shop.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/go-shop-2.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/go-shop-3.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/go-shop-4.png"
                  alt="photo"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="w-full h-full object-fit"
                  src="/go-shop-5.png"
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
            A fully responsive e-commerce web app focused on a seamless shopping
            experience. Implemented cart functionality with Redux Toolkit for
            state management, enabling users to add, remove, and update items in
            the cart. Integrated Stripe for payment processing, and for a smooth
            checkout process. Designed the front-end using TailwindCSS and
            ShadCN UI for an intuitive and modern UI/UX
          </p>
          <p className="font-bold">Key Features :- </p>
          <ul className="list-disc ml-3">
            <li>
              Responsive and mobile-friendly design was achieved with Tailwind
              css and shadcn ui, optimized for all screens.
            </li>
            <li>
              Shopping cart functionality with Redux Toolkit for global state
              management.
            </li>
            <li>
              Stripe Payment Integration for a smooth checkout experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default page;
