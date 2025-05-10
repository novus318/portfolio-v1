'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push('/');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-black-200 px-4 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold tracking-tight text-white-100 sm:text-5xl">
         <span className='text-primary'>Oops!</span> <br />Page not found.
        </h1>
        <p className="mt-4 text-xs md:text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <motion.div 
          className="mt-1 flex items-center gap-1"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <span>Being redirected</span>
          <motion.span
            animate={{ 
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
