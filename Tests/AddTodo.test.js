import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddTodo from './AddTodo';

describe('AddTodo component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<AddTodo />);
    const addButton = getByText('Add Todo');
    expect(addButton).toBeTruthy();
  });

  it('calls the provided addTodo function when the button is clicked', () => {
    const addTodoMock = jest.fn();
    const { getByText } = render(<AddTodo addTodo={addTodoMock} />);
    const addButton = getByText('Add Todo');

    fireEvent.press(addButton);

    expect(addTodoMock).toHaveBeenCalled();
  });
});
