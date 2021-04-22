import React from 'react';
import Button from '../../components/Button';

import {
  Wrapper,
  Emoji,
  Title,
  Subtitle,
  Content,
  Footer,
} from './styles';

export function Confirmation() {
  return (
    <Wrapper>
      <Content>
        <Emoji>
          {'😄'}
        </Emoji>
        <Title>
          Prontinho
        </Title>
        <Subtitle>
          Agora vamos cuidar das suas plantinhas com muito cuidado.
        </Subtitle>
        <Footer>
          <Button title="Começar" />
        </Footer>
      </Content>
    </Wrapper>
  )
}