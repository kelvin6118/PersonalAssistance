import React , {useState}from 'react'
import { createNewContact } from '../../utlis/PhoneBook';

const PhoneBookForm = () => {
  const [name, setName] = useState('task');
  const [title, setTitle] = useState();
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const data = {
      userid: parseInt(sessionStorage.getItem('userid')),
      name: name,
      title: title,
      phone: number,
      email: email,
    }

    createNewContact(data).then((response)=>{
      console.log(response);
    })
  }

  return (
    <section>
      <h1
      className='w-full text-2xl rounded-t-2xl bg-cyan-300 p-5'
      >
        Add new Contact</h1>
      <form 
        className='w-full rounded-b-2xl bg-teal-300 flex flex-col p-5 space-y-4 '
        onSubmit={handleLoginSubmit}>
          <label>Name</label>
          <input 
          type="text"
          maxLength={50}
          placeholder='Title'
          required={true}
          onChange={(e)=>setName(e.target.value)}
          />

          <label>Title</label>
          <input 
          type="text"
          maxLength={50}
          placeholder='Title'
          required={true}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Number</label>
          <input 
          type="text"
          maxLength={15}
          placeholder='number'
          onChange={(e)=>setNumber(e.target.value)}
          />
          <label>email</label>
          <input 
          type="email"
          placeholder='example@gmail.com'
          onChange={(e)=>setEmail(e.target.value)}
          />

  
          <button 
          className='bg-teal-500'
          type='submit'>Create</button>
        </form>
      </section>
  )
}

export default PhoneBookForm
