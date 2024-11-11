'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import {Swiper,SwiperSlide} from 'swiper/react'; 
import "swiper/css";
import WorkSliderButtons from '@/components/WorkSliderButtons'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";

const Projects = [
  {
    num: '01',
    category: 'Full Stack Development',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus reprehenderit odio esse odit voluptas quis minima labore pariatur nam! Numquam illo, asperiores nesciunt nostrum quisquam optio omnis voluptas perspiciatis?',
    stack: [{name:'ReactJs'},{name:'.Net Core'},{name:'C#'},{name:'Entity Framework'},{name:'SQL Server'},{name:'React Bootstrap'},{name:'Google Maps'}],
    Image: '/assets/work/Parkinghub.png',
    live:'',
    github:''
  },
  {
    num: '02',
    category: 'Full Stack Development',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus reprehenderit odio esse odit voluptas quis minima labore pariatur nam! Numquam illo, asperiores nesciunt nostrum quisquam optio omnis voluptas perspiciatis?',
    stack: [{name:'ReactJs'},{name:'.Net Core'},{name:'C#'},{name:'Entity Framework'},{name:'SQL Server'},{name:'React Bootstrap'},{name:'Chat Js'}],
    // Image:'/assets/work/images.png' --Add if you have an proj image,
    Image: '/assets/work/',
    live:'',
    github:''
  },
  {
    num: '03',
    category: 'Full Stack Development',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus reprehenderit odio esse odit voluptas quis minima labore pariatur nam! Numquam illo, asperiores nesciunt nostrum quisquam optio omnis voluptas perspiciatis?',
    stack: [{name:'ReactJs'},{name:'.Net Core'},{name:'C#'},{name:'Entity Framework'},{name:'SQL Server'},{name:'React Bootstrap'},{name:'Chat Js'}],
    //Image:'/assets/work/images.png' --Add if you have an proj image,
    Image:'/assets/work/',
    live:'',
    github:''
  },
  {
    num: '04',
    category: 'Full Stack Development',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus reprehenderit odio esse odit voluptas quis minima labore pariatur nam! Numquam illo, asperiores nesciunt nostrum quisquam optio omnis voluptas perspiciatis?',
    stack: [{name:'ReactJs'},{name:'.Net Core'},{name:'C#'},{name:'Entity Framework'},{name:'SQL Server'},{name:'React Bootstrap'},{name:'Chat Js'}],
    //Image:'/assets/work/images.png' --Add if you have an proj image,
    Image: '/assets/work/',
    live:'',
    github:''
  }

]

const Work = () => {
  const [project, setProject] = useState(Projects[0])

  const handleSlideChange = (swipper) => {
    const currentIndex = swipper.activeIndex;
    setProject(Projects[currentIndex]);
  }

  return (
    <motion.section initial={{opacity:0}}
                    animate={{opacity:1}}
                    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
                    > 
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
               </div>
               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
               <p className="text-white/60">{project.description}</p>
               <ul className="flex gap-4">
                 {
                  project.stack.map((stack, index)=>{
                      return(
                        <li key={index} className="text-l text-accent ">
                          {stack.name} 
                          {index !== project.stack.length - 1 && ','}
                        </li>
                      )
                  })
                 }
               </ul>
               <div className="border border-white/20"></div>
               <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full gb-white/5 flex justify-center items-center group" >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Projects</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full gb-white/5 flex justify-center items-center group" >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>                
               </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} 
                    slidesPerView={1} 
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
              {
                Projects.map((project, index)=>{
                  return(
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div></div>
                        <div className="relative w-full h-full">
                          <Image src={project.Image} fill className="object-cover" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                }) 
              }
              {/* buttons */}
              <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 
                                                  bottom-[calc(50%_-_22px)] 
                                                  xl:bottom-0 z-20 w-full 
                                                  justify-between xl:w-max 
                                                  xl:justify-none" 
                                  buttonStyles="bg-accent hover:bg-accent-hover
                                                text-primary text-[22px] w-[44px]
                                                h-[44px] flex justify-center
                                                items-center transition-all"                
                                  iconStyles=""
                                                  />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work