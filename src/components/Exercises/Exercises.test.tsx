import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercises from './Excercises';

test('renders exercises component', () => {
  render(<Exercises />);
});
