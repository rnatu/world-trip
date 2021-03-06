import { Divider, Text } from '@chakra-ui/layout';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Banner />

        <TravelTypes />

        <Divider
          mt={['2.25rem', '3rem', '5rem']}
          mx="auto"
          width={['60px', '90px']}
          borderWidth="1px"
          borderColor="#47585B"
        />

        <Text
          color="blueGray.700"
          fontSize={['1.25rem', '2.25rem']}
          fontWeight="500"
          mt={['1.5rem', '2.35rem']}
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Slider />
      </main>
    </>
  );
}
