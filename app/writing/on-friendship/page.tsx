import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-[32px] text-gray-900 dark:text-white mb-4 font-mono cursor-default font-semibold">
            On Friendship
          </h1>
          <time className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            June 2024
          </time>
        </header>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Yesterday my dad told me that one of his close friends from college
            had passed away from a heart attack. He hadn&apos;t seen him in
            maybe 10 years. This morning, he got news of another friend who had
            also tragically passed. This time a brain tumor. He wishes he had
            more time with them.
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/674400c625ee4050f366d939_674400c2ba11c189981dd596_AdobeStock_887331252%25201%2520(3).jpeg"
              alt="Illustration of friendship and time"
              width={800}
              height={450}
              className="rounded-lg w-full"
            />
          </div>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            As adults, friendship is a budgeting game
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            That&apos;s what a close friend had said last week. I thought to
            myself, that&apos;s so true. Managing friendships is just a matter
            of allocating time. But, in a society where we all have so many
            priorities, friends are often the first to be dropped from that
            budget.
          </p>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            If you think about it, you might have already spent the majority of
            your time with certain friends. Had a close friend or roommate in
            college that you would see almost every day? Let&apos;s say you live
            on opposite coasts. You see them 5 days a year for the rest of your
            life. It would take you over 30 years to match the amount of time
            you spent with them in just one year of college at that cadence.
          </p>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Moving this logic over to parents and the math gets even more
            concerning. I definitely recommend you check out{" "}
            <Link
              href="https://waitbutwhy.com/2015/12/the-tail-end.html"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Tim Urban&apos;s fun visual blog post
            </Link>{" "}
            on that matter.
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            So how do we budget better? How do we grow time?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Well, unlike a real budget, we can&apos;t actually grow time.
            It&apos;s finite. We&apos;re given a certain amount at birth and
            there&apos;s no way to add more. The only possible way to "add more"
            is by living close to those you want to see. But career, significant
            others, your own kids, or finances still often prevent us from doing
            that.
          </p>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            So I guess we&apos;re back to square one. If your friends and family
            are scattered, you have to budget. But if they&apos;re all in one
            place, then I guess you got lucky. Now you can grow time.
          </p>
        </div>
      </article>
    </div>
  );
}
