import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 18px 23px 18px 0;
  gap: 25px;
  align-items: center;
  flex: 50%;
`;

export const Symbol = styled.div`
  background-color: #1a1a1a;
  padding: 16px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #e3e3e3;
  box-shadow:
    -4px -4px 10px 0px rgba(58, 58, 58, 0.93),
    4px 4px 10px 0px rgba(0, 0, 0, 0.52);
`;

export const Name = styled.p`
  font-size: 15px;
  color: #e3e3e3;
`;
