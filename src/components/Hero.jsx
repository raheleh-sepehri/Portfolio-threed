import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto h-screen">
      <div
        className={`${styles.paddingX} absolute mx-auto max-w-7xl inset-0 top-[120px] flex items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Raheleh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope web applications , user{" "}
            <br className="sm:block hidden" /> interface and 3D visuals
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:-bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="flex justify-center p-2 items-start w-[35px] h-[64px] rounded-3xl border-4 border-secondary   ">
            <motion.div
              transition={{
                duration: 1.5,
                repeat:Infinity,
                repeatType: "loop",
              }}
              animate={{ y: [0, 32, 0] }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
