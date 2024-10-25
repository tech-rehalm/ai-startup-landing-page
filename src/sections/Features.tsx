"use client"

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png"
import Image from "next/image";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition} from "framer-motion"

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab =(tab: typeof tabs[number] & ComponentPropsWithoutRef<'div'> & {selected: boolean})=>{
const dotLottiePlayer = useRef<DotLottieCommonPlayer>(null)
const tabRef = useRef<HTMLDivElement>(null)

const handleTabHover =  ()=>{
  if(dotLottiePlayer.current === null) return
  dotLottiePlayer.current.seek(0)
  dotLottiePlayer.current.play()
}

const xPercentage = useMotionValue(0)
const yPercentage = useMotionValue(0)

const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`
useEffect(()=>{
  if(!tabRef.current || !tab.selected) return
  xPercentage.set(0)
  yPercentage.set(0)
  const {height, width} = tabRef.current.getBoundingClientRect()
  const circunference = height * 2 + width * 2
  const times = [0, width/circunference,(width + height)/circunference, (width * 2 + height)/circunference, 1]
  const options : ValueAnimationTransition = {
    times,
    duration: 4,
    repeat: Infinity,
    ease: 'linear',
    repeatType: "loop"
  }
  animate(xPercentage, [0, 100, 100, 0, 0], options)
  animate(yPercentage, [0, 0, 100, 100, 0], options)
},[tab.selected])

  return (
    <div onMouseEnter={handleTabHover} ref={tabRef} onClick={tab.onClick}  className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative">
      {tab.selected && (
        <motion.div
      style={{
        maskImage
      }}
      className="absolute inset-0 border border-[#A369FF] -m-px rounded-xl "></motion.div>
      )}
      
          <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
             <DotLottiePlayer ref={dotLottiePlayer} src={tab.icon} className="h-5 w-5" autoplay/>
          </div>
          <div className="font-medium">{tab.title}</div>
          {tab.isNew && <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">New</div>}
        </div>
  )
}

export const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)

  const backgroundPosition = useMotionTemplate `${backgroundPositionX} ${backgroundPositionY}`
  const backgroundSize = useMotionTemplate `${backgroundSizeX}% auto`

  const handleSelectedTab = (index:number)=>{
    setSelectedIndex(index)
    animate(backgroundSizeX, [backgroundSizeX.get(),100, tabs[index].backgroundSizeX],{
      duration:2,
      ease: "easeInOut"
    })
    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX],{
      duration:2,
      ease: "easeInOut"
    })
    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY],{
      duration:2,
      ease: "easeInOut"
    })
  }
  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts</h2>
      <p className="text-white/70 text-lg text-center mt-5 md:text-xl max-w-2xl mx-auto">
        From small startups to large enterprices, our AI-driven tool has revolutionalized the way businesses approach SEO.
      </p>
      <div className="mt-10 flex flex-col gap-3 lg:flex-row">
      {tabs.map((tab, tabIndex)=>(
       <FeatureTab onClick={()=>handleSelectedTab(tabIndex)} selected={selectedIndex === tabIndex} {...tab} key={tab.title}/>
      ))}
      </div>
      <div className="border border-white/20 p-2 5 rounded-xl mt-3">

      <motion.div className="aspect-video bg-cover border border-white/20 p-2 5 rounded-lg"
      style={{
        backgroundPosition,
        backgroundSize,
        backgroundImage: `url(${productImage.src})`
      }}
      ></motion.div>
      </div>
      {/* <Image src={productImage} alt="Product image"/>  */}
    </div>
  </section>;
};
