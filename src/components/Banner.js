import React from 'react';
// import Image from '../assets/xvdjh.png'
import Image from '../assets/abt2.png'
import {FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        
      
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up',0.3)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>
          Hemanth A K
        </motion.h1>
        <motion.div 
        variants={fadeIn('up',0.4)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false,amount:0.7}}
        className='mb-6 text-[36px] lg:text-[60px] font-secondary
        font-semibold leading-[1]'>
          <span className='text-white mr-4'>I am </span>
          <TypeAnimation sequence={[' A Full stack Developer',2000,
                                    ' A ML Enthusiast',2000,
                                    ' A Python Developer',2000,
                                    ' An App Developer',2000,
                                    ' A React Developer',2000,

                                  ]}
                                  speed={50}
                                  className='text-accent'
                                  wrapper='span'
                                  repeat={Infinity}

                                  />
                                  
        
        
        </motion.div>
        <motion.p 
        variants={fadeIn('up',0.5)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false,amount:0.7}}
        className='mb-8 max-w-lg mx-auto lg:mx-0'> I’m living a dream I never want to wake up from.

        </motion.p>
        <motion.div 
        variants={fadeIn('up',0.6)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false,amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          
           
          {/* icon download */}
        </motion.div> 
        <motion.div 
        variants={fadeIn('up',0.7)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once:false,amount:0.7}}
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/HEmanTHAK7">
              <FaGithub className='text-3xl' />
            </a>
            <a href="https://www.linkedin.com/in/hemanth-a-k-a43a96207">
              <FaLinkedin className='text-3xl' />
            </a>
            <a href="https://instagram.com/he_man_th_a.k?igshid=ZDdkNTZiNTM=">
              <FaInstagram className='text-3xl' />
            </a>
          </motion.div>

        </div>
        
        <div>
          {/* social media */}
          
        </div>
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial="hidden" whileInView={'show'} 
        
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          {/* image */}
          <img className='bg-transparent h-100 ' src={Image} alt="" />
        </motion.div>

        
      </div>
    </div>
  </section>;
};

export default Banner;
