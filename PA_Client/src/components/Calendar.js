import React, { useEffect, useState } from 'react'
import { getUserTasks } from '../utlis/Task';
import TaskCard from './TaskCard';

const Calendar = () => {
  const userid = parseInt(sessionStorage.getItem('userid'));
  const [tasks, setTasks] = useState();
  const [events, setEvents] = useState();

  const getTasks = async () => {
    getUserTasks(userid).then(
      (response)=>{
        setTasks([...response]);
      }
      
    )
  }

  useEffect(()=>{
    getTasks();
  },[])



  return (
    <div className='flex w-full space-x-2'>
      <section className='w-[50%] space-y-3'>
        <h1>Task</h1>
        <main className='space-y-2'>
          {
          tasks?.sort(function(a,b){
            return new Date(a.deadline) - new Date(b.deadline);
          }).map(t=>(<TaskCard task={t} />))
          }
        </main>
      </section>
      <section>
        <h1>Event</h1>
      </section>
    </div>
  )
}

export default Calendar
