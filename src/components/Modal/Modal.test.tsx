import React from 'react';
import { render, screen,fireEvent} from '@testing-library/react';
import Modal from './Modal';

test('modal shows the children and a close button', async () => {
    const handleClose = jest.fn()
  
    const { getByTestId } = render(<Modal showModal={true} setShowModal={handleClose} />, {})
   
    const close = getByTestId('close')

    fireEvent.click(close);
  
    expect(handleClose).toHaveBeenCalled()
  })
