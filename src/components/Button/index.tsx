import React from 'react';

import { SignButton, SignText } from './styles';

interface ButtonProps {
  title: string;
  onpress: () => any;
}

export const Button = ({ title, onpress }: ButtonProps) => {
  return (
    <SignButton onPress={onpress}>
      <SignText>{title}</SignText>
    </SignButton>
  );
};
