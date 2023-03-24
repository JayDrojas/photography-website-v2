import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is Required.').max(100),
  email: z.string().email('Invalid email').min(1, 'Email is required.'),
  phoneNumber: z
    .string()
    .min(1, 'Please provide a phone number to reach you at.'),
  sessionType: z
    .string()
    .min(1, 'Please provide a session description.')
    .max(500),
  projectDate: z.preprocess(
    (arg) => {
      if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
    },
    z
      .date({
        required_error: 'Please select a date and time',
        invalid_type_error: "That's not a date!"
      })
      .min(new Date(), { message: 'Please select a future date.' })
  ),
  heardAboutMe: z.string(),
  tellMeMore: z.string().max(500),
  insta: z.string().max(500)
});
