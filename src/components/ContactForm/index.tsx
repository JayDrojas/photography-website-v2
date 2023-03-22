import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  VStack
} from '@chakra-ui/react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name is Required').max(100),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  phoneNumber: z.string(),
  sessionType: z.string().max(500),
  projectDate: z.date({
    required_error: 'Please select a date and time',
    invalid_type_error: "That's not a date!"
  }),
  heardAboutMe: z.string(),
  tellMeMore: z.string().max(500),
  insta: z.string().max(500)
});

type FormSchemaType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log('asjdlkfas;ldkfj;lkj');
    console.log(data);
  };

  return (
    <>
      <Flex w='full' flexDir='column' gap={4}>
        <Container maxW='container.md' h='full'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={4}>
              <FormControl>
                <FormLabel fontWeight='bold'>Name</FormLabel>
                <Input type='text' {...register('name')} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>Phone Number</FormLabel>
                <Input type='text' {...register('phoneNumber')} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>Email address</FormLabel>
                <Input type='email' {...register('name')} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>
                  What Type of session are you looking for? (wedding, Maternity,
                  Couples, etc.)
                </FormLabel>
                <Input type='text' {...register('sessionType')} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>Project Date</FormLabel>
                <Input type='date' {...register('projectDate')} />
                <FormErrorMessage>
                  {errors.projectDate && errors.projectDate.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>
                  How did you hear about me?
                </FormLabel>
                <Select placeholder='Select option'>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>From a friend</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>
                  Tell me more about this project.
                </FormLabel>
                <Input type='text' {...register('tellMeMore')} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>What is you instagram?</FormLabel>
                <Input
                  type='text'
                  {...register('insta')}
                  placeholder='example: @arelygizelphotography'
                />
                <FormHelperText></FormHelperText>
              </FormControl>
              <Button type='submit'>Send Message</Button>
            </VStack>
          </form>
        </Container>
      </Flex>
    </>
  );
};

export default ContactForm;
