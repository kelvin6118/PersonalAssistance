import React, {useState} from 'react'
import { registerUser , userLogin} from '../utlis/User';

function Landing() {
    const [createUser, setCreateUser] = useState();
    const [createPass, setCreatePass] = useState();
    const [createEmail, setCreateEmail] = useState(null);
    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState(); 


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
        <div>
        <div id='register'>
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

        <div id='login'>
            <h3>
                Login
            </h3>
            <form onSubmit={handleLoginSubmit}>
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
                <button type='submit'>Login</button>
                </form>
                

        </div>
        </div>
    )
}

export default Landing
