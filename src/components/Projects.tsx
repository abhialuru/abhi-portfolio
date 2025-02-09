import ProjectAbstract from "./ProjectAbstract";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-full flex flex-col gap-10 mt-5 mb-10"
    >
      <h1 className="text-5xl text-center text-transparent bg-gradient-to-r from-[#85858f] via-slate-600 to-[#1e1e22] font-semibold -tracking-tighter bg-clip-text">
        Projects
      </h1>
      <ProjectAbstract
        title="CaseCraze - Create your custom phone case."
        techStack=" Next.js, React.js, Typescript, Postgres, Edgestore(Image storage),
          Clerk, Tailwind css, Shadcn UI, DND(drag and drop), Rnd(Resizable and
          Draggable), Razorpay."
        description="This project is a fully responsive web application that allows users
          to personalize their phone cases. Unlike traditional online stores,
          users can upload their own images, adjust the design to fit a phone
          case template, and choose from a variety of colors and materials. Once
          satisfied with the design, they can easily place an order for a custom
          phone case tailored to their preferences."
        projectLink="https://casecraze.vercel.app"
        imageSrc1="/casecraze.png"
        imageSrc2="/casecraze-2.png"
      />
      <ProjectAbstract
        title="GoShop - Trendy, high quality fashion wear."
        techStack=" Next.js, React.js, Typescript,
          Tailwind css, Shadcn UI, Redux Toolkit, stripe."
        description="A fully responsive e-commerce web app focused on a seamless shopping experience. Implemented cart functionality with Redux Toolkit for state management, enabling users to add, remove, and update items in the cart. Integrated Stripe for payment processing, and for a smooth checkout process. Designed the front-end using TailwindCSS and ShadCN UI for an intuitive and modern UI/UX."
        projectLink="https://goshop-rose.vercel.app"
        imageSrc1="/goshop.png"
        imageSrc2="/go-shop-3.png"
      />
      <ProjectAbstract
        title="Custom Authentication and Payment Integration."
        techStack=" Next.js, React.js, Typescript, Tailwind css, Shadcn UI, neon Postgres, Auth.js, Stripe(with webhook)."
        description="I built this simple and sample project with custom authentication and payment integration. For authentication, provided two login options: credentials-based login and Google authentication. For payments, I integrated Stripe to handle transactions. Both features are fully implemented at a production level."
        projectLink="https://auth-stripe.vercel.app"
        imageSrc1="/auth-stripe.png"
        imageSrc2="/auth-stripe-2.png"
      />
    </section>
  );
}

export default Projects;
