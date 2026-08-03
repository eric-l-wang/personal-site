import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BentoWorkGrid, BentoWorkCard } from "@/components/BentoWorkGrid";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import EmailIcon from "@/components/EmailIcon";

const wanderProducts = [
  {
    title: "Wander.com",
    description:
      "Guest-first travel. Only the best homes. 24/7 concierge.",
    link: "https://www.wander.com/",
    tags: ["Marketplace", "Consumer", "Travel"],
    media: { type: "image" as const, src: "/work/wander.jpg" },
  },
  {
    title: "WanderOS",
    description:
      "Our operating capability turned software product: direct booking sites and listing tools for external hosts.",
    link: "https://app.wander.com/welcome",
    tags: ["0 → 1", "SaaS", "Hosts"],
    media: { type: "image" as const, src: "/work/wanderos.jpg" },
  },
];

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

const essays = [
  {
    title: "Building an AI Doctor",
    date: "Nov 2024",
    excerpt: "Postmortem on our attempt at building the doctor of the future",
    slug: "ai-doctor",
  },
  {
    title: "How Not to Run a Game Studio",
    date: "Oct 2024",
    excerpt:
      "Postmortem on my attempt to fulfill a childhood dream of mine...sorta",
    slug: "game-studio-mistakes",
  },
  {
    title: "On Friendship",
    date: "June 2024",
    excerpt: "Friends, family, and how to grow more time",
    slug: "on-friendship",
  },
];

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
    {children}
  </p>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block rounded-full bg-gray-100 dark:bg-gray-900 px-3 py-1 text-xs font-mono text-gray-600 dark:text-gray-400">
    {children}
  </span>
);

const StatRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8">
    {children}
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <span className="text-sm text-gray-600 dark:text-gray-400">
    <strong className="font-mono text-base font-bold text-gray-900 dark:text-white mr-1.5">
      {value}
    </strong>
    {label}
  </span>
);

const Clip = ({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) => (
  <div
    className={`relative overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900 ${className}`}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900">
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full border-0"
    />
  </div>
);

const gladeCharacters = [
  { src: "/work/glade-hero.mp4", label: "Hero" },
  { src: "/work/glade-deer.mp4", label: "Deer" },
  { src: "/work/glade-erlich.mp4", label: "Erlich" },
];

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="relative pl-5 text-gray-800 dark:text-gray-300 text-lg leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#ff8a8a]">
    {children}
  </li>
);

