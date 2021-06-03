import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise from './Exercise';

test('renders exercise component', () => {
  render(<Exercise name={"test"} transcript={"<h1> Test</h1>"} image={"https://image.png"} bodyAreas={[]} />);
});
