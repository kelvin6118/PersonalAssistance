import React, { useEffect, useState } from 'react'
import { getUserPhoneBook } from '../../utlis/PhoneBook';

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
      <header>
        <h1>Contacts</h1>
      </header>
      
    </section>
  )
}

export default PhoneBook
