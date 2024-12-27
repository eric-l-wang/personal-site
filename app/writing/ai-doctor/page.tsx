import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building an AI Doctor",
  description: "Postmortem on our attempt at building the doctor of the future",
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 pt-16 pb-24">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-[32px] text-gray-900 dark:text-white mb-4 font-mono cursor-default font-semibold">
            Building an AI Doctor
          </h1>
          <time
            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base"
            suppressHydrationWarning
          >
            Nov 2024
          </time>
        </header>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            As co-founder and head of product and design at Kips Health, I led
            the vision and product development of our flagship product, the AI
            Patient Messenger. Our goal was to offload patient communications
            completely to an LLM, allowing care providers more time to do what
            matters most - actually providing care. This is my postmortem to
            document some of the challenges we faced, why we made specific
            design decisions, and little nuggets for what I think the future of
            AI X Health could look like.
          </p>

          <div className="my-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uc8JxZVgHeYWYZIHzKwoDGc9x1Wuuq.png"
              alt="Dr. Mario holding a medical pill"
              width={800}
              height={450}
              className="rounded-lg w-full"
              priority
            />
          </div>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            So, why AI messaging?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            We spent over a month talking to hundreds of medical professionals
            about their hardest problems. While most medical niches are
            overworked, physical therapists and musculoskeletal (MSK)
            specialists experienced some of the highest degrees of burnout. Over
            50% of these providers experience it.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Then, in 2023, a newly passed billing code added even more burnout
            fuel to MSK providers. This new code reimbursed MSK specialists for
            communicating with their patients outside of the clinic, like
            calling, messaging, or texting. All of a sudden, clinic owners put
            even more pressure on providers to talk to their patients - even
            when they were off hours or outside the clinic.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Now imagine you&apos;re that burned out doctor. We give you a bot
            that handles communication, facading as you. Suddenly, you can check
            in with patients, answer their questions, and collect reimbursements
            - all while chilling on your couch (or whatever doctors do in the
            tiny number of minutes they can rest).
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743cefcd0f8bd0ef8616c9d_giphy.gif"
              alt="Tired doctor saying 'I have work to do'"
              width={400}
              height={225}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            Selling a dream
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Despite our product being the only RTM app (as far as I know of)
            that literally required 0 seconds of time to send messages, clinic
            owners still asked us, "I'm really busy, will I have to spend any
            time on this?"
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            The bar for RTM software as it stands is still very high. So high
            that even full AI messaging might not be worth the documentation,
            setup, and training time for clinics. I do believe one day there
            will be a true AI doctor in our pockets though. One that knows us so
            personally (through tracking our wearable data or knowing our health
            history) that it can proactively consult with us about our health,
            make recommendations, and diagnoses. Accurately too!
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            "Can I really trust your AI to answer as me?"
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Was probably the most popular concern we got during sales demos -
            and for good reason. If the AI decides to tell someone that just
            sprained an ankle that they have cancer, we're all collectively
            screwed.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            We addressed this issue by using another LLM to grade every AI reply
            that would be sent. It would then deterministically decide if the
            message is a go or no go. This grading strategy is still pretty
            popular in the LLM evaluation space. While not 100% safe, it
            assuaged the concerns of most customers.
          </p>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            Integrating with existing dinosaur tech
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            As a 2-person startup (most of the time), you simply don't have the
            bandwidth to engineer a full integration with some obscure health
            record system for one customer. Unfortunately, we found that not
            being able to do that is one of the biggest dealbreakers for
            potential customers in healthcare.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            But that's why you keep searching for that early customer who will
            use your product despite that dealbreaker. On side note, a universal
            healthcare integration API is probably one of the biggest
            opportunities for a startup in this space. So yeah, someone should
            do it.
          </p>

          <div className="my-12 flex justify-center">
            <Image
              src="https://cdn.prod.website-files.com/6743ac235b9a1b0555f1579e/6743cf8ced2b87649dba4b39_giphy.gif"
              alt="Animated GIF related to healthcare technology"
              width={400}
              height={225}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold sm:text-xl text-gray-900 dark:text-white mt-12 mb-4 font-mono">
            So easy your grandma can use it
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Probably a great usability benchmark to hit. Can your grandma, who
            doesn't know how to turn on a TV, still use your product with ease?
            We made it easy. We really tried to.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Instead of setting up a mobile app because we were tEcH STaRTuP
            FOUnDeRs, we just sent texts directly to patients. Least amount of
            friction and something they already use. Except even the habit of
            texting is not well-ingrained among Medicare age users.
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
            If I were to build this again, I would make it voice-based. 80% of
            Americans over 65 still prefer calls to texts. Not everyone is as
            chronically online as Gen Z or alpha.
          </p>
        </div>
      </article>
    </div>
  );
}
