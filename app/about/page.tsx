import Image from "next/image";
import Navigation from "@/components/Navigation";
import DragElementsDemo from "@/components/DragElementsDemo";
import EmailIcon from "@/components/EmailIcon";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <div className="max-w-3xl mx-auto relative">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 font-mono cursor-default">
            About Me
          </h1>
          <div className="space-y-6 text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-16">
            <p>
              Hi! I&apos;m Eric! I'm a founder, product builder, and currently look after{" "}
              <a
                href="https://www.wander.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-gray-400 hover:text-[#ff8a8a] hover:decoration-[#ff8a8a] transition-colors"
              >
                Wander.com
              </a>
              .
            </p>
            <p>
              Before that I founded Kips Health, an AI healthcare startup backed by Y Combinator. I'm interested
              in startups, interior design, tennis, and travel.

            </p>
            <p>
              If you&apos;re interested in working together,{" "}
              <a
                href="mailto:ewang036@gmail.com"
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-600 dark:bg-white text-white dark:text-[#0F1117] hover:bg-gray-600 dark:hover:bg-gray-100 transition-all hover:-translate-y-0.5 mx-1 align-middle"
              >
                <EmailIcon />
                <span className="sr-only">Email</span>
              </a>{" "}
              me or connect on{" "}
              <a
                href="https://www.linkedin.com/in/eric-l-wang/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-all hover:-translate-y-0.5 mx-1 align-middle"
              >
                <Image
                  src="/linkedin.png"
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                <span className="sr-only">LinkedIn</span>
              </a>
              .
            </p>
          </div>
          <Image
            src="/images/about-me.jpg"
            alt="Eric standing in a sunlit living room, looking up"
            width={1600}
            height={1200}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </main>
    </div>
  );
}
