import * as yup from 'yup';

// Create a date object for today at midnight for proper comparison
const today = new Date();
today.setHours(0, 0, 0, 0);

export let CallBack_Form_Validator = yup.object({
  Name: yup.string().required('Name is required'),
  Phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  Date: yup
    .date()
    .nullable()
    .required('Date is required')
    .test('not-past', 'Date cannot be in the past', (value) => {
      if (!value) return true; // Skip validation if no date
      const dateToCheck = new Date(value);
      dateToCheck.setHours(0, 0, 0, 0); // Reset time to midnight
      return dateToCheck >= today;
    }),
  Hours: yup
    .string()
    .required('Hours is required')
    .matches(/^(0?[1-9]|1[0-2])$/, 'Hours must be between 1 and 12'),
  Minutes: yup
    .string()
    .required('Minutes is required')
    .matches(/^([0-5][0-9])$/, 'Minutes must be between 00 and 59'),
  Meridiem: yup
    .string()
    .required('Meridiem is required')
    .oneOf(['AM', 'PM'], 'Meridiem must be either AM or PM'),
});
