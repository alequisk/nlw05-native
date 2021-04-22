import styled, { css } from 'styled-components/native';
import { SafeArea } from '../../components/layout/SafeArea';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface OuterUserProps {
  isFocused: boolean;
  isFilled: boolean;
};

export const Container = styled(SafeArea)`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: ${ fonts.heading };
  color: ${ colors.heading };
  line-height: 32px;
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const TextInput = styled.TextInput<OuterUserProps>`
  border-bottom-width: 1px;
  border-color: grey;
  color: ${ colors.heading };
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  ${props => (props.isFocused || props.isFilled) && css`
    border-color: ${ colors.green };
  `};
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const BlurTextInput = styled.TouchableWithoutFeedback``;

export const Header = styled.View`
  align-items: center;
`;