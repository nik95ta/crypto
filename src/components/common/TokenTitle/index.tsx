import React from 'react';
import { Container, Name, Symbol } from './index.styles';

interface TokenTitleProps {
  symbol: string;
  name: string;
}

const TokenTitle: React.FC<TokenTitleProps> = ({ symbol, name }) => (
  <Container>
    <Symbol>{symbol}</Symbol>
    <Name>{name}</Name>
  </Container>
);

export default TokenTitle;
