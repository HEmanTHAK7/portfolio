import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import resume from './resume.pdf'
// import {Link} from 'react-scroll'
const About = () => {
  const {ref, inView} = useInView({
    threshold:0.5,
  });
  return <section className='section aboutpage' id='about' ref={ref}>
    <div className=" container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
        <div>

        </div>
        {/* image */}
        {/* <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div> */}
        {/* text */}
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}

        className='flex-1 abtcont'>
          
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'> Know Who I am</h3>
          
          <p className='mb-6'>Hi 🙌 I'm <span className='text-purple-400'> Hemanth A K </span>from Kerala, India <br />
           My area of interest is  <span className='text-pink-600'>Machine Learning</span>  I'm also passionate about <span className='text-purple-400'>Web Development and App Development</span>  <br />
            I have knowledge of  <span className='text-purple-400'>C, Python, Javascript, Java & Flutter.</span>  I attempt to stay current with new technology and put them to use.
           <br />
           Besides Programing I have also intrest in 
           <ul>
            <li className='text-purple-500'>Cinemas</li>
            <li className='text-purple-500'>Listening Music</li>
            <li className='text-purple-500'> Playing Games</li>
            <li className='text-purple-500'>Traveling</li>
           </ul>
           
           </p>
          {/* stats */}
          <h2 className='mt-3 text-[35px] font-bold mb-4'>Skills</h2>
          <div className=' sm:flex gap-x-6 lg:gap-x-10 mb-12 '>
            <div className='mb-4' >
            <div className='font-primary text-sm tracking-[2px] mb-4 sm:mb-2 '>
                Python <br />
              </div>
              <div className='text-[40px] font-tertiary text-gradient mt-4'>
                {inView?<CountUp start={0} end={85} duration={1}/> : null}%
              </div>                    
            </div>
            <div className='mb-4'>
            <div className='font-primary text-sm tracking-[2px] mb-4 sm:mb-2 '>
                Front End <br />
              </div>
              <div className='text-[40px] font-tertiary text-gradient mt-4 '>
                {inView?<CountUp start={0} end={80} duration={1}/> : null}%
              </div>                    
            </div>
            <div className='mb-4'>
            <div className='font-primary text-sm tracking-[2px] mb-4 sm:mb-2 '>
                Back End <br />
              </div>
              <div className='text-[40px] font-tertiary text-gradient mt-4  '>
                {inView?<CountUp start={0} end={75} duration={1}/> : null}%
              </div>                    
            </div>
            
            <div className='mb-4'>
            <div className='font-primary text-sm tracking-[2px] mb-4 sm:mb-2 '>
                Flutter <br />
              </div>
              <div className='text-[40px] font-tertiary text-gradient mt-4 '>
                {inView?<CountUp start={0} end={50} duration={1}/> : null}%
              </div>                    
            </div>

            
            

          </div>
          <div className='flex gap-x-8 items-center'>
          <a href={resume} download="resume.pdf">
          <button className='btn btn-lg'>Resume</button> 
          </a>
              
            
            
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;



