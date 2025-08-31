import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Notes_Object_Type } from '../type/Notes.type';

type NotesCardProps = {
  Data: Notes_Object_Type;
};

const Notes_Card: React.FC<NotesCardProps> = ({ Data }) => {
  return (
    <Card className="w-[70%] min-[756px]:w-[35vw] min-[1000px]:w-[25vw] h-fit py-[5vh] bg-white dark:bg-[#2C2C2C] rounded-xl shadow-lg flex flex-col items-center justify-between m-10 border border-[#6C6765] dark:border-[#333] transition">
      <CardHeader className="w-full h-[50%] flex flex-col items-center justify-center p-0 m-0">
        <img
          src={Data.Notes_Image}
          alt={Data.title}
          className="w-[80%] h-[20vh] object-contain rounded-lg"
        />
      </CardHeader>
      <CardFooter className="h-[50%] w-full flex flex-col items-center  gap-2 px-4">
        <CardTitle className=" dark:text-white text-[1.5vw] font-extrabold text-[#C8D7C7] uppercase">
          {Data.title}
        </CardTitle>
        <CardDescription className="text-[#64748B] dark:text-[#C5C5C5] text-sm mb-2 capitalize">
          Download Notes Here
        </CardDescription>
        <CardAction className="w-full flex justify-center">
          <Button
            asChild
            className="bg-[#FF8660] hover:bg-[#D5491D] text-white font-semibold rounded-full px-6 py-2 transition"
          >
            <a
              href={Data.download_link}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download PDF
            </a>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default Notes_Card;
