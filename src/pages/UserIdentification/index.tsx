import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {
  Text,
  Form,
  Emoji,
  Content,
  Container,
  Header,
  Footer,
  TextInput,
  BlurTextInput,
  KeyboardAvoidingView,
} from './styles';

import Button from '../../components/Button';

export function UserIdentification() {

  const [ isFocused, setIsFocused ] = useState(false);
  const [ isFilled, setIsFilled ] = useState(false);
  const [ name, setName ] = useState<string>();

  const navigation = useNavigation();

  function handleSubmit() {
    if (isFilled)
      navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }>
        <BlurTextInput
          onPress={Keyboard.dismiss}
        >
          <Content>
            <Form>
              <Header>
                <Emoji>
                  {isFilled ? '😄' : '😃'}
                </Emoji>
                <Text>
                  Como podemos{'\n'}chamar você?
                </Text>
              </Header>

              <TextInput
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                isFocused={isFocused}
                isFilled={isFilled}
              />
              <Footer>
                <Button
                  title="Confirmar"
                  onPress={handleSubmit}
                  isDisable={!isFilled}
                />
              </Footer>
            </Form>
          </Content>
        </BlurTextInput>
      </KeyboardAvoidingView>
    </Container>
  )
}