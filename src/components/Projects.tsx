import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <section id="projects" className="w-full py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">
        Projects{" "}
        <span className="text-gray-600 font-normal underline underline-offset-2">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-600 text-sm mb-10">
        Click on the Project Image.
      </p>

      <div className="grid grid-flow-row lg:grid-cols-2 gap-5 gap-y-5 w-full h-full place-content-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-sans">
            1.CaseCraze - create custom phone case
          </p>

          <div className="border h-60 border-gray-700 hover:border-4 hover:bg-green-500 rounded-md overflow-hidden">
            <Link href="/casecraze">
              <Image
                className="w-full h-full object-fill  "
                src="/casecraze.png"
                alt="casecraze"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-sans">
            2.GoShop - Trendy, high quality fashion wear.
          </p>
          <div className="border h-60 border-gray-700 hover:border-4 hover:bg-green-500 rounded-md overflow-hidden">
            <Link href="/goshop">
              <Image
                className="w-full h-full object-fill  "
                src="/goshop.png"
                alt="goshop"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-md font-bold">
            3.Custom Authentication and Payment Integration
          </h1>
          <div className="text-sm">
            <p className="font-bold">Description :- </p>
            <p>
              I've developed this simple and sample project, demonstrating my
              ability to implement custom authentication and payment
              integration.
            </p>
            <div>
              <p>Key features :-</p>
              <ul className="list-disc ml-3">
                <li>
                  Authentication: Implemented two login options:
                  credentials-based login and Google authentication.
                </li>
                <li>
                  Payment Integration: Integrated Stripe for transaction
                  handling. Both features are fully Implemented at a
                  production-level.
                </li>
              </ul>
              <div className="ml-3">
                <p>
                  Live Link :{" "}
                  <span>
                    <a
                      target="_blank"
                      className="text-blue-700 font-medium hover:text-blue-900"
                      href="https://auth-stripe-five.vercel.app"
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
                      href="https://github.com/abhialuru/auth-stripe"
                    >
                      Link
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border h-60 border-gray-700 hover:border-4 hover:bg-green-500 rounded-md overflow-hidden">
          <a href="https://auth-stripe-five.vercel.app" target="_blank">
            <Image
              className="w-full h-full object-fill  "
              src="/auth-stripe.png"
              alt="Auth & Stripe"
              width={200}
              height={200}
            />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Projects;
