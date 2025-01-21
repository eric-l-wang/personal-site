"use client";
import { BounceCards } from "@/components/ui/bounce-cards";
import { useInView } from "@/hooks/useInView";

const Work = () => {
  const [ref, isInView] = useInView(0.2);

  const images = [
    "/images/amazon-logo.jpg",
    "images/advent-logo.png",
    "images/yc-logo.png",
    "images/kips-logo.png",
    "images/culina-logo.png",
  ];

  const transformStyles = {
    desktop: [
      "rotate(5deg) translate(-200px)", // reduced from -250px
      "rotate(0deg) translate(-125px)", // increased from -70px
      "rotate(-5deg)",
      "rotate(5deg) translate(125px)", // increased from 70px
      "rotate(-5deg) translate(250px)", // increased from 150px
    ],
    mobile: [
      "rotate(-3deg) translate(0, -180px)",
      "rotate(-2deg) translate(0, 0px)",
      "rotate(3deg) translate(0, 90px)",
      "rotate(-2deg) translate(0, 180px)",
    ],
  };

  return (
    <div
      ref={ref}
      id="work"
      className="flex flex-col font-azeretMono overflow-hidden min-h-[600px]"
    >
      <div className="flex flex-col justify-start items-center p-4 py-12 relative">
        <h2 className="font-VT323 text-2xl sm:text-5xl md:text-4xl text-center cursor-default z-20">
          a brief history...
        </h2>
        <div className="flex flex-wrap justify-center items-center relative">
          <BounceCards
            images={images}
            containerWidth={800}
            containerHeight={600}
            animationDelay={isInView ? 0.5 : 0}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            startAnimation={isInView}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
