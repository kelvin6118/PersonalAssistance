import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import user from '@testing-library/user-event'
import renderConnected from './utils/renderConnect'
import Signup from '../SignUp'

describe('LoginForm', ()=>{
    const onSubmit = jest.fn();

    beforeEach(()=>{
        onSubmit.mockClear();
        renderConnected(<Signup />);
    })

    it('Sign up form to be rendered', async () => {
        const username = screen.getByPlaceholderText(/username/i);
        const password = screen.getByPlaceholderText(/password/i);
        const email = screen.getByPlaceholderText(/email/i);
        const register = screen.getByRole('button', {
            name: /register/i
          });

        


        expect(username).toBeTruthy()
        expect(password).toBeTruthy()
        expect(email).toBeTruthy()
        expect(register).toBeTruthy()
    })


})
