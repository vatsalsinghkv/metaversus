'use client';

import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="yPaddings  pl-6 sm:pl-16">
    <motion.div
      // variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center relative z-10">
        <motion.h1 variants={textVariant(1.1)} className="heroHeading">
          metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex justify-center items-center"
        >
          <h1 className="heroHeading">ma</h1>
          <div className="heroDText"></div>
          <h1 className="heroHeading">ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full -mt-[13px] md:-mt-[20px]"
      >
        <div className="absolute hero-gradient h-[300px] w-full -top-[20px] z-0 rounded-tl-[140px]" />

        <img
          src="cover.png"
          alt="cover"
          className="w-full object-cover rounded-tl-[140px] relative z-10 h-[350px] sm:h-[550px]"
        />
      </motion.div>

      <a href="#explore">
        <div className="w-full relative left-10 pr-[60px] -mt-[50px] sm:-mt-[70px] z-10 flex justify-end">
          <img
            src="stamp.png"
            alt="stamp"
            className="w-[100px] h-[100px] sm:w-[155px] sm:h-[155px]"
          />
        </div>
      </a>
    </motion.div>
  </section>
);

export default Hero;
