import React from "react";
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook } from "lucide-react"; // icons

function Contact() {
  return (
    <section
      id="contact"
      className="bg-stone-900 min-h-[100vh] flex items-center justify-center px-6"
    >
      <div className="bg-stone-300/10 w-350 h-[90vh] mx-auto my-auto px-6 py-10 rounded-3xl">
        {/* Heading */}
        <h2 className="text-6xl font-bold text-white mb-10 text-center">
          Contact
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-10 h-full">

          {/* Left Side - Info */}
          <div className="flex flex-col gap-6 text-white ">
            {/* Photo + Name */}
            <div className="flex flex-col items-center text-center gap-4">
              <img
                src="./ME.jpg" // 👉 replace with your photo path
                alt="Arnab Dutta"
                className="w-48 h-48 rounded-full border-4 border-stone-600/50 shadow-lg object-cover"
              />
              <h3 className="text-3xl font-bold">Arnab Kumar Dutta</h3>
              <p className="text-lg leading-relaxed text-justify mx-12">
                Let’s connect! Whether it’s about projects, collaborations, or
                just a chat — feel free to reach out.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-4 justify-center">

              <a
                href="https://github.com/arnabdutta03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-xl hover:scale-110  transition"
              >
                <Github size={28} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/arnabkumardutta09/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-xl hover:scale-110  transition"
              >
                <Linkedin size={28} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/nox_arnab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-xl hover:scale-110  transition"
              >
                <Instagram size={28} className="text-white" />
              </a>
              <a
                href="https://x.com/nox_arnab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-xl hover:scale-110  transition"
              >
                <Twitter size={28} className="text-white" />
              </a>
              <a
                href="https://x.com/nox_arnab"
                target="_blank"
                rel="noopener noreferrer"
                className="resize-none p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 drop-shadow-xl hover:scale-110  transition"
              >
                <Facebook size={28} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="flex flex-col gap-4 items-center">
            <div className="w-full bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-stone-600/40 shadow-lg flex flex-col gap-6">
              {/* Email */}
              <div className="flex items-center gap-3 justify-center">
                <span className="text-2xl font-semibold">
                  Contact me:
                </span>
                <span className="text-2xl font-light">
                  arnabdutta0x0@gmail.com
                </span>
                <Mail size={20} className="text-white mt-1" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-2xl bg-stone-700/60 border-2 border-stone-600/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-stone-900 font-bold rounded-2xl hover:bg-gray-300 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
