import React from 'react';
import { render } from '@testing-library/react-native';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TodoItem text="Example Todo" />);
    const todoText = getByText('Example Todo');
    expect(todoText).toBeTruthy();
  });
});
