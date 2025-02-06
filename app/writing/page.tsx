import Navigation from "@/components/Navigation";
import BlogPost from "@/components/BlogPost";

const posts = [
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

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 pt-16 pb-24">
        <h1 className="text-2xl sm:text-[32px] font-bold text-gray-900 dark:text-white mb-16 font-mono cursor-default">
          Writing
        </h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPost
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
