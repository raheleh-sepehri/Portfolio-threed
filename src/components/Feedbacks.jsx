import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";
import { testimonials } from "../constants";

const FeedBackCard = ({
  designation,
  name,
  index,
  company,
  image,
  testimonial,
}) => {
  return (
    <motion.div
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
    >
      <p className="text-white text-[48px] font-bold">"</p>
      <div className="mt-1">
        <p className="text-white text-[18px] tracking-wider ">{testimonial}</p>
        <div className="mt-3 flex gap-1 justify-between items-center ">
          <div className="flex flex-col flex-1">
            <p className="text-white text-[16] font-medium  ">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback By ${name}`} className="rounded-full w-10 h-10 object-cover"/>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What other say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} flex gap-7 flex-wrap -mt-20 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
