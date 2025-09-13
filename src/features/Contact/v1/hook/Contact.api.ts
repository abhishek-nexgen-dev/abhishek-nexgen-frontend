import useApi from '@/hooks/useApi';
import { Contact_Form_Type } from '../Type/Contact.type';

class ContactApiService {
  public async createContact(data: Contact_Form_Type) {
    try {
      const response = await useApi.request<Contact_Form_Type>({
        method: 'POST',
        endpoint: '/api/v1/Contact/create',
        data,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new ContactApiService();
