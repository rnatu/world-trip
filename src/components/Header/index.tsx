/* eslint-disable import/prefer-default-export */
import { Flex, Grid, GridItem, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function Header(): JSX.Element {
  const router = useRouter();

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      width="100vw"
      h={['3.12rem', '6.25rem']}
      p="1rem"
    >
      <Grid maxWidth="1160px" templateColumns="repeat(3, 1fr)" width="100%">
        <GridItem justifySelf="start" alignSelf="center">
          {router.asPath !== '/' && (
            <Link as="a" href="/">
              <Image
                h={['1rem', '2.62rem']}
                src="/returnArrow.svg"
                alt="botão de voltar"
                justifySelf="center"
              />
            </Link>
          )}
        </GridItem>
        <GridItem justifySelf="center" alignSelf="center">
          <Image
            w={['5.06rem', '11.5rem']}
            src="/logo.svg"
            alt="Um avião voando sobre o nome da marca world trip"
          />
        </GridItem>
        <GridItem align="center" justifySelf="end" alignSelf="center" />
      </Grid>
    </Flex>
  );
}
