import React, { useState } from 'react'
import {CalendarIcon, BookOpenIcon} from '@heroicons/react/24/solid'
import Calendar from '../components/Calendar';
import PhoneBook from '../components/PhoneBook';
import TaskEventForm from '../components/TaskEventForm';
import PhoneBookForm from '../components/PhoneBookForm';

function DashBoard() {
  const [content, setContent] = useState('calendar');
  const user = sessionStorage.getItem('username');

  return (
    <div className='w-screen h-screen p-10'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div
          onClick={()=>{setContent('calendar')}}
          className='h-10 w-10 cursor-pointer hover:scale-125 transition duration-200'>
          <CalendarIcon pointerEvents="none"/>
          </div>
          <div
          onClick={()=>{setContent('phonebook')}}
          className='h-10 w-10 cursor-pointer hover:scale-125 transition duration-200'>
          <BookOpenIcon pointerEvents="none"/>
          </div>
        </div>
        <h1>DashBoard: Hello {user}</h1>
      </div>
      <div className='flex justify-between'>
        {content == 'calendar'? <Calendar/>: <PhoneBook/>}
        {content == 'calendar'? <TaskEventForm/>: <PhoneBookForm/>}
      </div>

    </div>
  )
}

export default DashBoard
