import React, { useEffect, useState } from 'react'
import { getUserPhoneBook } from '../../utlis/PhoneBook';
import PhoneBookCard from './PhoneBookCard';

const PhoneBook = () => {
  const userid = parseInt(sessionStorage.getItem('userid'));
  const [contacts, setContacts] = useState();

  const getContacts = async () => {
    getUserPhoneBook(userid).then(
      (response)=>{
        setContacts(response);
      }
    )
  }

  useEffect(()=>{
    getContacts();
  },[])


  return (
    <section>
      <header className='p-2 w-full'>
        <h1 className='text-2xl'>Contacts</h1>
      </header>
      <main>
        {contacts?.map((c)=>(<PhoneBookCard contact={c}/>))}
      </main>
    </section>
  )
}

export default PhoneBook
