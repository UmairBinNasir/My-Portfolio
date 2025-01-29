"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useSectionInView } from "@/lib/useInView";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const { ref } = useSectionInView("#contact");
  const [state, handleSubmit] = useForm("xnnjdyqe");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{"Contact Me"}</SectionHeading>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        {/* <label htmlFor="email">Email Address</label> */}
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          id="message"
          name="message"
          placeholder="Your Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65" type="submit" disabled={state.submitting}>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
