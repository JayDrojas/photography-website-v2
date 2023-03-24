import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
  VStack
} from '@chakra-ui/react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { formSchema } from '../utils/formSchemas';

type FormSchemaType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const toast = useToast();
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = () => {
    if (!form.current) return;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        (result) => {
          toast({
            title: 'Message sent.',
            description:
              "We've sent a message to Arely. She will get back to you as soon as she can.",
            status: 'success',
            duration: 9000,
            isClosable: true
          });
          reset();
        },
        (error) => {
          toast({
            title: 'Message Error.',
            description:
              'We have failed to send your message. Please try again later.',
            status: 'error',
            duration: 9000,
            isClosable: true
          });
        }
      );
  };

  return (
    <>
      <Flex w='full' flexDir='column' gap={4}>
        <Container maxW='container.md' h='full'>
          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <VStack gap={4}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel fontWeight='bold'>Name</FormLabel>
                <Input type='text' {...register('name')} name='name' />
                <FormErrorMessage color='black'>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.phoneNumber}>
                <FormLabel fontWeight='bold'>Phone Number</FormLabel>
                <Input type='text' {...register('phoneNumber')} />
                <FormErrorMessage>
                  {errors.phoneNumber && errors.phoneNumber.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel fontWeight='bold'>Email address</FormLabel>
                <Input type='email' {...register('email')} />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.sessionType}>
                <FormLabel fontWeight='bold'>
                  What type of session are you looking for? (Wedding, Maternity,
                  Couples, etc.)
                </FormLabel>
                <Textarea {...register('sessionType')} />
                <FormErrorMessage>
                  {errors.sessionType && errors.sessionType.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.projectDate}>
                <FormLabel fontWeight='bold'>Project Date</FormLabel>
                <Input type='date' {...register('projectDate')} />
                <FormErrorMessage>
                  {errors.projectDate && errors.projectDate.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.heardAboutMe}>
                <FormLabel fontWeight='bold'>
                  How did you hear about me?
                </FormLabel>
                <Select
                  placeholder='Select option'
                  {...register('heardAboutMe')}
                >
                  <option value='Facebook'>Facebook</option>
                  <option value='Instagram'>Instagram</option>
                  <option value='From  a friend'>From a friend</option>
                  <option value='Other'>Other</option>
                </Select>
                <FormErrorMessage>
                  {errors.heardAboutMe && errors.heardAboutMe.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.tellMeMore}>
                <FormLabel fontWeight='bold'>
                  Tell me more about this project.
                </FormLabel>
                <Textarea {...register('tellMeMore')} />
                <FormErrorMessage>
                  {errors.tellMeMore && errors.tellMeMore.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight='bold'>What is you instagram?</FormLabel>
                <Input
                  type='text'
                  {...register('insta')}
                  placeholder='example: @arelygizelphotography'
                />
              </FormControl>
              <Button disabled={isSubmitting} type='submit'>
                Send Message
              </Button>
            </VStack>
          </form>
        </Container>
      </Flex>
    </>
  );
};

export default ContactForm;
