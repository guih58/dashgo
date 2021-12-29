import {Flex , Button , Stack, Box, Text } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import Head from 'next/head'

type SignInFormData = {
  email: string;
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail e obrigatorio").email("E-mail invalido"),
  senha: yup.string().required("Senha e obrigatoria")
})

export default function SignIn() {

const {register , handleSubmit , formState} = useForm({
  resolver: yupResolver(signInFormSchema)
})


const handleSignIn: SubmitHandler<SignInFormData> = async(values)=>{
 
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log(values);
  
}

  return (
   
   <Flex
      w="100vw"
      h="100vh"
      align='center'
      justify='center'
      direction='column'
    >
       <Head>
      <title>Dashgo | Entrar</title>
    </Head>
      <Box align='center' justify='center' mb='4rem'>
      <Text
        fontSize='3rem'
        fontWeight='bold'
        letterSpacing='tight'
        w="64"

       >
      Dashgo
      <Text as='span' ml='1' color='pink.500' fontSize='3rem'>.</Text>    
      </Text> 
      </Box>
      

        <Flex
          as="form"
          action='/dashboard'
          method='post'
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p='8'
          borderRadius={8}
          flexDir={"column"}
          onSubmit={handleSubmit(handleSignIn)}
        >
       <Stack spacing={4}> 

      <Input 
      name='email'
      type='email'
      label='E-mail' 
      error={formState.errors.email}
      {...register('email')}
      />

      <Input 
      name='password'
      type='password'
      label='Senha' 
      {...register('password')}
      error={formState.errors.password}
      />
        
   
       </Stack>

        <Button
          type='submit'
          mt={'6'}
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
          >Entrar</Button>

        </Flex>
       
    </Flex>
  )
}
