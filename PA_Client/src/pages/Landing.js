import React, {useState} from 'react'

function Landing() {
    const [createUser, setCreateUser] = useState();
    const [createPass, setCreatePass] = useState();
    const [createEmail, setCreateEmail] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const User = {
            username: createUser,
            password: createPass,
            email: createEmail
        }
        console.log(User)
    }

    return (
        <div>
            <h3>
                create account
            </h3>
            <form
            onSubmit={handleSubmit}
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
                    Submit
                </button>

                </form>
            </div>
    )
}

export default Landing
