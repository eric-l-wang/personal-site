import Navigation from "@/components/Navigation";
import DragElementsDemo from "@/components/DragElementsDemo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-8 font-mono cursor-default">
            About Me
          </h1>
          <div className="space-y-6 text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-16">
            <p>
              Hi! I&apos;m Eric, a maker and designer among other things
              currently based in Los Angeles.
            </p>
            <p>
              Lately, I've been consulting at a startup as their first product
              engineer. We recently just raised our Series A. In the past,
              I&apos;ve founded two companies, a game studio and health tech
              startup - completely different worlds but both equally fun to run.
              Shout out to my Y Combinator partners for pushing me explore my
              interests.
            </p>
            <p>
              On the note of interests, I love to dance, explore new cities, and
              build/design cool shit in my spare time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
