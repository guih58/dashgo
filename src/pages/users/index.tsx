import { Box, Button, Checkbox, Flex, Heading, Icon, Text ,Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import  Header  from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";



export default function UserList(){

    const {data , isLoading ,  isFetched ,error}= useUsers()


    



    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

 

    return(
        <Box>
            <Head>
                <title>Dashgo | Usuários</title>
            </Head>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} bg="gray.800" p='8'>
                    <Flex mb="8" justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        
                        <Link href='http://localhost:3000/users/create'>
                        <Button 
                         as='a'
                         size='sm'
                         fontSize='sm'
                         colorScheme='pink'
                         leftIcon={<Icon as={RiAddLine} />}
                         
                        >
                         Criar Novo</Button>
                         </Link>
                    </Flex>
                    { isLoading ? (
                       <Flex justify='center'>
                           <Spinner />

                       </Flex> 
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ): (
                        <>
                        <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4' ,'6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(user => {
                                return(
                                    <Tr key={user.id}>
                                <Td>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>{user.name}</Text>
                                        <Text fontSize='sm' color='gray.300'>user.email</Text>
                                    </Box>
                                </Td>
                               { isWideVersion &&  <Td>{user.createdAt}</Td>}
                                <Td>
                                    <Button 
                                    as='a'
                                    size='sm'
                                    fontSize="sm"
                                    colorScheme='purple'
                                    leftIcon={<Icon as={RiPencilLine}/>}
                                    >
                                        {isWideVersion ? "Editar" : ''}
                                    </Button>
                                </Td>
                            </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                    </>
                    )}
                  
                <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}