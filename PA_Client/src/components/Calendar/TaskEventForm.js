import React , {useState} from 'react'
import { createTaskEvent } from '../../utlis/CreateTaskEvent';

const TaskEventForm = () => {
  const [type, setType] = useState('task');
  const [title, setTitle] = useState();
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState();
  const [time, setTime] = useState(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const data = {
      userid: parseInt(sessionStorage.getItem('userid')),
      type: type,
      title: title,
      description: description,
      date: date,
      time: time
    }

    createTaskEvent(data).then((response)=>{
      console.log(response);
    })
  }

  return (
    <section>
      <h1
      className='w-full text-2xl rounded-t-2xl bg-cyan-300 p-5'
      >
        Create {type === "task"? <span>Task</span>: <span>Event</span>}</h1>
      <form 
        className='w-full rounded-b-2xl bg-teal-300 flex flex-col p-5 space-y-4 '
        onSubmit={handleLoginSubmit}>
          <label>Task or Event</label>
          <select onChange={(e)=>setType(e.target.value)}>
            <option value={'task'}>Task</option>
            <option value={'event'}>Event</option>
          </select>

          <label>Title</label>
          <input 
          type="text"
          maxLength={50}
          placeholder='Title'
          required={true}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Description</label>
          <input 
          type="text"
          placeholder='description'
          onChange={(e)=>setDescription(e.target.value)}
          />
          {type === 'task'? <label>Deadline</label>:<label>Date</label>}
          <input 
          type="date"
          required={true}
          onChange={(e)=>setDate(e.target.value)}
          />
          {
            type === 'event'?
            <>
            <label>Time</label>
            <input 
            type="time"
            onChange={(e)=>setTime(e.target.value)}/>
            </>:
            false
          }
          <button 
          className='bg-teal-500'
          type='submit'>Create</button>
        </form>
      </section>
  )
}

export default TaskEventForm
