"use client"

import acmeLogo from "@/assets/logo-acme.png"
import apexLogo from "@/assets/logo-apex.png"
import celestiaLogo from "@/assets/logo-celestial.png"
import quantumLogo from "@/assets/logo-quantum.png"
import pulseLogo from "@/assets/logo-pulse.png"
import echoLogo from "@/assets/logo-echo.png"
import {motion} from "framer-motion"

export const LogoTicker = () => {
  return <section className="py-20">
    <div className="container">
      <div className="flex items-center md:gap-5">
        <div className="flex-1 md:flex-none">
          <h2>Trusted by innovative teams</h2>
        </div>
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent)]"> 
        <motion.div 
        initial={{translateX : "-50%"}}
        animate={{translateX : "0"}}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
        className="flex flex-none gap-14 -translate-x-1/2 pr-14">
          {[acmeLogo, apexLogo, celestiaLogo, quantumLogo, pulseLogo, echoLogo,acmeLogo, apexLogo, celestiaLogo, quantumLogo, pulseLogo, echoLogo].map((logo) => (
            <img src={logo.src} className="h-6 w-auto" alt="" key={logo.src} />
          ))}
        </motion.div>
        </div>
      </div>
    </div>
  </section>;
};
