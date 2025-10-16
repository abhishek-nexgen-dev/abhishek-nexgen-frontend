'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Fetch_Project_Data } from '@/features/Project_View/Project.service';
import { MdArrowOutward } from 'react-icons/md';

import Link from 'next/link';
// /v1/findAllProjectsByCategoryName

const page = () => {
  const [data, setData] = React.useState<any>([]);

  const { Project_CategoryName } = useParams<{
    Project_CategoryName: string;
  }>();

  let name = Project_CategoryName.replaceAll('%20', ' ');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Fetch_Project_Data(name);
        setData(data);
      
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen  flex px-[3vw] py-[22vh] text-white">
     
     {
       data.map((cat: any) => (
        <Link
          key={cat._id}
          href={`project/${cat._id}`}
          className="rounded-xl w-[90vw] md:w-[60vw] lg:w-[28vw] h-[45vh] relative  flex flex-col overflow-hidden 
                 border border-gray-200 dark:border-none 
                 bg-gray-50 dark:bg-gradient-to-br dark:from-[#232526] dark:to-[#191919] 
                 shadow-sm dark:shadow-lg 
                 transition-transform hover:-translate-y-2 duration-200 cursor-none
                 
          "
        >
          <div className="Category_Image h-[70%] w-full">
            <img className="h-[30vh] w-full object-cover" src={cat.Project_Image_Url} alt={cat.title} />
          </div>
          <div className="h-[30%] w-full flex justify-between items-center px-[2vw] py-[2vh] bg-gray-50 dark:bg-transparent">
            <div className="flex flex-col gap-y-4 py-2">
              <h4 className="text-base text-gray-600 dark:text-gray-300 ">
                CLICK HERE TO VISIT
              </h4>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ">{cat.title}</h3>
            </div>
            <MdArrowOutward className="text-xl text-gray-700 dark:text-white" />
          </div>
        </Link>
       ))
     }
  
    </div>
  );
};

export default page;
