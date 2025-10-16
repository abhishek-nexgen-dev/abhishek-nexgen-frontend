export type Link_type = {
  label: string;
  link: string;
};

export interface Project_Type {
  _id: number;
  User_id: string;
  title: string;
  description: string;
  Project_Image_Url: string;
  features: string[];
  bg_color: string;
  Project_Category: string;
  techStack: string[];
  links: Link_type[];
  video: string;
}
