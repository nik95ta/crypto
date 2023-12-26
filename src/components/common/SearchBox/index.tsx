import React from 'react';
import { Container, Input } from './index.styles';

interface SearchBoxProps {
  value: string;
  onChange: (str: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange }) => (
  <Container>
    <Input type='text' value={value} onChange={(e) => onChange(e.target.value)} placeholder='جستجو ...' />
  </Container>
);

export default SearchBox;
