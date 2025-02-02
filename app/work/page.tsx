import Navigation from "@/components/Navigation";
import WorkCard from "@/components/WorkCard";

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
      <main className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-16 font-mono cursor-default">
          Work
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <WorkCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
