import { FacebookIcon, GithubIcon, LinkedinIcon } from "public/icons";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-around md:justify-start gap-8 mt-8">
      <a
        href="https://www.facebook.com/dong.truong.94/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 border-2 border-[#000] rounded hover:text-white hover:bg-black transition-all duration-500"
      >
        <FacebookIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer" />
      </a>
      <a
        href="https://github.com/truongphuongdong95"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 border-2 border-[#000] rounded hover:text-white hover:bg-black transition-all duration-500"
      >
        <GithubIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 border-2 border-[#000] rounded hover:text-white hover:bg-black transition-all duration-500"
      >
        <LinkedinIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer" />
      </a>

      {/* Add more social links as needed */}
    </div>
  );
};

export default SocialLinks;
