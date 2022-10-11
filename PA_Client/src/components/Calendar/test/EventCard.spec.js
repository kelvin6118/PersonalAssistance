import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import renderConnected from '../../../utlis/test/renderConnect'
import EventCard from '../EventCard'

describe('EventCard ', ()=>{
    const data = {
        title: 'title',
        description: 'description',
        date: '08-10-2022 time',
        time: '05:00:00'
    }

    beforeEach(()=>{
        render(<EventCard event={data}/>);
    })

    it('Event Card to be rendered with correct data', async () => {
        const date = screen.getByText(/08\-10\-2022/i);
        const description = screen.getByText(/description/i);
        const time = screen.getByText(/05:00:00/i)
        expect(date).toBeTruthy()
        expect(time).toBeTruthy()
        expect(description).toBeTruthy()
    })
})
