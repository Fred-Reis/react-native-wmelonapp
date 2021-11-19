import { saveUser, observeUsers } from '../../data/helpers';
import React, { useState } from 'react';

import {
  Container,
  Title,
  ArrowsImage,
  UpgradeButton,
  ButtonText,
} from './styles';

import updateArrows from '../../assets/update-arrows.png';
import { CustomModal } from '../../components/Modal';

const userSafe = async () => {
  await saveUser({ assigned: false });
};
// const observe = () => {
//   const ob = observeUsers();
//   console.log(ob.);
// };

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(oldState => !oldState);
  };
  return (
    <Container>
      <CustomModal
        visible={modalVisible}
        handleClose={toggleModal}
        handleSign={userSafe}
      />
      <Title>Configurações</Title>
      <UpgradeButton onPress={toggleModal}>
        <ArrowsImage source={updateArrows} />
        <ButtonText>Faça Upgrade agora</ButtonText>
      </UpgradeButton>
    </Container>
  );
};
