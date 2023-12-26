import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '../index';

describe('Switch Component', () => {
  it('renders correctly', () => {
    render(<Switch isOn={false} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('toggles state when clicked', () => {
    const onToggleMock = jest.fn();
    render(<Switch isOn={false} onToggle={onToggleMock} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it('reflects the isOn prop correctly', () => {
    render(<Switch isOn={true} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
});
