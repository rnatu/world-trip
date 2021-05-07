/* eslint-disable import/prefer-default-export */
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';

export function Header(): JSX.Element {
  return (
    <Flex
      justify="center"
      align="center"
      width="100vw"
      h={['50px', '100px']}
      p="1rem"
    >
      <Grid maxWidth="1160px" templateColumns="repeat(3, 1fr)" width="100%">
        <GridItem align="center" justifySelf="start">
          <Image
            h={['16px', '32px']}
            src="/returnArrow.svg"
            alt="Um avição voando sobre o nome da marca world trip"
            justifySelf="center"
            gridColumn="2"
          />
        </GridItem>
        <GridItem align="center" justifySelf="center">
          <Image
            w={['81px', '184px']}
            src="/logo.svg"
            alt="Um avição voando sobre o nome da marca world trip"
            justifySelf="center"
            gridColumn="2"
          />
        </GridItem>
        <GridItem align="center" justifySelf="end" />
      </Grid>
    </Flex>
  );
}
