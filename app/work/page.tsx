import Navigation from "@/components/Navigation";
import { BentoWorkGrid, BentoWorkCard } from "@/components/BentoWorkGrid";

const projects = [
  {
    title: "AI Doctor",
    description: "Autonomous patient communication platform",
    link: "https://example.com",
    tags: ["AI", "Healthcare", "Product"],
  },
  {
    title: "Bruh asdf",
    description: "Autonomous patient communication platform",
    link: "https://example.com",
    tags: ["AI", "Healthcare", "Product"],
  },
  {
    title: "ddd",
    description: "Autonomous patient communication platform",
    link: "https://example.com",
    tags: ["AI", "Healthcare", "Product"],
  },
  {
    title: "Cars",
    description: "Autonomous patient communication platform",
    link: "https://example.com",
    tags: ["AI", "Healthcare", "Product"],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-16 font-mono cursor-default">
          Work
        </h1>
        <BentoWorkGrid>
          {projects.map((project, index) => (
            <BentoWorkCard key={project.title} {...project} index={index} />
          ))}
        </BentoWorkGrid>
      </main>
    </div>
  );
}
