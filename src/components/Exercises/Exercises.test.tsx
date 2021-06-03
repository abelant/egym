import React from 'react';
import { render, cleanup, waitFor, act} from '@testing-library/react';
import Exercises from './Excercises';
import axios from 'axios';
jest.mock('axios');

afterEach(cleanup);

describe('Exercises', () => {
    it('renders exercises component',  () => {
        act(() => {
            render(<Exercises />)
        });
    });
    it('fetches and display data', async () => {
        const { getByTestId } = render(<Exercises />)
        const mockAxios = axios as jest.Mocked<typeof axios>
        const data = {
            exercises:{
                name: 'Name',
                transcript: 'Transcript',
                female:{
                    image:'image.png'
                },
                male:{
                    image:'image.png'
                },
                bodyAreas:['Body', 'Areas']
            }
        }

        await waitFor(() => expect(getByTestId('loading').textContent).toBe("Loading..."));
        
        mockAxios.get.mockResolvedValueOnce({data: {}})
        mockAxios.get.mockRejectedValue('Network error: something went wrong');
        mockAxios.get.mockImplementationOnce(() => Promise.resolve(data))
        
        expect(await mockAxios.get).toHaveBeenCalledWith('https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/');
    })
    it('should click buttons', async () => {
        const { getByTestId } = render(<Exercises />)
    });
})
