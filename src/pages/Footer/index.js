import React from 'react';
import { MdHelpOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <span id="text1">Dom Rock &copy; Todos os direitos reservados.</span>
      <span id="text2">
        Central de ajuda
        <MdHelpOutline size={18} color="#FFF" />
      </span>
    </Container>
  );
}
