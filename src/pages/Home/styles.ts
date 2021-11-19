import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  line-height: 33px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #43505c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

export const Message = styled.Text`
  font-size: 18px;
  text-align: center;
  margin: 20px;
  color: #43505c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const UpgradeButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #62707e;
`;

export const ArrowsImage = styled.Image`
  height: 20px;
  width: 20px;
`;
