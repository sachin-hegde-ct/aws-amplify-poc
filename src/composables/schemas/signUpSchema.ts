import { object, string } from 'yup';

const signUpValidations = {
  firstName: string()
    .required('First name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  lastName: string()
    .required('First name is required')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  email: string().email('Must be a valid email').required('Email is required'),
  phoneNumber: string()
    .required('Phone number is required')
    .length(12, 'Phone number must be valid'),
  password: string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
};

export const useSignUpValidations = () =>
  object().shape({
    firstName: signUpValidations.firstName,
    lastName: signUpValidations.lastName,
    email: signUpValidations.email,
    phoneNumber: signUpValidations.phoneNumber,
    password: signUpValidations.password,
  });
