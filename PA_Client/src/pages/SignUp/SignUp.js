import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { registerUser } from '../../utlis/User';

function SignUp() {
    const [createUser, setCreateUser] = useState();
    const [createPass, setCreatePass] = useState();
    const [createEmail, setCreateEmail] = useState(null);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const User = {
            username: createUser,
            password: createPass,
            email: createEmail
        }
        console.log(User);
        registerUser(User);
    }

  return (
    <div className='w-screen h-screen flex justify-center'>
        <div className='w-[500px] h-screen flex flex-col justify-center'>
            <h3 className='w-full text-2xl bg-cyan-300 p-5'>
                Create account
            </h3>
            <form
            className='w-full bg-teal-300 flex flex-col p-5 space-y-4'
            onSubmit={handleRegisterSubmit}
            >
                <label>Username</label>
                <input 
                type="text"
                maxLength={50}
                placeholder='Username'
                required={true}
                onChange={(e)=>setCreateUser(e.target.value)}
                />
                <label>Password</label>
                <input 
                type="text"
                maxLength={50}
                placeholder='Password'
                required={true}
                onChange={(e)=>setCreatePass(e.target.value)}
                />
                <label>Email</label>
                <input 
                type="email"
                maxLength={50}
                placeholder='Email'
                onChange={(e)=>setCreateEmail(e.target.value)}
                />
                <button 
                className='bg-teal-500'
                type='submit'>
                    Register
                </button>
                </form>
                <div className='p-5 pt-0 w-full bg-teal-300'>
                        <NavLink
                        to='/'
                        className='bg-teal-500 p-1'
                        >Back To Login</NavLink>
                    </div>
            </div>
        </div>
  )
}

export default SignUp
