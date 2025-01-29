import Image from "next/image";
import SocialLinks from "./SocialLinks";
import WavyTextAnimation from "../layout/WavyTextAnimation";
import SlideDownAnimation from "../layout/SlideDownAnimation";
import SlideUpAnimation from "../layout/SlideUpAnimation";

const Hero = () => {
  return (
    <section className="relative z-10 min-h-[716px] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20">
      <div className="max-w-2xl">
        <SlideDownAnimation delay={0.1} duration={0.25}>
          <p className="text-3xl md:text-6xl font-normal !leading-tight mb-5">
            Hello I&apos;m{" "}
            <span className="text-red-600 font-bold">
              <WavyTextAnimation text="DDoong." delay={0.3} duration={0.1} />
            </span>
          </p>
        </SlideDownAnimation>
        <SlideDownAnimation delay={0.1} duration={0.25}>
          <p className="text-3xl md:text-6xl font-normal !leading-tight mb-5">
            <span className="text-red-600 font-bold">
              <WavyTextAnimation text="Frontend" delay={0.3} duration={0.1} />
            </span>{" "}
            Developer
          </p>
        </SlideDownAnimation>
        <SlideDownAnimation delay={0.1} duration={0.25}>
          <p className="text-3xl md:text-6xl font-normal !leading-tight mb-8">
            Live in{" "}
            <span className="text-red-600 font-bold">
              <WavyTextAnimation text="DaNang" delay={0.3} duration={0.1} />
            </span>
          </p>
        </SlideDownAnimation>
        <SlideUpAnimation>
          <p className="text-[#71717A] text-base font-normal leading-6">
            My name is Đông. I'm a Frontend Developer. I am still trying to
            improve myself and perfecting yourself.
          </p>
        </SlideUpAnimation>
        <SlideUpAnimation>
          <SocialLinks />
        </SlideUpAnimation>
      </div>
      <SlideUpAnimation className="absolute top-0 right-0 -z-[1]">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          width={600}
          height={400}
        />
      </SlideUpAnimation>
    </section>
  );
};

export default Hero;
