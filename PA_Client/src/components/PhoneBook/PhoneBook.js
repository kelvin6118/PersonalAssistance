import React from 'react'
import PhoneBookCard from './PhoneBookCard';

const PhoneBook = (contacts) => {
  return (
    <section>
      <header className='p-2 w-full'>
        <h1 className='text-2xl'>Contacts</h1>
      </header>
      <main>
        {contacts.contacts?.map((c)=>(<PhoneBookCard contact={c}/>))}
      </main>
    </section>
  )
}

export default PhoneBook
