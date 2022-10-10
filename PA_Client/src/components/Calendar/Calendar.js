import React, { useEffect, useState } from 'react'
import { getUserEvents } from '../../utlis/Event';
import { getUserTasks } from '../../utlis/Task';
import EventCard from './EventCard';
import TaskCard from './TaskCard';

const Calendar = () => {
  const userid = parseInt(sessionStorage.getItem('userid'));
  const [tasks, setTasks] = useState();
  const [events, setEvents] = useState();

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
  },[])



  return (
    <div className='flex w-full space-x-4 box-border'>
      <section className='w-[50%] space-y-3'>
        <h1 className='text-2xl'>Task</h1>
        <main className='space-y-2'>
          {
          tasks?.sort(function(a,b){
            return new Date(a.deadline) - new Date(b.deadline);
          }).map(t=>(<TaskCard task={t} />))
          }
        </main>
      </section>
      <section className='w-[50%] space-y-3'>
        <h1 className='text-2xl'>Event</h1>
        <main className='space-y-2'>
          {
          events?.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          }).map(e=>(<EventCard event={e} />))
          }
        </main>
      </section>
    </div>
  )
}

export default Calendar
