import { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, 0]); // Adjust the range and position values as needed

  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll position to trigger animation and transition
      if (scrollY.get() > 100) {
        controls.start({ y: 0 }); // Slide in from bottom when hero page scales up
      } else {
        controls.start({ y: 100 }); // Slide out to bottom when hero page scales down
      }
    };

    handleScroll(); // Initial animation based on scroll position
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, scrollY]);

  return (
    <motion.div
      style={{ height: '100vh',width: '100%', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex:1000 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <h1>About Section</h1>
    </motion.div>
  );
};

export default About;
