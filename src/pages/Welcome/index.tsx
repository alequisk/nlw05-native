import { useNavigation } from '@react-navigation/core';
import React from 'react';
import wateringImg from '../../assets/watering.png';

import { Container, Title, Subtitle, Image, Button, ButtonIcon, Wrapper } from './styles';

export function Welcome() {
  
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie{'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Title>

        <Image
          resizeMode="contain"
          source={wateringImg}
        />

        <Subtitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Subtitle>

        <Button activeOpacity={0.7} onPress={handleStart}>
          <ButtonIcon name="chevron-right" />
        </Button>
      </Wrapper>
    </Container>
  )
}

