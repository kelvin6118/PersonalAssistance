import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import user from '@testing-library/user-event'
import renderConnected from './utils/renderConnect'
import Landing from '../Landing'

describe('LoginForm', ()=>{
    const onSubmit = jest.fn();

    beforeEach(()=>{
        onSubmit.mockClear();
        renderConnected(<Landing onSubmit={onSubmit}/>);
    })

    it('onSubmit is called when all fields pass validation', async () => {
        const username = screen.getByPlaceholderText(/username/i);
        user.type(username, 'kelvin6118');
        const password = screen.getByPlaceholderText(/password/i);
        user.type(password, 'abccba123');
        const submit = screen.getByRole('button', {
            name: /login/i
          })     
        user.click(submit);

        await waitFor(()=> {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        })
    })
})
