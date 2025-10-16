import React, { useState } from 'react';
import SpotlightCard from '../../../../components/SpotlightCard';
import { motion } from 'framer-motion';
import {  FaCode, FaTrophy, FaStar, FaCodeBranch, FaMedal } from 'react-icons/fa';

import { BsGraphUp, BsArrowUpRightCircle } from 'react-icons/bs';
import StatCard from '../Components/StatCard';
import platformData from '../constant/Platform.constant';




const Achievement = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-screen relative px-[6vw] py-[9vh] overflow-hidden">
      <div className="mt-8 lg:mt-[8vh]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

          >
            <h2
              className="text-[3.8vw] lg:text-[2.2vw] font-bold text-center mb-3
                bg-gradient-to-r from-gray-900 to-gray-700 
                dark:from-[#FF8660] dark:to-[#D5491D] 
                bg-clip-text text-transparent"
            >
              Achievements & Profiles
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
              Showcasing my technical journey across various platforms with measurable progress and achievements
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {platformData.map((platform, index) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <SpotlightCard 
                className="h-[28vh] w-full" 
                spotlightColor={platform.color}
              >
                <div className="h-full w-full p-5 relative flex flex-col">
               
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="text-3xl mr-3">
                        {platform.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {platform.platform}
                        </h3>
                        <div 
                          className="text-xs px-2 py-0.5 rounded-full inline-flex items-center" 
                          style={{ 
                            backgroundColor: `${platform.darkColor}25`,
                            color: platform.darkColor 
                          }}
                        >
                          <FaMedal className="mr-1" /> {platform.badge}
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`rounded-full p-1.5 transition-all duration-300 ${
                        hoveredIndex === index 
                          ? 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200' 
                          : 'bg-transparent text-gray-400'
                      }`}
                    >
                      <BsArrowUpRightCircle />
                    </a>
                  </div>
                  
               
                  <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-5">
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: platform.darkColor,
                        width: hoveredIndex === index ? `${platform.progressValue}%` : '0%'
                      }}
                      animate={{ 
                        width: hoveredIndex === index ? `${platform.progressValue}%` : '5%',
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  
           
                  <div className="grid grid-cols-3 gap-2">
                    {platform.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
              
                  <div className="absolute bottom-3 right-3 opacity-10">
                    <div className="text-5xl" style={{ color: platform.darkColor }}>
                      {platform.icon}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
       
        <div className="mt-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800/30 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center mb-4">
              <BsGraphUp className="text-xl mr-2 text-blue-500" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Overall Progress</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                icon={<FaStar className="text-yellow-500" />}
                value="540+"
                label="Problems Solved"
              />
              <StatCard 
                icon={<FaCodeBranch className="text-green-500" />}
                value="1.4K+"
                label="Total Contributions"
              />
              <StatCard 
                icon={<FaCode className="text-blue-500" />}
                value="24+"
                label="Projects Completed"
              />
              <StatCard 
                icon={<FaTrophy className="text-purple-500" />}
                value="18"
                label="Certifications"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};



export default Achievement;