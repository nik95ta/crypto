import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 43.4px;
  width: 100%;
  padding: 10px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  box-shadow:
    4px 4px 10px 0 #000 inset,
    -4px -4px 10px 0px rgba(58, 58, 58, 0.89) inset;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #c4c4c4;
  font-family: IranSans, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ::placeholder {
    color: inherit;
  }
`;
