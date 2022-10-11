import { getUserEvents } from '../utlis/api/Event';
import { getUserTasks } from '../utlis/api/Task';
import { getUserPhoneBook } from '../utlis/api/PhoneBook';
import React, { useState, useEffect } from 'react';
import {CalendarIcon, BookOpenIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar/Calendar';
import PhoneBook from '../components/PhoneBook/PhoneBook';
import TaskEventForm from '../components/Calendar/TaskEventForm';
import PhoneBookForm from '../components/PhoneBook/PhoneBookForm';


function DashBoard() {  
  const user = sessionStorage.getItem('username');
  const userid = parseInt(sessionStorage.getItem('userid'));
  const [content, setContent] = useState('calendar');
  const [tasks, setTasks] = useState();
  const [events, setEvents] = useState();
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getContacts = async () => {
    getUserPhoneBook(userid).then(
      (response)=>{
        setContacts(response);
      }
    )
  }

  const getTasks = async () => {
    getUserTasks(userid).then(
      (response)=>{
        setTasks(response);
      }
    )
  }

  const getEvents = async () => {
    getUserEvents(userid).then(
      (response)=>{
        setEvents(response);
      }
    )
  }

  useEffect(()=>{
    getTasks();
    getEvents();
    getContacts();
    setLoading(false);
  },[loading])

  return (
    <div className='w-screen h-screen p-7 overflow-hidden space-y-5'>
      <div className='flex justify-between pt-5 '>
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
        <h1 className='text-xl'>DashBoard: Hello {user}</h1>
        <div
        onClick={()=>{navigate('/')}}
        className='h-10 w-10 cursor-pointer hover:scale-125 transition duration-200'>
        <ArrowLeftOnRectangleIcon/>
      </div>
      </div>
      <div className='flex justify-between space-x-5'>
        {content == 'calendar'? <Calendar tasks={tasks} events={events}/>: <PhoneBook contacts={contacts}/>}
        {content == 'calendar'? <TaskEventForm/>: <PhoneBookForm/>}
      </div>
    </div>
  )
}

export default DashBoard
