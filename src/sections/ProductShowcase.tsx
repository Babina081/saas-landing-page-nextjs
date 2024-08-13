import React from "react";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
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
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
          ></Image>
          <Image
            src={tubeImage}
            alt="Tube Image"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
