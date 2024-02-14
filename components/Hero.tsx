import React, { useEffect, useRef, useState } from 'react';

import { Alegreya_Sans, Rajdhani } from 'next/font/google';
import useScreenSize from '@/utils/useScreenSize';
import { useAnimation,motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';

const alegreya = Alegreya_Sans({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '800', '900'] });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const Hero = () => {

  const [windowHeight, setWindowHeight] = useState<string>('');

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // console.log('Window resized');
      // console.log('Inner height:', window.innerHeight);
      
      if (window.innerHeight < 850) {
        // console.log('Setting height to ht1');
        setWindowHeight('ht1');
      } else if (window.innerHeight < 650) {
        // console.log('Setting height to ht2');
        setWindowHeight('ht2');
      } else if (window.innerHeight < 520) {
        // console.log('Setting height to ht3');
        setWindowHeight('ht3');
      } else if (window.innerHeight < 420) {
        // console.log('Setting height to ht4');
        setWindowHeight('ht4');
      }else if(window.innerHeight > 850){
        setWindowHeight('ht01');
      }
    };

    // Call handleResize initially to set the initial window height state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const screenSize = useScreenSize();
  
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 10]); // Adjust the range and scale values as needed

  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll position to trigger animation and transition
      if (scrollY.get() > 100) {
        controls.start({ scale: 10 }); // Scale up when scrolling down
      } else {
        controls.start({ scale: 1 }); // Reset scale when scrolling up
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, scrollY]);

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-end'>
      <div className='frame-container flex flex-col items-center'>

        {/* door */}
        <motion.div
         animate={controls}  
         transition={{ duration: 0.2 }}
         className='door-inner-shadow min-w-1/3 rounded-t-full nsTsm:w-[96%]  bg-ns-space dark:bg-ns-space-dark h-[90vh] flex flex-col items-center box-border relative justify-center'
         >
          <div className='flex flex-col items-center'>
            <div className={`${alegreya.className} ${screenSize!=='nsTsm' && windowHeight==='ht1'?'hidden':windowHeight==='ht01'?'block':''}   text-ns-secondary dark:text-ns-secondary-dark  text-center text-[3.4rem] nsTsm:text-[2rem]`}>Hello I am,</div>
            <div className='text-center text-[4rem] mt-[40px] nsTsm:mt-[10px] px-[50px] 2xl:px-[80px] font-bold text-ns-primary dark:text-ns-primary-dark nsTsm:text-[2.4rem]'>Nethmina <br /> <span className='text-ns-heighlight dark:text-ns-heighlight-dark'>Sandaruwan</span></div>
            <div className={`${rajdhani.className} mt-[12px] text-center text-[28px] text-ns-primary dark:text-ns-primary-dark opacity-60 nsTsm:text-clip nsTsm:whitespace-nowrap nsTsm:overflow-hidden nsTsm:text-[1rem]`}>Mastering the Art of Full-Stack Magic</div>

            <div className={`${alegreya.className} box-border px-[50px]  flex items-center gap-[40px] mt-[50px] nsTsm:w-full nsTsm:grid nsTsm:grid-cols-2`}>
              <button className='w-[182px] h-[66px] nsTsm:text-[1.2rem] nsTsm:h-[50px] nsTsm:w-auto hover:border-[2px] hover:border-ns-heighlight dark:hover:border-ns-heighlight-dark hover:bg-ns-space dark:hover:bg-ns-space-dark hover:text-ns-heighlight dark:hover:text-ns-heighlight-dark hover:scale-95 transform transition-transform duration-300 text-[1.5rem] font-medium rounded-[100px] bg-ns-heighlight dark:bg-ns-heighlight-dark text-white'>Contact Me</button>
              <button className='w-[182px] h-[66px] nsTsm:text-[1.2rem] nsTsm:h-[50px] nsTsm:w-auto hover:bg-ns-heighlight hover:text-white dark:hover:text-white dark:hover:bg-ns-heighlight-dark hover:scale-95 transform transition-transform duration-300 rounded-[100px] text-[1.5rem] font-medium border-[2px] text-ns-heighlight dark:text-ns-heighlight-dark border-ns-heighlight dark:border-ns-heighlight-dark'>Explore</button>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

export default Hero