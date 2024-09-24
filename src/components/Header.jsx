import React from 'react'
import { FaTasks } from 'react-icons/fa'
const Header = () => {
  return (
    <header className="flex justify-center items-center bg-green-700 w-full text-white gap-4 p-2">
    <FaTasks className="text-3xl sm:text-4xl" />
    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Todo List</h1>
  </header>
  
  )
}

export default Header