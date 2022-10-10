export const createNewContact = async (data) => {

    const response = await fetch('http://localhost:3001/phonebook', {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}


export const getUserPhoneBook = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/phonebook/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
