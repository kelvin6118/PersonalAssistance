import React from 'react'

const PhoneBookCard = (contact) => {
    const name = contact.contact.name;
    const title = contact.contact.title;
    const phone = contact.contact.phone || 'no number';
    const email = contact.contact.email;

  return (
    <section className='w-full p-2 space-y-1'>
        <header className='flex space-x-4'>
            <p>{name}</p>
            <p>{title}</p>
        </header>
        <main>
            <label>phone: </label>
            <span>{phone}</span>
            <br></br>
            <label>email: </label>
            <span>{email}</span>
        </main>
        </section>
  )
}

export default PhoneBookCard
