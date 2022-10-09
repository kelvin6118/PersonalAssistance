import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { userLogin} from '../utlis/User';

function Landing() {
    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState(); 

    const handleLoginSubmit= async (e) => {
        e.preventDefault();
        const User = {
            username: loginUser,
            password: loginPass
        }
        
        userLogin(User).then((response) => {
            if(response.auth){
                localStorage.setItem("token", "Bearer " + response.token);
                console.log("You've logged in", response);
            }else{
                console.log("Wrong username or password")
            }
        })
    }

    return (
        <dix className='w-screen flex justify-center '>
            <div className='w-fit h-screen flex flex-col justify-center '>
                <h1 className='w-fit text-2xl bg-cyan-300 p-5'>Welcome To Personal Assistant</h1>
                <div className='w-full p-3 bg-teal-300'>
                    <form 
                    className='flex flex-col p-2 space-y-4 '
                    onSubmit={handleLoginSubmit}>
                        <label>Username</label>
                        <input 
                        type="text"
                        maxLength={50}
                        placeholder='Username'
                        required={true}
                        onChange={(e)=>setLoginUser(e.target.value)}
                        />
                        <label>Password</label>
                        <input 
                        type="text"
                        maxLength={50}
                        placeholder='Password'
                        required={true}
                        onChange={(e)=>setLoginPass(e.target.value)}
                        />
                        <button 
                        className='bg-teal-500'
                        type='submit'>Login</button>
                        </form>
                        <div className='flex justify-between p-2'>
                            <h3
                            className=''
                            >Not have an account yet?</h3>
                            <NavLink
                            to='/signup'
                            className='bg-teal-500 p-1'
                            >Sign up</NavLink>
                        </div>
                </div>
            </div>
        </dix>
    )
}

export default Landing
