import React from 'react';
import wateringImg from '../../assets/watering.png';

import { Container, Title, Subtitle, Image, ButtonText, Button } from './styles';

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie{'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Title>

      <Image source={wateringImg} />

      <Subtitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Subtitle>

      <Button activeOpacity={0.7} >
        <ButtonText>
          {'>'}
        </ButtonText>
      </Button>
    </Container>
  )
}

