import apiClient from "@/hooks/useApi";
import { CallBack_Form_Type } from "../Type/CallBack.type";

class CallBackApiService {
  public async createNewCallback(data: CallBack_Form_Type) {
    try {
      // Extract time properties from the data
      const { Name, Phone, Date, Hours, Minutes, Meridiem, ...rest } = data;
      
 
      const formattedData = {
        Name,
        Phone,
        Date, 
        Status: "Pending",
        Time: {
          Hours,
          Minutes,
          Meridiem
        },
        ...rest
      };

      const response = await apiClient.request({
        method: "POST",
        endpoint: "/api/v1/Create-CallBack",
        data: formattedData,
      });

    
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new CallBackApiService();