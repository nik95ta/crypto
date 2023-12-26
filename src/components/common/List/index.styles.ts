import styled from 'styled-components';

export const Content = styled.div`
  border-radius: 43px;
  background: #131313;
  box-shadow:
    -4px -4px 10px 0px rgba(31, 31, 31, 0.93),
    4px 4px 10px 0px rgba(0, 0, 0, 0.52),
    4px 4px 10px 0px rgba(0, 0, 0, 0.86) inset,
    -4px -4px 10px 0px rgba(22, 22, 22, 0.69) inset;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  background: #131313;
  max-height: 600px;
  overflow-y: scroll;
  width: 323px;
`;
