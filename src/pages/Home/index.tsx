import React, { useState } from 'react';
import { Modal } from 'react-native';

import {
  Container,
  Title,
  ArrowsImage,
  UpgradeButton,
  ButtonText,
  Message,
} from './styles';

import updateArrows from '../../assets/update-arrows.png';

import { CustomModal } from '../../components/Modal';

import { useStore } from '../../storage/users.storage';
import { Button } from '../../components/Button';
import { List } from '../List';

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);

  const setAssignment = useStore(state => state.setAssignment);
  const resetAssigned = useStore(state => state.resetAssigned);
  const assigned = useStore(state => state.assigned);
  const users = useStore(state => state.users);

  const toggleModal = () => {
    setModalVisible(oldState => !oldState);
  };

  const handleAssign = () => {
    setAssignment(true).then(_res =>
      setTimeout(() => {
        toggleModal();
      }, 450),
    );
  };

  return (
    <Container>
      <CustomModal
        visible={modalVisible}
        handleClose={toggleModal}
        handleSign={handleAssign}
      />

      <Modal visible={listVisible} animationType="fade">
        <List toggle={() => setListVisible(oldState => !oldState)} />
      </Modal>

      <Title>Configurações</Title>
      <UpgradeButton onPress={toggleModal} disabled={assigned}>
        <ArrowsImage source={updateArrows} />
        <ButtonText>
          {assigned ? 'Você já fez o upgrade' : 'Faça Upgrade agora'}
        </ButtonText>
      </UpgradeButton>

      {users.length > 0 && (
        <>
          <Message>
            {assigned
              ? 'Agradeçemos pela assinatura, que tal ver quem também já assinou?'
              : 'Que tal conhecer nossos assinantes?'}
          </Message>
          <Button
            title="Veja a lista de assinantes"
            onpress={() => setListVisible(oldState => !oldState)}
          />
        </>
      )}

      {assigned && (
        <>
          <Message>
            Mas se preferir pode assinar novamente como outro usuário
          </Message>
          <Button title="Assinar Novamente" onpress={resetAssigned} />
        </>
      )}
    </Container>
  );
};
