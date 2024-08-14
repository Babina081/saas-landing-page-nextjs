"use client";
import React, { useRef } from "react";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            className="mt-10"
          ></Image>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{ translateY: translateY }}
          ></motion.img>
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
            width={248}
            style={{ translateY: translateY }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
