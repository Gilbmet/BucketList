import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTodoButton from './AddTodoButton';

describe('AddTodoButton component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AddTodoButton />);
    const addButton = getByText('Add');
    expect(addButton).toBeTruthy();
  });

  it('calls the provided onPress function when the button is clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<AddTodoButton onPress={onPressMock} />);
    const addButton = getByText('Add');

    fireEvent.press(addButton);

    expect(onPressMock).toHaveBeenCalled();
  });
});
