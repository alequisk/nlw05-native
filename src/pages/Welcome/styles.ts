import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${ Platform.OS === 'android' ? '25px' : '0' };
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: ${ colors.heading };
  padding-top: 10px;
  font-family: ${ fonts.heading };
  line-height: 34px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  font-family: ${ fonts.text };
  color: ${ colors.heading };
`;

export const Button = styled.TouchableOpacity`
  background-color: ${ colors.green };
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 56px;
  padding: 0 10px;
`;

export const Image = styled.Image`
  width: ${ Dimensions.get('window').width * 0.7 }px;
  height: 284px;
`;

export const ButtonIcon = styled(Feather)`
  font-size: 32px;
  color: ${ colors.white };
`;