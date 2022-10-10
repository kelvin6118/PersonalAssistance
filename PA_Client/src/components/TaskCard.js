import React from 'react'

const TaskCard = (task) => {
    const title = task.task.title;
    const description = task.task.description;
    const deadline = task.task.deadline.substring(0, 10);

  return (
    <section className=''>
        <head className='w-full flex justify-between'>
            <h1>{title}</h1>
            <p>{deadline}</p>
        </head>
        <main className='space-x-5'>
            <p>{description}</p>

        </main>
    </section>
  )
}

export default TaskCard
