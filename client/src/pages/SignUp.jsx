import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='font-semibold text-3xl text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input className='p-3 rounded-lg border' type="text" placeholder='Username' id='Username' />
        <input className='p-3 rounded-lg border' type="email" placeholder='Email' id='Email' />
        <input className='p-3 rounded-lg border' type="password" placeholder='Password' id='Password' />
        <button className='p-3 border rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp