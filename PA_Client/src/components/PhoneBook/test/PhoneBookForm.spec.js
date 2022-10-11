import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import PhoneBookForm from '../PhoneBookForm'

describe('PhoneBook Form ', ()=>{


    beforeEach(()=>{
        render(<PhoneBookForm/>);
    })

    it('PhoneBook Form to be rendered with corrently', async () => {
        const nameL = screen.getByText(/name/i)
        const titleL = screen.getByText(/title/i)
        const phoneL = screen.getByText(/number/i)
        const emailL = screen.getByText(/email/i)

        const name = screen.getByPlaceholderText(/name/i)
        const title = screen.getByPlaceholderText(/title/i)
        const phone = screen.getByPlaceholderText(/number/i)
        const email = screen.getByPlaceholderText(/example@gmail\.com/i)
        const submit = screen.getByRole('button', {
            name: /create/i
          });

        expect(nameL).toBeTruthy()
        expect(titleL).toBeTruthy()
        expect(phoneL).toBeTruthy()
        expect(emailL).toBeTruthy()
        expect(name).toBeTruthy()
        expect(title).toBeTruthy()
        expect(phone).toBeTruthy()
        expect(email).toBeTruthy()
        expect(submit).toBeTruthy()
    })
})
