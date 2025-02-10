import Navigation from "@/components/Navigation";
import { BentoWorkGrid, BentoWorkCard } from "@/components/BentoWorkGrid";

const projects = [
  {
    title: "The Future of Personalized Healthcare",
    description: "Imagine being in a group chat with all of your doctors",
    link: "https://health-group-chat.vercel.app/",
    tags: ["For fun", "Healthcare", "AI"],
  },
  {
    title: "Fast Invoice Generator",
    description: "Fast invoices with shadcn",
    link: "https://v0-invoice-generator-5wt4aukujng.vercel.app/",
    tags: ["AI", "Healthcare", "Product"],
  },
];

const EmailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    className="fill-white dark:fill-[#0F1117]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
  </svg>
);

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-3 font-mono cursor-default">
          Work
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          Below are some microsites and projects I&apos;ve built - feel free to{" "}
          <a
            href="mailto:ewang036@gmail.com"
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 dark:bg-white text-white dark:text-[#0F1117] hover:bg-gray-600 dark:hover:bg-gray-100 transition-all hover:-translate-y-0.5 mx-1 "
          >
            <EmailIcon />
          </a>{" "}
          me if you&apos;re curious about my industry work!
        </p>
        <BentoWorkGrid>
          {projects.map((project, index) => (
            <BentoWorkCard key={project.title} {...project} index={index} />
          ))}
        </BentoWorkGrid>
      </main>
    </div>
  );
}
