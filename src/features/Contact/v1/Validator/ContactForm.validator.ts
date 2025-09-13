import * as yup from 'yup';

export const Contact_schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),

  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  country_code: yup.string().required('Country code is required'),

  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),

  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters')
    .required('Message is required'),
});
