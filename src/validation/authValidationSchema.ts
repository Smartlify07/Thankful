import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required(`Email can't be blank`),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required(`Password can't be blank`),
});

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required(`Email can't be blank`),
  password: Yup.string().required(`Password can't be blank`),
});
