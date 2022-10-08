export const registerUser = async (user) => {

    const response = await fetch('http://localhost:3000/user', {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;
}

export const userLogin = async (user) => {

    const response = await fetch('http://localhost:3000/user/login', {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;
}
