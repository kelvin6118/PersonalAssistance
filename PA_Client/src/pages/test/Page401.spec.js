import {render, screen} from '@testing-library/react'
import React from 'react'
import Page401 from '../Page401'

describe('Page401', ()=>{
    beforeEach(()=>{
        render(<Page401 />);
    })

    it('Sign up form to be rendered', async () => {
        const error = screen.getByText(/Unauthorise 401/i)

        expect(error).toBeTruthy()
    })
})
