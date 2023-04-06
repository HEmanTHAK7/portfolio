import React,{useRef} from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import emailjs from 'emailjs-com';

//emailjs install

const Contact = () => {
  

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      // .send(

      //   "service_6fe3i3p", // service ID
      //   "template_22nf8x9",// template ID
      //   form.current,
      //   "5S5VpjE2z8XLUtIzH" // user ID
      // )
      .send(
        'service_6fe3i3p',
        'template_22nf8x9',
        {
          from_name: form.name,
          to_name: "Hemanth A K",
          from_email: form.email,
          to_email: "hemanthbovikkanam@gmail.com",
          message: form.message,
        },
        '5S5VpjE2z8XLUtIzH',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
     
       
  };
  const cancelCourse = () => { 
    document.getElementById("clrform").reset();
  }

  

  return (
    <section className=' py-16 lg:section contactpage' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}

          className='flex-1 flex items-center justify-start'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />Together</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
          id='clrform'
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' 
          ref={form} onSubmit={sendEmail} 
          >
            <input className='bg-transparent py-3 border-b outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            type="text" name="user_name" placeholder='Your name'/>
            <input className='bg-transparent py-3 border-b outline-none w-full
            placeholder:text-white focus:border-accent transition-all' 
            type="text" name="user_email" placeholder='Your email'/>
            <textarea className='bg-transparent py-12 border-b outline-none w-full
            placeholder:text-white focus:border-accent transition-all resize-none mb-12'
            name="message" placeholder='Your message'></textarea>
            <input type="button" value="Sent" id='btn' className='btn btn-lg ' onClick={cancelCourse}/>
            {/* <button className='btn btn-lg' >send message</button> */}
          </motion.form>
        </div>
      </div>
    </section>
  ); 
};

export default Contact;
