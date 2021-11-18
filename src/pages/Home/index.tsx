import { saveUser } from '../../data/helpers';
import React from 'react';

import { Container, Title } from './styles';
import { Button } from 'react-native';

const userSafe = async () => {
  await saveUser({ assigned: false });
};

export const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Button title="assign" onPress={userSafe} />
    </Container>
  );
};
