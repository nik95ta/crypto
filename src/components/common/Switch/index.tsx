import React from 'react';
import { Slider, SwitchInput, SwitchLabel } from './index.styles';

interface SwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  return (
    <SwitchLabel>
      <SwitchInput type='checkbox' checked={isOn} onChange={onToggle} />
      <Slider />
    </SwitchLabel>
  );
};

export default Switch;
