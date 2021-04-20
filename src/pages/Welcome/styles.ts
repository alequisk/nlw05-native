import styled from 'styled-components/native';
import { Platform } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${ Platform.OS === 'android' ? '25px' : '0' };
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${ colors.heading };
  margin-top: 38px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${ colors.heading };
`;

export const Button = styled.TouchableOpacity`
  background-color: ${ colors.green };
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 56px;
  margin-bottom: 15px;
  padding: 0 10px;
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;

export const ButtonText = styled.Text`
  color: ${ colors.white };
  font-size: 24px;
`;