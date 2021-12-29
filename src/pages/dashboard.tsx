import { Box, Flex, SimpleGrid, Text , theme } from "@chakra-ui/react";
import Header  from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import Head from "next/head";



//Para funcionar o chart o grafico, precisa usar o Dynamic do next para ele rodar no client
const Chart = dynamic(()=> import('react-apexcharts'),{
  ssr: false,
})

//estilizando o grafico
const options = {
  chart:{
    toolbar:{
      show:false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid:{
    show:false
  },
  dataLabels:{
    enabled: false,
  },
  tooltipe:{
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder:{
      color: theme.colors.gray[600]
    },
    axisTicks:{
      color: theme.colors.gray[600]
    },
    categories:[
      '2021-03-18T00:00:00.000z',
      '2021-03-19T00:00:00.000z',
      '2021-03-20T00:00:00.000z',
      '2021-03-21T00:00:00.000z',
      '2021-03-22T00:00:00.000z',
      '2021-03-23T00:00:00.000z',
      '2021-03-24T00:00:00.000z',
      
    ]
  },
  fill:{
    opacity: 0.3,
    type: 'gradient',
    gradient:{
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3

    }

  }
}


const series = [
  {
  name: "series1",
  data:[31,120,10,28,61,18,109]
  }
]


export default function Dashboard(){
    return(
        <Flex direction='column' h='100vh'>
          <Head>
            <title>Dashgo | Dashboard</title>
          </Head>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
              <Sidebar />  
                <SimpleGrid flex="1" gap="4" minChildWidth='320px' aling='flex-start'>
                  <Box
                  p={['6' ,'8']}
                  bg='gray.800'
                  borderRadius={8}
                  >
                      <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                      <Chart options={options} series={series} type="area" height={160} />
                  </Box>

                  <Box
                  p={['6' ,'8']}
                  bg='gray.800'
                  borderRadius={8}
                  >
                      <Text fontSize='lg' mb='4'>Taxa de abertura</Text>
                      <Chart options={options} series={series} type="area" height={160} />
                  </Box>
               </SimpleGrid>
            </Flex>
        </Flex>
       
     )
}