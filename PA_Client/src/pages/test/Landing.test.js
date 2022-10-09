import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import Landing from '../Landing'
import user from '@testing-library/user-event'
import renderConnected from './utils/renderConnect'

describe('LoginForm', ()=>{
    let wrapper, getByText;
    const initialState = {

    };
    const onSubmit = jest.fn();

    beforeEach(()=>{
        onSubmit.mockClear();
            const utils = renderConnected(<Landing />, { initialState });
            wrapper = utils.container;
    })

    it('onSubmit is called when all fields pass validation', async () => {
        const username = screen.getByPlaceholderText(/username/i);
        user.type(username, 'kelvin6118');
        const password = screen.getByPlaceholderText(/password/i);
        user.type(password, '123455');

        const submit = screen.getByRole('button', {
            name: /login/i
          });
        user.click(submit);

        await waitFor(()=> {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        })
        
        expect(onSubmit).toHaveBeenCalledWith({lazy:true})
    })
})
