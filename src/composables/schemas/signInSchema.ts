import { object, string } from 'yup';

const signInValidations = {
  userName: string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: string()
    .required('Please enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
};

export const useSignInValidations = () =>
  object().shape({
    userName: signInValidations.userName,
    password: signInValidations.password,
  });
