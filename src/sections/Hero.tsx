"use client"

import Button from "@/components/Button";
import startBG from "@/assets/stars.png"
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  // useMotionValueEvent(scrollYProgress, "change",(value)=>{
  //   console.log("scrollYProgress" , value)
  // })
  const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300])
  return <motion.section
  ref={sectionRef}
  className="h-[492px] flex items-center md:h-screen overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
  animate={{
    backgroundPositionX: startBG.width,
  }}
  transition={{
    repeat:Infinity,
    ease:"linear",
    duration: 120
  }}
  style={{
    backgroundImage: `url(${startBG.src})`,
    backgroundPositionY
  }}>
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
   {/* start ring 1 */}
    <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]  shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
   {/* end ring 1 */}
   
   {/* start ring 2 */}

    <motion.div 
    style={{
      translateX: "-50%",
      translateY: "-50%"
    }}
    animate={{
      rotate: "1turn"
    }}
    transition={{
      repeat: Infinity,
      duration: 60,
      ease: "linear"
    }}
     className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
    <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 rounded-full bg-white "></div>
    <div className="absolute h-2 w-2 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-full bg-white "></div>
    <div className="absolute h-5 w-5 top-1/2 -translate-x-1/2 -translate-y-1/2 left-full rounded-full border border-white inline-flex items-center justify-center ">
     <div className="h-2 w-2 bg-white rounded-full"></div>
    </div>
    </motion.div>
   {/* end ring 2 */}

   {/* start ring 3 */}
    <motion.div
     style={{
      translateX: "-50%",
      translateY: "-50%"
    }}
    animate={{
      rotate: "-1turn"
    }}
    transition={{
      repeat: Infinity,
      duration: 200,
      ease: "linear"
    }}
     className="absolute w-[444px] h-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  border-dashed"></motion.div>
   {/* start ring 1 */}
   {/* start ring 1 */}
   
    <motion.div
      style={{
        translateX: "-50%",
        translateY: "-50%"
      }}
      animate={{
        rotate: "1turn"
      }}
      transition={{
        repeat: Infinity,
        duration: 90,
        ease: "linear"
      }}
     className="absolute w-[544px] h-[544px] md:w-[980px] md:h-[980px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  ">
    <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 rounded-full bg-white "></div>
    <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-full rounded-full bg-white "></div>
    </motion.div>
   {/* end ring 3 */}
    
    <div className="container relative mt-16">
      <h1 className="text-7xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center ">AI SEO</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 text-center">Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user friendly SEO tools.</p>
      <div className="flex justify-center mt-5">
      <Button>Join waitlist</Button>
      </div>
    </div>
  </motion.section>;
};
