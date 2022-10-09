import React, {useState} from 'react'
import { registerUser } from '../utlis/User';

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
    <div className='w-vh h-vh' id='register'>
        <h3>
            create account
        </h3>
        <form
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
            
            type='submit'>
                Register
            </button>

            </form>
        </div>
  )
}

export default SignUp
