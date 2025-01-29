import { FacebookIcon, GithubIcon, LinkedinIcon } from "public/icons";
import React from "react";
import SlideUpAnimation from "../layout/SlideUpAnimation";

const Contact = () => {
  return (
    <div
      className="bg-black text-white py-[60px] px-6 md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14"
      id="contact"
    >
      {/* Form Column */}
      <SlideUpAnimation className="order-2 md:order-1">
        <div className="max-w-[500px] space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 bg-black border border-white text-zinc-500 text-base font-normal rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-white text-zinc-500 text-base font-normal rounded"
          />

          <input
            type="url"
            placeholder="Your website (If exists)"
            className="w-full p-3 bg-black border border-white text-zinc-500 text-base font-normal rounded"
          />

          <textarea
            placeholder="How can I help?*"
            rows={6}
            className="w-full p-3 bg-black border border-white text-zinc-500 text-base font-normal rounded"
          />

          <div className="flex gap-4 items-center justify-between">
            <button className="bg-black text-white px-6 py-3 rounded border border-white hover:bg-white hover:text-black transition-colors duration-500">
              Get In Touch
            </button>

            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 border bg-black border-white rounded hover:bg-white hover:text-black transition-colors duration-500"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 border bg-black border-white rounded hover:bg-white hover:text-black transition-colors duration-500"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 border bg-black border-white rounded hover:bg-white hover:text-black transition-colors duration-500"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </SlideUpAnimation>
      {/* Content Column */}
      <SlideUpAnimation className="order-1 md:order-2">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            Let's{" "}
            <span className="text-black font-extrabold font-outline-white-3 font-sans px-1">
              talk
            </span>{" "}
            for
            <br />
            Something special
          </h2>

          <p className="text-zinc-500">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          <div className="space-y-2">
            <p className="text-xl">dongtruong744@gmail.com</p>
            <p className="text-xl">0779450205</p>
          </div>
        </div>
      </SlideUpAnimation>
    </div>
  );
};

export default Contact;
