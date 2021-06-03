import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise from './Exercise';

test('renders exercise component', () => {
  render(<Exercise name={"abelant"} transcript={"h1."} image={"a"} bodyAreas={[]} />);
});
