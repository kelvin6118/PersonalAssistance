import React, {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Login, logout } from '../redux/loginSlice';


function Landing() {
    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
        dispatch(logout());
    },[])

    const handleLoginSubmit= async (e) => {
        e.preventDefault();
        const User = {
            username: loginUser,
            password: loginPass
            
        }
        dispatch(Login(User)).then((response) => {
            if(sessionStorage.getItem('auth') == "true"){
                navigate('/dashboard');
            }
        }).catch((err)=>{
            console.log('wrong user or password');
        })
    }


    return (
        <div className='w-screen flex justify-center'>
            <div className='w-[500px] h-screen flex flex-col justify-center '>
                <h1 className='w-full text-2xl rounded-t-2xl bg-cyan-300 p-5'>Welcome To Personal Assistant</h1>
                <form 
                className='w-full bg-teal-300 flex flex-col p-5 space-y-4 '
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
                    <div className='flex  justify-between p-5 pt-0 w-full bg-teal-300'>
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
    )
}

export default Landing
