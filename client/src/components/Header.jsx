import React from 'react'
import {FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='bg-slate-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
      <Link to={"/"}>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-sky-900'>Akash</span>
          <span className='text-sky-700'>Estate</span>
        </h1>
      </Link>
      <form action="" className='bg-slate-100 p-3 rounded-md flex items-center'>
        <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-500' />
      </form>
      <ul className='flex gap-4 font-semibold'>
      <Link to={"/"}>
      <li className='hidden sm:inline text-sky-900 hover:underline'>Home</li>
      </Link>
      <Link to={"/about"}>
      <li className='hidden sm:inline text-sky-900 hover:underline'>About</li>
      </Link>
      <Link to={"/sign-in"}>
      <li className='text-sky-900 hover:underline'>Sign in</li>
      </Link>
      </ul>
      </div>
    </header>
  )
}

export default Header