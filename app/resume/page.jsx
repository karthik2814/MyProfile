"use client";
import { BsBootstrap } from 'react-icons/bs';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDocker, FaCode,FaCodeBranch, FaCodepen, FaCoins, FaDatabase, FaCloud, FaDev } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiBootstrap } from 'react-icons/si'

//About Data
const about = {
  title: "About me",
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora quas est blanditiis dolorem. Dolorum molestiae tenetur tempora alias praesentium neque ipsa, facere saepe sequi deleniti quidem libero provident ex?',
  info:[
    {
      fieldName: 'Name',
      fieldValue: 'Karthik Resham'
    },
    {
      fieldName: 'Email',
      fieldValue: 'karthikresham.r@gmail.com'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 93908 85058'
    },
    {
      fieldName: 'Experience',
      fieldValue: '10+ Years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    {
      fieldName: 'Freelancing',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Tranings',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'Telugu, English, Hindi'
    },
  ]
}

//Exp data
const Experience = {
  icon:'/assets/resume/exp1.png',
  title: 'My experiance',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, autem fuga? Labore consequuntur eaque perspiciatis enim repellat. Sed mollitia expedita dolorum commodi velit quam placeat culpa. Praesentium tenetur saepe suscipit?',
  items: [
    {
      company: 'Infosys Limited',
      position: 'Technology Analyst',
      duration: 'Aug 2018 - present'
    },
    {
      company: 'JNet Technologies',
      position: 'Software Developer',
      duration: 'Jan 2018 - Aug 2018'
    },
    {
      company: 'Cyient Limited',
      position: 'Software Engineer Level - 3',
      duration: 'Mar 2016 - Dec 2017'
    },
    {
      company: 'ICICI Lombard GIC Limited',
      position: 'CSM - HMT (Software Developer)',
      duration: 'Sept 2014 - Mar 2016'
    },
    {
      company: 'Printmind technologies',
      position: 'Associate Technology',
      duration: 'Apr 2014 - Sept 2016'
    },
  ]
};


//Education Data
const Education = {
  icon: '/assets/resume/edu.jpg',
  title: 'My Education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil numquam aliquid at quisquam est magnam, quaerat quibusdam. Quis, ducimus voluptates enim quas neque repudiandae voluptatibus dignissimos. Odio facere adipisci nesciunt.',
  items:[
    {
      institution: 'AVN institute of Engineering & Technology',
      degree: 'MBA (Human Resource & Marketing)',
      duration: '2012 - 2014'
    },
    {
      institution: 'Raja Mahendra College of Engineering & Technology',
      degree: 'B.Tech (EEE)',
      duration: '2007 - 2012'
    },
    {
      institution: 'Vikas Junior College',
      degree: 'MPC',
      duration: '2005 - 2007'
    },
    {
      institution: 'Rishi Vidhyalaya High school',
      degree: 'others',
      duration: '2004 - 2005'
    },
  ]
}

//Skills Data
const Skills = {
  title:'My Skills.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vel hic, laborum ipsa molestiae omnis sed earum cum vero veniam? Assumenda, nihil impedit quod aspernatur laudantium velit quisquam eaque cumque!',
  skillList : [
    {
      icon: <FaCode />,
      name: 'Microsoft .Net & .Net Core'
    },
    {
      icon: <FaReact />,
      name: 'React JS'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node JS'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS'
    },
    {
      icon: <FaCodeBranch />,
      name: 'Git Hub'
    },
    {
      icon: <FaCodepen />,
      name: 'Postman'
    },
    {
      icon: <FaDatabase />,
      name: 'MS SqlServer'
    },
    {
      icon: <FaCloud />,
      name: 'Microsoft Azure'
    },
    {
      icon: <FaCloud />,
      name: 'MS Kubernates'
    },
    {
      icon: <FaDocker />,
      name: 'Docker'
    },
    {
      icon: <FaDev />,
      name: 'Full Stack Development'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next dot env'
    },
    {
      icon: <BsBootstrap />,
      name: 'Bootstrap'
    },
    {
      icon: <SiBootstrap />,
      name: 'Bootstrap'
    }
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <>
      <motion.div initial={{opacity:0}}
                  animate={{opacity:1, transition:{
                    delay:2.4, duration:0.4, ease:"easeIn"
                  }}}
                  className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
      >
        <div className="container mx-auto">
           <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px] '>
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='aboutme'>About Me</TabsTrigger>
            </TabsList>
            <div className='min-h-[78vh] w-full'>
              {/* Exp */}
              <TabsContent value='experience' className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold '>{Experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{Experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {
                        Experience.items.map((exp, index)=>{
                          return(
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <span className='text-accent'>{exp.duration}</span>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{exp.position}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                <p className='text-white/60'>{exp.company}</p>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* Edu */}
              <TabsContent value='education' className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold '>{Education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{Education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {
                        Education.items.map((Edu, index)=>{
                          return(
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <span className='text-accent'>{Edu.duration}</span>
                              <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{Edu.degree}</h3>
                              <div className='flex items-center gap-3'>
                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                <p className='text-white/60'>{Edu.institution}</p>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </ScrollArea>
              </div>
              </TabsContent>
              {/* Skills */}
              <TabsContent value='skills' className="w-full h-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold '>{Skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{Skills.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                      {
                        Skills.skillList.map((skills, index)=>{
                          return(
                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skills.icon}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className='capitalize'>{skills.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </ScrollArea>
              </div>
              </TabsContent>
              {/* About */}
              <TabsContent value='aboutme' className="w-full text-center xl:text-left">
                <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {
                      about.info.map((abt, index)=>{
                        return(
                          <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                            <span className='text-white/60'>{abt.fieldName}</span>
                            <span className='text-xl text-wrap'>{abt.fieldValue}</span>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </TabsContent>              
            </div>
           </Tabs>
        </div>
      </motion.div>
    </>
  )
}

export default Resume