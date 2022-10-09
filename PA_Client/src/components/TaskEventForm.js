import React , {useState} from 'react'

const TaskEventForm = () => {
  const [type, setType] = useState('task');
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [deadline, setDeadline] = useState();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1
      className='w-full text-2xl rounded-t-2xl bg-cyan-300 p-5'
      >
        Create {type === "task"? <span>Task</span>: <span>Event</span>}</h1>
      <form 
        className='w-full bg-teal-300 flex flex-col p-5 space-y-4 '
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
          required={true}
          onChange={(e)=>setDescription(e.target.value)}
          />
          {type === 'task'? <label>Deadline</label>:<label>Date</label>}
          <input 
          type="text"
          placeholder='DD/MM/YYYY'
          required={true}
          onChange={(e)=>setDeadline(e.target.value)}
          />
          {
            type === 'event'?
            <>
            <label>Time</label>
            <input 
            type="text"
            placeholder='24:00'
            required={true}
            onChange={(e)=>setDeadline(e.target.value)}/>
            </>:
            false
          }
          <button 
          className='bg-teal-500'
          type='submit'>Create</button>
        </form>
      
      </div>
  )
}

export default TaskEventForm
