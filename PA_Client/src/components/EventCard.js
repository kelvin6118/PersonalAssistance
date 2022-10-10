import React from 'react'

const EventCard = (event) => {
    const title = event.event.title;
    const description = event.event.description;
    const date = event.event.date.substring(0, 10);
    const time = event.event.time;
  return (
    <section className='EventCard'>
    <head className='w-full flex justify-between'>
        <h1 className='text-xl'>{title}</h1>
        <section className='flex space-x-3'>
            <div>
                <h2>Date</h2>
                <p>{date}</p>
            </div>
            {time?<div>
                <h2>Time</h2>
                <p>{time}</p>
            </div>:false}
        </section>
    </head>
    {description?<main className='space-x-5'>
        <p className='whitespace-normal'>{description}</p>
    </main>:false}
</section>
  )
}

export default EventCard
