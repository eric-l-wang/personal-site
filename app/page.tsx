import PixelTrailDemo from "@/components/PixelTrailDemo";
import Navigation from "@/components/Navigation";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F1117]">
      <Navigation />
      <main className="max-w-5xl mx-auto">
        <PixelTrailDemo />
        {/* <Work /> */}
      </main>
    </div>
  );
}
