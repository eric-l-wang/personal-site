import PixelTrailDemo from "@/components/PixelTrailDemo";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4">
        <PixelTrailDemo />
      </main>
    </div>
  );
}
