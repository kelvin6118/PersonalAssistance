import {render, screen, container} from '@testing-library/react'
import React from 'react'
import TaskEventForm from '../TaskEventForm'

describe('Task Event Form ', ()=>{


    beforeEach(()=>{
        render(<TaskEventForm/>);
    })

    it('PhoneBook Form to be rendered with corrently', async () => {
        const selectL = screen.getByText(/task or event/i)
        const titleL = screen.getByText(/title/i)
        const descriptionL = screen.getByText(/description/i)
        const deadlineL = screen.getByText(/deadline/i)

        const title = screen.getByPlaceholderText(/title/i)
        const select = screen.getByRole('combobox');
        const description = screen.getByPlaceholderText(/description/i)
        const deadline = container.querySelector('#datePicker')
        const submit = screen.getByRole('button', {
            name: /create/i
          })

        expect(selectL).toBeTruthy()
        expect(titleL).toBeTruthy()
        expect(descriptionL).toBeTruthy()
        expect(deadlineL).toBeTruthy()
        expect(select).toBeTruthy()
        expect(title).toBeTruthy()
        expect(description).toBeTruthy()
        expect(deadline).toBeTruthy()
        expect(submit).toBeTruthy()
    })
})
