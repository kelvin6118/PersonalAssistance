import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import PhoneBookCard from '../PhoneBookCard'

describe('PhoneBookCard ', ()=>{
    const data = {
        name: 'kelvin',
        title: 'your title',
        phone: '129381423',
        email: 'test@gmail.com'
    }

    beforeEach(()=>{
        render(<PhoneBookCard contact={data}/>);
    })

    it('Task Card to be rendered with corrent data', async () => {
        const name = screen.getByText(/kelvin/i);
        const title = screen.getByText(/your title/i);
        const phone = screen.getByText(/129381423/i);
        const email = screen.getByText(/test@gmail.com/i);
        expect(name).toBeTruthy()
        expect(title).toBeTruthy()
        expect(phone).toBeTruthy()
        expect(email).toBeTruthy()
    })
})
