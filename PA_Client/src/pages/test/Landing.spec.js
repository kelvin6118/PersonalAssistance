import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import user from '@testing-library/user-event'
import renderConnected from '../../utlis/test/renderConnect'
import App from '../../App'
import Landing from '../Landing'


describe('Landing page', ()=>{
    const onSubmit = jest.fn();

    beforeEach(()=>{
        onSubmit.mockClear();
        renderConnected(<Landing/>);
    })

    it('Login form to be rendered', async () => {
        const username = screen.getByPlaceholderText(/username/i);
        const password = screen.getByPlaceholderText(/password/i);
        const login = screen.getByRole('button', {
            name: /login/i
          })

        expect(username).toBeTruthy()
        expect(password).toBeTruthy()
        expect(login).toBeTruthy()
    })
    
})


it('Navigate to Sign up page when clicked on sign up', async () => {
    renderConnected(<App/>)
    const signUpButton = screen.getByRole('link', {
        name: /sign up/i
      })
    
    user.click(signUpButton);

    expect(screen.getByRole('button', {
        name: /register/i
      })).toBeInTheDocument()
})
