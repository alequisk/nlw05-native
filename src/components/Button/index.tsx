import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isDisable?: boolean;
};

const Text = styled.Text`
  font-size: 16px;
  color: ${ colors.white };
  font-family: ${ fonts.heading };
`;

function ButtonComponent({ title, activeOpacity, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={activeOpacity || 0.7} {...rest}>
      <Text>
        { title }
      </Text>
    </TouchableOpacity>
  )
};

const Button = styled(ButtonComponent)`
  background-color: ${ props => !props.isDisable ? colors.green : colors.gray };
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export default Button;
