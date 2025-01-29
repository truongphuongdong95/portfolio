import {
  AngularIcon,
  BootstrapIcon,
  CSSIcon,
  GitIcon,
  HTMLIcon,
  JqueryIcon,
  JSIcon,
  MUIIcon,
  NextJSIcon,
  PHPIcon,
  ReactJSIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
  WordpressIcon,
} from "public/icons";
import SlideUpAnimation from "../layout/SlideUpAnimation";

const skills = [
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "Jquery", icon: <JqueryIcon /> },
  { name: "HTML", icon: <HTMLIcon /> },
  { name: "CSS", icon: <CSSIcon /> },
  { name: "Bootstrap", icon: <BootstrapIcon /> },
  { name: "React.js", icon: <ReactJSIcon /> },
  { name: "TypeScript", icon: <TypescriptIcon /> },
  { name: "Next.js", icon: <NextJSIcon /> },
  { name: "Angular", icon: <AngularIcon /> },
  { name: "Tailwinds CSS", icon: <TailwindIcon /> },
  { name: "Material UI", icon: <MUIIcon /> },
  { name: "Redux", icon: <ReduxIcon /> },
  { name: "GIT", icon: <GitIcon /> },
  { name: "PHP", icon: <PHPIcon /> },
  { name: "Wordpress", icon: <WordpressIcon /> },
  // Add more skills
];

const Skills = () => {
  return (
    <section className="py-14 px-6 md:px-20" id="skills">
      <div className="max-w-full mx-auto">
        <SlideUpAnimation>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight text-center mb-12">
            My <span className="font-bold">Skills</span>
          </h2>
        </SlideUpAnimation>
        <SlideUpAnimation className="@container">
          <div className="grid mobile-xs:grid-cols-1 mobile-sm:grid-cols-2 md:grid-cols-auto-fit gap-4 md:gap-x-14 md:gap-y-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  background:
                    "linear-gradient(to left, white 50%, black 50%) right",
                }}
                className="w-40 h-40 md:w-[186px] md:h-[186px] flex flex-col items-center justify-center p-6 bg-white rounded shadow-sm border-2 border-[#000] cursor-pointer transition-all duration-500 ease-out !bg-[length:200%] hover:!bg-left hover:text-white justify-self-center lg:justify-self-start"
              >
                <div className="w-12 h-12 mb-4">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
};

export default Skills;
