import React from 'react'

const TaskCard = (task) => {
    const title = task.task.title;
    const description = task.task.description;
    const deadline = task.task.deadline.substring(0, 10);

  return (
    <section className='TaskCard'>
        <header className='w-full flex justify-between'>
            <h1 className='text-xl'>{title}</h1>
            <div>
                <h2>Deadline</h2>
                <p>{deadline}</p>
            </div>
        </header>
        {description? <main className='space-x-5'>
            <p className='whitespace-normal'>{description}</p>
        </main>:false
        }
    </section>
  )
}

export default TaskCard
