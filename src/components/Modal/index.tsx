import React from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import {
  Container,
  Title,
  JobsImage,
  Content,
  Message,
  Strong,
  CloseContainer,
  CloseButton,
  FooterText,
} from './styles';

import jobs from '../../assets/jobs.png';
import fechar from '../../assets/fechar.png';
import { Button } from '../Button';

interface Props extends ModalProps {
  visible: boolean;
  handleSign: () => void;
  handleClose: () => void;
}

export const CustomModal = ({
  visible,
  handleClose,
  handleSign,
  ...rest
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={handleClose}
      visible={visible}
      {...rest}>
      <Container onPress={handleClose}>
        <TouchableWithoutFeedback>
          <Content>
            <CloseContainer onPress={handleClose}>
              <CloseButton source={fechar} />
            </CloseContainer>

            <Title>Faça upgrade no JurisHand e seja feliz.</Title>

            <JobsImage source={jobs} />

            <Message>
              Assine por <Strong> R$ 299,90 por ano</Strong> (R$ 24,90 por mês)
            </Message>

            <Button title="Assine agora" onpress={handleSign} />
          </Content>
        </TouchableWithoutFeedback>
        <FooterText>
          Você será cobrado imediatamente. Sem período trial.
        </FooterText>
      </Container>
    </Modal>
  );
};
