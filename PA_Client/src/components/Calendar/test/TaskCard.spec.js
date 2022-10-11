import {render, screen, waitFor} from '@testing-library/react'
import React from 'react'
import TaskCard from '../TaskCard'
import renderConnected from '../../../utlis/test/renderConnect'

describe('TaskCard ', ()=>{
    const data = {
        title: 'title',
        description: 'description',
        deadline: '08-10-2022 time'
    }

    beforeEach(()=>{
        render(<TaskCard task={data}/>);
    })

    it('Task Card to be rendered with corrent data', async () => {
        const title = screen.getByRole('heading', {
            name: /title/i
          });
        const heading = screen.getByRole('heading', {
            name: /deadline/i
          });
        const deadline = screen.getByText(/08\-10\-2022/i);
        const description = screen.getByText(/description/i);

        expect(title).toBeTruthy()
        expect(heading).toBeTruthy()
        expect(deadline).toBeTruthy()
        expect(description).toBeTruthy()
    })
})
