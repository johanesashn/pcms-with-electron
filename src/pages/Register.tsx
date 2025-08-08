import { useLoginForm } from '../features/forms/hooks/useLoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, onSubmit } = useLoginForm();

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-12 w-full'>
      <h1 className='text-6xl font-bold'>PCMS</h1>
      <form className='flex flex-col items-center border rounded py-12 w-1/2' onSubmit={handleSubmit(onSubmit("/login"))}>
        <h2 className='text-3xl font-bold mb-8'>Register</h2>
        <div className="flex flex-col gap-2 mb-8 w-2/3">
          <label htmlFor="username">Username</label>
          <input 
            id='username'
            {...register('username')}
            className='text-sm w-full px-2 py-1 border border-gray-400 rounded'
            type="text" 
            placeholder='Enter your username'
          />
        </div>
        <div className="flex flex-col gap-2 mb-8 w-2/3">
          <label htmlFor="">Password</label>
          <input 
            id='password'
            {...register('password')}
            className='text-sm w-full px-2 py-1 border border-gray-400 rounded'
            type="text" 
            placeholder='Enter your username'
          />
        </div>
        <button className='border p-4 py-2 rounded' type='submit'>Register</button>
        <p className='text-sm mt-4'>
          Don't have an account? <Link to="/login" className='text-blue-500'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
