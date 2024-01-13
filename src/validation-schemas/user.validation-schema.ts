import { array, number, object, string } from 'yup';

const validateUserIdParam = (und: boolean = false) =>
  object({
    userId: string()
      .nullable()
      .test('is-uuidv4', 'Invalid userId. Must be a valid UUID.', (value) => {
        if (und && value === undefined) return true;
        const uuidv4Regex =
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return uuidv4Regex.test(value || '');
      })
  });
export const addUserSchema = object({
  body: object({
    username: string()
      .required('Username is required')
      .matches(/^[A-Za-z][A-Za-z]{2,}$/, 'Invalid Username.'),
    age: number()
      .required('Age is required.')
      .typeError('Age must be a valid number')
      .positive('Age must be a positive number.')
      .integer('Age must be whole number.')
      .min(1, 'Age must be greater than 0')
      .max(100, 'Age must be more less than or equal to 100'),
    hobbies: array()
      .typeError('Hobby must be a valid array of strings.')
      .of(string().required('Hobby must be a non-empty'))
      .required('Hobbies is required.')
  })
});
export const getUserSchema = object({
  params: validateUserIdParam(true)
});
export const updateUserSchema = object({
  params: validateUserIdParam(false),
  body: object({
    username: string()
      .required('Username is required')
      .matches(/^[A-Za-z][A-Za-z]{2,}$/, 'Invalid Username.'),
    age: number()
      .required('Age is required.')
      .typeError('Age must be a valid number')
      .positive('Age must be a positive number.')
      .integer('Age must be whole number.')
      .min(1, 'Age must be greater than 0')
      .max(100, 'Age must be more less than or equal to 100'),
    hobbies: array()
      .typeError('Hobby must be a valid array of strings.')
      .of(string().required('Hobby must be a non-empty'))
      .required('Hobbies is required.')
  })
});
export const deleteUserSchema = object({
  params: validateUserIdParam(false)
});
