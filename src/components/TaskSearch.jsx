import React from 'react'

const TaskSearch = () => {
  return (
    <form className='flex justify-center items-center gap-4'>
      <label htmlFor="searchTask" className='absolute left-[-99999px]'>Search task</label>
      <input
        type="search"
        name="searchTask"
        id="searchTask"
        placeholder="search task"
        role="search"
        className='border-2 border-black rounded-3xl h-10 px-2 focus:outline-none focus:ring focus:ring-green-400'
      />
    </form>
  )
}

export default TaskSearch