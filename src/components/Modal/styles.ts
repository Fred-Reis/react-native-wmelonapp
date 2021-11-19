import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding: 100px;
  position: relative;
  width: 90%;
  padding: 40px 25px;
  background: #e2e6ea;

  border-radius: 4px;
  elevation: 10;
  justify-content: center;
  align-items: center;

  shadow-color: '#A1AAB4';
  shadow-offset: {
    width: 0;
    height: 4;
  }
  shadow-opacity: 0.3;
  shadow-radius: 2px;
  elevation: 8;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  color: #43505c;
  text-align: center;
  margin-bottom: 30px;
`;

export const Message = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: #43505c;
  text-align: center;
  margin: 15px 0 20px;
`;

export const Strong = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: #43505c;
  text-align: center;
  font-weight: bold;
`;

export const CloseContainer = styled.TouchableOpacity`
  padding: 5px;
  position: absolute;
  flex: 1;
  top: 15px;
  right: 15px;
`;

export const CloseButton = styled.Image`
  height: 15px;
  width: 15px;
`;

export const JobsImage = styled.Image`
  width: 175px;
  height: 175px;
`;

export const SignButton = styled.TouchableOpacity`
  border: 1px solid #fc6cad;
  background: #f6f6f9;
  width: 90%;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const SignText = styled.Text`
  color: #f751a0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
`;

export const FooterText = styled.Text`
  margin-top: 22px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  width: 70%;

  color: #62707e;
`;
