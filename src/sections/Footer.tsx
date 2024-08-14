import React from "react";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    // <footer className="bg-black text-[#BCBCBC] text-sm py-10">
    //   <div className="container mx-auto">
    //     <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
    //       <Image src={logo} alt="logo" height={40} className="relative"></Image>
    //     </div>
    //     <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6 ">
    //       <a href="#">About</a>
    //       <a href="#">Features</a>
    //       <a href="#">Customers</a>
    //       <a href="#">Pricing</a>
    //       <a href="#">Help</a>
    //       <a href="#">Careers</a>
    //     </nav>
    //     <div className="flex justify-center gap-6 mt-6">
    //       <Image
    //         src={SocialX}
    //         alt="Social X"
    //         height={40}
    //         className="bg-white"
    //       ></Image>
    //       <Image
    //         src={SocialInsta}
    //         alt="Social Insta"
    //         height={40}
    //         className="bg-white"
    //       ></Image>
    //       <Image
    //         src={SocialLinkedIn}
    //         alt="Social LinkedIn"
    //         height={40}
    //         className="bg-white"
    //       ></Image>
    //       <Image
    //         src={SocialPin}
    //         alt="Social Pin"
    //         height={40}
    //         className="bg-white"
    //       ></Image>
    //       <Image
    //         src={SocialYoutube}
    //         alt="Social Youtube"
    //         height={40}
    //         className="bg-white"
    //       ></Image>
    //     </div>
    //     <p className="mt-6">&copy; 2024 Babina Gurung. All right reserved.</p>
    //   </div>
    // </footer>
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
             <Image
             src={SocialX}
             alt="Social X"
             height={40}
             className="bg-white"
           ></Image>
           <Image
             src={SocialInsta}
             alt="Social Insta"
             height={40}
             className="bg-white"
           ></Image>
           <Image
             src={SocialLinkedIn}
             alt="Social LinkedIn"
             height={40}
             className="bg-white"
           ></Image>
           <Image
             src={SocialPin}
             alt="Social Pin"
             height={40}
             className="bg-white"
           ></Image>
           <Image
             src={SocialYoutube}
             alt="Social Youtube"
             height={40}
             className="bg-white"
           ></Image>
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
