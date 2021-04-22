import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${ Platform.OS === 'android' ? 25 : 0 }px;
`;