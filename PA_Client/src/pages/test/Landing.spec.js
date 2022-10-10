import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import user from '@testing-library/user-event'
import renderConnected from './utils/renderConnect'
import App from '../../App'

describe('Navigation', ()=>{
    const onSubmit = jest.fn();

    beforeEach(()=>{
        onSubmit.mockClear();
        renderConnected(<App onSubmit={onSubmit}/>);
    })

    it('Navigate to Sign up page when clicked on sign up', async () => {
        const signUpButton = screen.getByRole('link', {
            name: /sign up/i
          })
        
        user.click(signUpButton);

        expect(screen.getByRole('button', {
            name: /register/i
          })).toBeInTheDocument()
    })
})
