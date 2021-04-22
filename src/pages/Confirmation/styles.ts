import styled from 'styled-components/native';
import { SafeArea } from '../../components/layout/SafeArea';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled(SafeArea)`
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-family: ${ fonts.heading };
  color: ${ colors.heading };
  font-size: 22px;
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${ fonts.text };
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
  color: ${ colors.heading };
`;

export const Emoji = styled.Text`
  font-size: 72px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
`;