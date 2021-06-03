import React from 'react';
import { render, act, fireEvent, getByTestId} from '@testing-library/react';
import Exercises from './Excercises';
import axios from 'axios';

jest.mock('axios');

const data = {
    exercises:{
        name:'Test',
        transcript:'Transcript',
        female:{
            image:'test'
        },
        male:{
            image:'test'
        },
        bodyAreas:['body','areas']
    }
}
describe('Exercises', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('load data from api', async () => {
        const mockAxios = axios as jest.Mocked<typeof axios>
        await act(async () => {
            await mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
            const { getByTestId } = render(<Exercises/>)
        })
        await expect(axios.get).toHaveBeenCalledWith("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/");
        await expect(axios.get).toHaveBeenCalledTimes(1);
    })
    test('render and click buttons', async  () => {
        const mockAxios = axios as jest.Mocked<typeof axios>
        await act(async () => {
            await mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
            const { getByTestId } = render(<Exercises/>)
            
            const femaleButon = getByTestId('female')
            const maleButton = getByTestId('male')

            fireEvent.click(getByTestId('female'))
            fireEvent.click(getByTestId('male'))

            expect(femaleButon.textContent).toBe('FEMALE')
            expect(maleButton.textContent).toBe('MALE')
        })
    })

})
