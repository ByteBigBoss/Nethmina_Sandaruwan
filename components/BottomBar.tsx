import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom } from '@/utils/Motion';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

const BottomBar = () => {
  return (
    <motion.div initial='hidden' animate='visible' className='flex justify-center'>
      <div className='fixed bottom-[30px] nsTsm:bottom-[12px] z-[1000] nsTsm:w-full nsTsm:flex nsTsm:flex-col nsTsm:items-center nsTsm:box-border nsTsm:px-[12px]'>
        <motion.div variants={slideInFromBottom} className='w-[836px] h-[80px] shs:h-[68px] nsTsm:rounded-[24px] border-[2px] border-ns-primary dark:border-ns-primary-dark  nsTsm:w-full  bg-ns-fade-darkblue dark:bg-ns-fade-darkblue-dark rounded-[30px] backdrop-blur-[12px] flex flex-col justify-center'>
          {/* container -------------------------->> */}
          <div className={`${roboto.className} box-border pl-[15px] nsTsm:pl-[27px] nsTsm:pr-[27px] pr-[40px] flex items-center justify-between nsTsm:flex-col nsTsm:items-center nsTsm:justify-normal`}>




            </div>
          </motion.div>
      </div>
      {/* container end ----------------------->> */}
    </motion.div>
  )
}

export default BottomBar