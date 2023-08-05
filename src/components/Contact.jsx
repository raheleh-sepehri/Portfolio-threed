import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motions";

const Contact = () => {
  const useForm = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const submitHandler = () => {};

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row  gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 bg-black-100 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={useForm}
          onSubmit={submitHandler}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what is your name?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium focus:ring-1 focus:ring-white"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what is your email?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium focus:ring-1 focus:ring-white"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
              placeholder="what is do you want to say?"
              className="bg-tertiary py-4 px-6 text-white rounded-lg placeholder:text-secondary outline-none border-none font-medium focus:ring-1 focus:ring-white"
            />
          </label>
          <button
            className="py-3 px-8 outline-none w-fit bg-tertiary rounded-xl text-white font-bold shadow-md shadow-primary"
            type="submit"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
