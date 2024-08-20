"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import ted1 from '../images/ted1.jpeg';
import ted2 from '../images/ted2.jpeg';
import ted3 from '../images/ted3.jpeg';
import ted5 from '../images/ted5.jpeg';

const images = [ted1, ted2, ted3, ted5];


export function ImagesSliderDemo() {
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <h2 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Management <br/> Interaction <br/> Cell <br/>
      </h2>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Forms Coming Soon</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
