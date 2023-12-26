import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBox from '../index';

describe('SearchBox Component', () => {
  it('calls onChange when the input changes', () => {
    const onChangeMock = jest.fn();
    render(<SearchBox value="" onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText('جستجو ...');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(onChangeMock).toHaveBeenCalledWith('new value');
  });
});
