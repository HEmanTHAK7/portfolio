import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import img1 from '../assets/blogapp.jpg'
import img2 from '../assets/portfolio.jpg'
import img3 from '../assets/imgresize.jpg'


const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />
             work
            </h2>
            <p className='max-w-sm mb-16'>Hi👋,here are a few of the works I've completed. Many more are
             still in the development stage, and I'll be providing the
              source code so you may explore them. I believe you'll enjoy these </p>
              <a href="https://github.com/HEmanTHAK7?tab=repositories">
            <button className='btn btn-sm'>view all projects</button>

              </a>
          </div>
          {/* images */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient '>

              <a href="https://github.com/HEmanTHAK7/BlogApp">BLOG APP</a> 
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Build a Blog App Using Django </span>
            </div>

          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-10 sm:gap-y-16'>
          {/* imgs */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient '>

              <a href="https://github.com/HEmanTHAK7/imageResizer">PERSONAL PORTFOLIO</a> 
              
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Build a Personal Portfolio using React JS</span>
            </div>

          </div>

          {/* imgs */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="" />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient '>

              <a href="https://github.com/HEmanTHAK7/imageResizer"> IMAGE RESIZER</a> 
              </span>
              </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>A Python Program for resizing the image</span>
            </div>

          </div>

        </motion.div>
        

      </div>
    </div>
  </section>;
};

export default Work;
