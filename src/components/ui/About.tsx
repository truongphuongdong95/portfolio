import React from "react";
import Image from "next/image";
import SlideUpAnimation from "../layout/SlideUpAnimation";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Illustration Column */}
        <SlideUpAnimation>
          <div className="relative w-full max-w-[400px] mx-auto">
            <div className="aspect-square relative border-2 border-black rounded-lg p-4">
              <Image
                src="/images/about.png" // Make sure to add your illustration to public folder
                alt="Developer"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </SlideUpAnimation>

        {/* Content Column */}
        <div className="space-y-6">
          <SlideUpAnimation>
            <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-5">
              About <span className="font-bold">Me</span>
            </h2>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a specializes in Frontend developer. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>

              <p>
                I began my journey as a web developer in 2021, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, over 3 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as React.js, Next.js, TypeScript,
                Tailwindcss and much more.
              </p>
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
