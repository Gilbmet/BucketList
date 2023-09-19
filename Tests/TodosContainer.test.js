import React from 'react';
import { render } from '@testing-library/react-native';
import TodosContainer from './TodosContainer';

describe('TodosContainer component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TodosContainer />);
    const todosContainer = getByTestId('todos-container');
    expect(todosContainer).toBeTruthy();
  });
});
