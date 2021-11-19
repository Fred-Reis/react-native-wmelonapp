import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Content = styled.View`
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  width: 90%;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #43505c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const BackContainer = styled.TouchableOpacity`
  padding: 5px;
  position: absolute;
  flex: 1;
  top: 40px;
  left: 35px;
`;

export const BackButton = styled.Image`
  width: 25px;
`;

export const ListContainer = styled.FlatList`
  padding: 0 10px;
`;

export const ListItemContainer = styled.View`
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-evenly;

  border-radius: 4px;
  elevation: 10;

  align-items: center;

  shadow-color: '#fc6cad';
  shadow-offset: {
    width: 0;
    height: 4;
  }
  shadow-opacity: 0.3;
  shadow-radius: 2px;

  elevation: 8;
  width: 100%;
  padding: 20px 0;
  margin: 5px 0;

  border: 1px solid #fc6cad;
  background: #f6f6f9;
`;

export const ItemId = styled.Text`
  font-size: 15px;
  line-height: 24px;
  color: #f751a0;
  text-align: center;
  font-weight: bold;
`;

export const CreatedAt = styled.Text`
  font-size: 15px;
  line-height: 24px;
  color: #f751a0;
  text-align: center;
  font-weight: bold;
`;

export const LabelsContainer = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  padding: 0 10px 5px;
  margin-bottom: 15px;

  border-bottom-color: #62707e;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const Label = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #62707e;
  font-weight: bold;
`;
