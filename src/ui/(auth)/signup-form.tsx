import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../../types/types';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .required(`Name can't be blank`),
  email: Yup.string()
    .email('Invalid email address')
    .required(`Email can't be blank`),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character'
    )
    .required(`Password can't be blank`),
});

const SignupForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form Submitted', values);
  };

  const labelClassName =
    'text-base font-normal text-slate-950 font-inter text-gray-900';
  const inputClassName =
    'border border-outer-space rounded-lg text-sm placeholder:text-sm py-3 px-3 font-inter outline-none transition-all focus:border-2 focus:border-lime';

  const errorClassName = 'text-xs font-normal font-poppins text-red-500 -mt-1';
  return (
    <div className="w-full relative border  self-start px-3 md:px-10 ">
      <div className="flex flex-col gap-6 w-full bg-white relative m-auto py-7 px-5 lg:max-w-[450px] ">
        <h1 className="text-outer-space text-3xl font-medium font-inter">
          Sign up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className={labelClassName} htmlFor="name">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className={errorClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClassName} htmlFor="email">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={errorClassName}
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className={labelClassName} htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={inputClassName}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={errorClassName}
                />
              </div>

              <button
                className="bg-lime rounded-lg py-2.5 px-2  text-outer-space font-semibold font-inter mt-4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign up'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;
