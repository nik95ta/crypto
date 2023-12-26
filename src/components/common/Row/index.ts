import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-bottom: 1px solid #282828;
    filter: drop-shadow(0px -4px 0px #000) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &:last-child::after {
    content: none;
  }
`;

export default Row;
