import {apiURL} from './apiURL'

export const registerUser = async (user) => {

    const response = await fetch(`${apiURL}/user`, {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;
}

export const userLogin = async (user) => {

    const response = await fetch(`${apiURL}/user/login`, {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;
}