const timeline: TimelineEntry[] = [
  {
    title: "2025 — Now",
    content: (
      <div>
        <h4 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Wander
        </h4>
        <Body>
          Product lead for Wander.com, our consumer-facing business line and an 8-figure annual GMV product area.
        </Body>

        <StatRow>
          <Stat value="0 → $XXM" label="Annualized GMV for WanderOS in six months" />
          <Stat value="10x" label="Supply growth since joining in July 2025" />
          <Stat value="20+" label="Engineers across 0 → 1 product teams" />
        </StatRow>

        <ul className="flex flex-col gap-3 mb-8">
          <Bullet>
            Shipped V1 of <strong className="font-semibold">WanderOS</strong>,
            which grew from 0 to $XXM in annualized GMV within six months.
          </Bullet>
          <Bullet>
            Led 0 → 1 development across teams of engineers, partnering
            with leadership, customers, designers, and GTM.
          </Bullet>
          <Bullet>
            Increased marketplace home supply by 10x since joining in July 2025. 3x in the past month.
          </Bullet>
        </ul>

        <BentoWorkGrid>
          {wanderProducts.map((product, index) => (
            <BentoWorkCard key={product.title} {...product} index={index} />
          ))}
        </BentoWorkGrid>
      </div>
    ),
  },
  {
    title: "2024 – 2025",
    content: (
      <div>
        <h4 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Glade
        </h4>
        <Body>
          Advised and supported a startup game studio on replacing hand-built asset production with
          an AI pipeline. We used Midjourney and text-to-image for concepting,
          image-to-3D for meshes, and rigging scripts to get characters
          animation-ready.
        </Body>

        <StatRow>
          <Stat value="5x" label="Cheaper per asset" />
          <Stat value="10x" label="Faster than the previous workflow" />
        </StatRow>

        <div className="flex flex-wrap gap-2 mb-8">
          <Chip>Midjourney</Chip>
          <Chip>Text-to-image</Chip>
          <Chip>Image-to-3D</Chip>
          <Chip>Auto-rigging</Chip>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-3">
          {gladeCharacters.map((character) => (
            <Clip
              key={character.src}
              src={character.src}
              className="aspect-square"
            />
          ))}
        </div>
        <Body>
          I concepted and created every character you see in the trailer below.
        </Body>
        <div className="mb-6">
          <YouTubeEmbed id="856XoOHJNrY" title="Glade — game trailer" />
        </div>

        <Body>
          I looked at spinning the pipeline into an agency, and learned
          something useful in the process: I don&apos;t want to run an agency. A vertically integrated AI platform product for animation and game studios is still very much needed however.
        </Body>
      </div>
    ),
  },
  {
    title: "2023 – 2024",
    content: (
      <div>
        <h4 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Culina Health
        </h4>
        <Body>
          Joined as a product engineer and quickly grew into an engineering lead. Built numerous automation initiatives to recapture and grow revenue
          operations.
        </Body>

        <Body>
          Alongside that, some microsites and side projects I&apos;ve built for
          fun:
        </Body>
        <BentoWorkGrid className="mb-10">
          {projects.map((project, index) => (
            <BentoWorkCard key={project.title} {...project} index={index} />
          ))}
        </BentoWorkGrid>

        <h4 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 pt-4">
          Founder ×2
        </h4>
        <Body>
          A game studio and an AI healthcare startup backed by Y Combinator and others.
        </Body>

        <StatRow>
          <Stat value="~$1M" label="Raised in venture capital" />
        </StatRow>

        <ul className="flex flex-col gap-3 mb-8">
          <Bullet>
            Raised ~$1M from Y Combinator, Spark Labs, and angel investors.
          </Bullet>
          <Bullet>
            Took an AI healthcare product from customer discovery through
            design, engineering, launch, and adoption by physical-therapy
            networks.
          </Bullet>
          <Bullet>
            Managed and led across product, user research, marketing, design,
            and engineering functions.
          </Bullet>
          <Bullet>
            Pivoted in from a Fortnite games business with thousands of players
            and minutes played.
          </Bullet>
        </ul>

        <Body>
          I also wrote up what I learned the hard way. Two postmortems and one
          essay that isn&apos;t about work. We need more essays about life!
        </Body>
        <div className="flex flex-col gap-3">
          {essays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/writing/${essay.slug}`}
              className="group rounded-lg bg-gray-50 dark:bg-gray-900 p-4 transition-transform duration-100 hover:scale-[1.01]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-mono font-bold text-gray-900 dark:text-white group-hover:text-[#ff8a8a] transition-colors">
                  {essay.title}
                </h4>
                <span className="shrink-0 text-xs font-mono text-gray-500">
                  {essay.date}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {essay.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Before",
    content: (
      <div>
        <h4 className="font-mono text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Amazon
        </h4>
        <Body>Software engineer for two years.</Body>
      </div>
    ),
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="pb-24">
        <Timeline
          heading="Work"
          description={
            <>
              A running changelog of my work. Feel free to{" "}
              <a
                href="mailto:ewang036@gmail.com"
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 dark:bg-white text-white dark:text-[#0F1117] hover:bg-gray-600 dark:hover:bg-gray-100 transition-all hover:-translate-y-0.5 mx-1 align-middle"
              >
                <EmailIcon />
              </a>{" "}
              me if you&apos;re curious about anything!
            </>
          }
          data={timeline}
        />
      </main>
    </div>
  );
}
