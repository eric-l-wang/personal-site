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
            How Not to Run a Game Studio
          </h1>
          <time className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Oct 2024
          </time>
        </header>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            "Anime Roblox…but for adults!"
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Emmett furrowed his brows and squinted at us. "Yeah, I could buy
            that working." That was it. The founder and CEO of Twitch just told
            us our anime take on a UGC gaming platform was a brilliant idea. Or
            at least that&apos;s how I interpreted it during our YC batch.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;ve always loved games since I was a kid. I think most Gen Z
            boys will admit to being addicted to at least one video game as a
            child (if not still being addicted now). But running a game
            studio/company does not equate to playing games. Someone should have
            told me that earlier…
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            So here&apos;s my postmortem on Advent, the game studio that could
            have been.
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743d51f991206e0aa4a2447_6743d38ad0f8bd0ef8644c41_image%25201.jpeg"
              alt="Illustration related to game development"
              width={800}
              height={450}
              className="rounded-lg w-full"
            />
          </div>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            The Importance of Distribution
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Coming out of YC, my co-founder, Jarrett and I set out to create the
            biggest gaming company of our generation. And it would live on
            Fortnite. For those wondering why, the answer is distribution.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Distribution matters in every industry, but distribution matters in
            gaming. It&apos;s what allowed Zynga to become a multi-billion
            dollar company. It&apos;s why 1 in every 5 iPhones had Angry Birds
            downloaded in 2012 (someone fact check me please). And it&apos;s why
            Roblox, which every other kid plays (this I&apos;m sure about), will
            never ever go away.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            So when Fortnite opened a UGC ecosystem similar to Roblox called
            UEFN, dozens of companies hopped on the platform to access this free
            distribution. These "free" 200M monthly active users is what we
            leveraged to close our entire seed round of fundraising.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            So, what went wrong then?
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            Game Design is Hard
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            On a scale of 100% Epic&apos;s fault to 100% our own fault, this was
            clearly ours.
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743d3e1f51c2a99021dd910_its-not-my-fault-tiger.gif"
              alt="GIF of a tiger saying 'It's not my fault'"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Being software devs, we thought it would translate pretty darn well
            to game development. Obviously (or not), we were wrong. In
            traditional B2B software, getting the software to work is maybe ~70%
            of the battle. In consumer software, it&apos;s maybe ~50% of the
            battle. But in game dev, it&apos;s table stakes*.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            If your game just works without being fun, it&apos;s effectively won
            less than 1% of the battle. Now, one could argue that making a fun
            game is similar to making a good consumer app. I&apos;ve definitely
            taken lessons from game design and migrated them over to other
            projects. But after a year of working on games, I was far from being
            a "great" game designer.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            *Note, I understand that many games these days release as buggy
            messes. Fun and bug-free is not mutually exclusive. A game can have
            lots of bugs, but still be fun. Still, crafting fun is a different
            skillset than just crafting code. We deserve more fun software
            though.{" "}
            <Link
              href="https://www.linkedin.com/posts/siqic_ever-played-rollercoaster-tycoon-you-click-activity-7259987997746438144-S9ck/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              This take by Siqi Chen
            </Link>{" "}
            is certainly how more founders should be thinking about the software
            they build.
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            Platform Lock, like real platform lock
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;ll give you a scenario. We&apos;re about to launch our second
            game. One week before release, everything is ready to go. I wake up
            one morning to publish the final test version onto UEFN and I get
            this error:
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743d51f991206e0aa4a243f_6743d47aa46ec235803e251a_image%25202.jpeg"
              alt="Error message screenshot"
              width={800}
              height={450}
              className="rounded-lg w-full"
            />
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
            "Something went wrong? What the fuck does that mean Epic?"
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;ll tell you what it means. It means Epic updated Fortnite,
            breaking our game, then gave us the most generic error log possible
            to figure it out by the end of the week. We scrambled to figure it
            out.
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743d4a1ed8b367e095342b7_burning-office-spongebob.gif"
              alt="GIF of Spongebob in a burning office"
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            We surfaced every log possible out of UEFN: nothing. We combed the
            forums for other people with this issue: nothing…except a bunch of
            unanswered threads. We even tried making our own threads about the
            issue and only heard crickets from Epic support for over a week!
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Now, this isn&apos;t all on Epic. They have so many UEFN devs to
            deal with on a daily, maybe even hour-to-hour basis. But we had
            poured time and money into our launch and marketing only to be met
            with zero context or support on a game-breaking bug.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            There&apos;s a lesson here though: on these platforms, you give up
            your freedom in exchange for distribution. The markets have decided
            that this tradeoff is usually worth it. That&apos;s why every indie
            game developer sells on Steam and why mobile companies still sell
            their games on Apple&apos;s app store.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            While companies have been started on the backs of others&apos;
            distribution (Zynga on Facebook), it&apos;s far from the ideal setup
            for a company. Even Zynga had to capitulate to Facebook when Zuck
            decided that{" "}
            <Link
              href="https://techcrunch.com/2012/02/01/zynga-makes-up-12-percent-of-facebooks-revenue/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Zynga accounting for 12% of all ad revenues
            </Link>{" "}
            on the platform was bad for business.
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            The meta isn&apos;t meta-ing
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Both us and our investors thought UEFN had wide open space for RPGs,
            puzzle games, casual games, and many other genres. This prediction
            still has potential given the popularity of Blox Fruits (1M CCU) or
            Pet Sim (10B lifetime plays) on Roblox. Our game release strategy
            centered largely around copying existing play patterns that worked
            on other platforms and bringing them into the Fortnite meta.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Unfortunately, in its current state, Fortnite players still boot up
            Fortnite to well…play Fortnite - Battle Royale.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Obvious right?
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            But that&apos;s the thing, we were sure the platform would
            eventually outgrow its Battle Royale roots and branch out into a
            much larger, genderless swathe of games (just like Roblox). Almost
            two years later, and nothing&apos;s changed. The top 20 games in
            Fortnite Creative are still mostly practice maps for Battle Royale
            players to warm up or train for the main Fortnite mode that started
            it all - and I see that changing very, very slowly if at all.
          </p>

          <div className="my-12">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743d51f991206e0aa4a2443_6743d51036f0308d18cd301a_image%25203.jpeg"
              alt="Screenshot of Fortnite game modes"
              width={800}
              height={450}
              className="rounded-lg w-full"
            />
          </div>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            The top 20-30 games as of Nov 2024 are all practice/Battle Royale
            maps except for Lego, Creative, and Havoc Hotel 2 (which I&apos;m
            sure will drop out of the top 30 in no less than a month).
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            The future of platforms for game devs
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Discord Activities. Telegram Games. Snap Games (now defunct).
            Netflix Games. Youtube Playables. Facebook Instant Games.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            LinkedIn Games…(cringe)
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            It seems like every social network decided after COVID that games
            should play a major role in the future of their platform. Most of
            them wave their many millions of DAUs in front of developers as a
            golden ticket to success. Unfortunately, this doesn&apos;t always
            work out.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Much like how players come to Fortnite for Battle Royale, users come
            to Telegram to chat, viewers come to YouTube to view, and I guess
            professionals come to LinkedIn to stalk other professionals? I
            don&apos;t know. But I sure as hell don&apos;t log into LinkedIn to
            play chess.* This is why telling game developers that "we have all
            of these gamers" ready to play your indie game isn&apos;t exactly
            true. Snap Games literally closed down because engagement on games
            was cannibalizing their actual money-maker: people viewing Snaps and
            stories.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            *It&apos;s okay if you log into LinkedIn to play chess.**
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            **Just kidding, it&apos;s not.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Anyways, rant over. This is a living doc, and I hope to update it
            with more thoughts in the future. Maybe, in part 2 I&apos;ll write
            about how I&apos;d actually start a games company now knowing what I
            learned the first time around. Until then, you can challenge me to
            chess on my LinkedIn{" "}
            <Link
              href="https://www.linkedin.com/games/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              here
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
