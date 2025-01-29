import Image from "next/image";
import React from "react";
import SlideUpAnimation from "../layout/SlideUpAnimation";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Themesflat",
    role: "Developer",
    duration: "May 2023 - Present",
    description:
      "As a Developer at Themesflat, I developed plugin core to product management. Collaborating with a team, I have contributed to creating a alot of wordpress themes that are being sold on the themeforest marketplace for industries: real estate, car dealerships, tour booking.",
    logo: "/images/themesflat.png", // Replace with actual Google logo component/image
  },
  {
    company: "Rikkei",
    role: "Frontend Developer",
    duration: "July 2022 - Mar 2023",
    description:
      "At Rikkei, I served as a Frontend Developer, focusing on the build UI and implementation features of frontend on projects.",
    logo: "/images/logo-rikkei.svg", // Replace with actual YouTube logo component/image
  },
  {
    company: "Genplus Media",
    role: "Fullstack Developer",
    duration: "Mar 2021 - Jun 2022",
    description:
      "I held the role of Fullstack Developer. My responsible for development the content management system, I make some wordpress theme and develop the social network for football.",
    logo: "/images/logo-genplusmedia.png", // Replace with actual Apple logo component/image
  },
];

const Experience = () => {
  return (
    <div
      className="bg-black text-white py-[60px] px-6 md:px-20"
      id="experience"
    >
      <div className="max-w-full mx-0 md:mx-8">
        <SlideUpAnimation>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight text-center mb-5">
            My <span className="font-bold">Experience</span>
          </h2>
        </SlideUpAnimation>
        <SlideUpAnimation>
          <div className="space-y-6 px-0 md:px-6 py-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border border-[#71717A] rounded-[10px] px-2 md:px-6 py-[30px]"
              >
                <div className="flex items-center gap-7 mb-4">
                  <div className="w-8 h-8">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={32}
                      height={32}
                      className=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base md:text-2xl leading-7 font-semibold">
                        {exp.role} at {exp.company}
                      </h3>
                      <span className="text-[#D4D4D8] text-xs md:text-base leading-5">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[#D4D4D8] text-sm md:text-base leading-6">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </SlideUpAnimation>
      </div>
    </div>
  );
};

export default Experience;
