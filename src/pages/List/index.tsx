import React from 'react';

import {
  Container,
  Content,
  Title,
  BackButton,
  BackContainer,
  ListContainer,
  ListItemContainer,
  ItemId,
  CreatedAt,
  LabelsContainer,
  Label,
} from './styles';

import back from '../../assets/back.png';

import { useStore } from '../../storage/users.storage';

interface ListProps {
  toggle: () => void;
}

interface ItemProps {
  id: string;
  createdAt: string;
}

const ListItem = ({ id, createdAt }: ItemProps) => (
  <ListItemContainer>
    <ItemId>{id}</ItemId>
    <CreatedAt>{createdAt}</CreatedAt>
  </ListItemContainer>
);

const renderItem = ({ item }: any) => (
  <ListItem id={item.id} createdAt={item.createdAt} />
);

export const List = ({ toggle }: ListProps) => {
  const users = useStore(state => state.users);

  return (
    <Container>
      <BackContainer onPress={toggle}>
        <BackButton source={back} />
      </BackContainer>

      <Content>
        <Title>Veja quantas pessoas já Assinaram JurisHand!</Title>

        <LabelsContainer>
          <Label>User Id</Label>
          <Label>Data Assinatura</Label>
        </LabelsContainer>
        <ListContainer data={users} renderItem={renderItem} />
      </Content>
    </Container>
  );
};
