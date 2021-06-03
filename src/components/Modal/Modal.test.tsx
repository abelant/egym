import React from 'react';
import { render, screen,fireEvent, waitFor} from '@testing-library/react';
import Modal from './Modal';
import GlobalModal from './GlobalModal'

describe('Modal', () => {
    test('modal shows the children and a close button', async () => {
        const handleClose = jest.fn()
      
        const { getByTestId } = render(<Modal showModal={true} setShowModal={handleClose} />, {})
       
        const close = getByTestId('close')
    
        fireEvent.click(close);
      
        expect(handleClose).toHaveBeenCalled()
    })
})

describe('GloabalModal', ()=> {
    test('global modal shows the children and a render buttons', async () => {
  
        const { getByTestId } = render(<GlobalModal showModal={true} setGender={"male"} />, {})
        const femaleButton = getByTestId('female')
        const maleButton = getByTestId('male')
    
        await waitFor(async()=> {
            expect(maleButton.textContent).toBe('MALE')
            expect(femaleButton.textContent).toBe('FEMALE')
        })
       
    })
})

