import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"

import  Header  from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {Input} from "../../components/Form/Input";
import Link from "next/link";
import Head  from "next/head";

type CreateUserFormDate = {
    name: string;
    email: string;
    password: string;
    password_confir: string;
  }
  
  const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome e obrigatorio"),
    email: yup.string().required("E-mail e obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Senha e obrigatoria").min(6, "no minimo 6 carecteres"),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], "As senhas precisa ser iguais") ,
  })



export default function CreateUser(){

    const {register , handleSubmit , formState} = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser:SubmitHandler<CreateUserFormDate> = async(value)=>{
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(value);
        

    }

    return(
        <Box>
            <Head>
                <title>Dashgo | Criação de usuários</title>
            </Head>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box as='form' flex='1' borderRadius={8} bg="gray.800" p={['6', '8']} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size='lg' fontWeight='normal'>Criar usuários</Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input {...register('name')} name='name' label='Nome completo' error={formState.errors.name} />
                            <Input {...register('email')} name='email' type='email' label='E-mail' error={formState.errors.email} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input  {...register('password')}name='password' type='password' label='Senha' error={formState.errors.password} />
                            <Input {...register('password_confirmation')} name='password_confirmation' type='password' label='Confirmação de senha' error={formState.errors.password_confirmation}/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                           
                            <Button type="submit" colorScheme='pink' isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}