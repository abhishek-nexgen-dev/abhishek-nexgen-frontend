import useApi from '@/hooks/useApi';
import { Project_Type } from './Project.type';

export let Fetch_Project_Data = async (
  Category_Name: string
): Promise<Project_Type[]> => {
  try {
    console.log('----------->', Category_Name);
    let res: any = await useApi.request<null, { data: Project_Type[] }>({
      method: 'GET',
      endpoint: `/api/v1/findAllProjectsByCategoryName?Category_Name=${Category_Name.toUpperCase()}`,
    });

    console.log('Response from API:', res.data);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch project data');
  }
};
