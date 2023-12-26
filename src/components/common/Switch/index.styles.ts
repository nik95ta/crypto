import styled from 'styled-components';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 20px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  ${SwitchInput}:checked + & {
    border-radius: 43.4px;
    opacity: 0.5858;
    background: #131313;
    box-shadow:
      -4px -4px 10px 0px rgba(58, 58, 58, 0.93),
      4px 4px 10px 0px rgba(0, 0, 0, 0.52),
      4px 4px 10px 0px rgba(0, 0, 0, 0.86) inset,
      -4px -4px 10px 0px rgba(58, 58, 58, 0.69) inset;

    &:before {
      background-color: #e5ece9;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25) inset;
    }
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(26px);
  }

  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 43.4px;
  opacity: 0.5858;
  background: #131313;
  box-shadow:
    -4px -4px 10px 0px rgba(58, 58, 58, 0.93),
    4px 4px 10px 0px rgba(0, 0, 0, 0.52),
    4px 4px 10px 0px rgba(0, 0, 0, 0.86) inset,
    -4px -4px 10px 0px rgba(58, 58, 58, 0.69) inset;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #6a6a6a;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
