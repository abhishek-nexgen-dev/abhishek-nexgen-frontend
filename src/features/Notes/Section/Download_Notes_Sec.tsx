import React from 'react';
import Notes_Card from '../Components/Notes_Card';
import Notes_Constant_Array from '../constant/Notes.constant';

const Download_Notes_Sec = () => {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center ">
      {Notes_Constant_Array.map((note) => (
        <Notes_Card key={note._id} Data={note} />
      ))}
    </div>
  );
};

export default Download_Notes_Sec;
