import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Header title="My Todo App" />);
    const titleElement = getByText('My Todo App');
    expect(titleElement).toBeTruthy();
  });
});
