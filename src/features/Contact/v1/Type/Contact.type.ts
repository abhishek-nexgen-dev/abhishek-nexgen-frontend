export type Contact_Country_Type = {
  Country_Name: string;
  Country_Code: string;
  Country_Flag_Image: string;
};

export type Contact_Info_Type = {
  Email: string;
  Phone: string;
  Social_Link: {
    Instagram: string;
    Twitter: string;
    LinkedIn: string;
    GitHub: string;
    Youtube?: string;
  };
};

export type Contact_Form_Type = {
  name: string;
  email: string;
  country_code: string;
  phone: string;
  message: string;
};
