import {apiURL, jwtHeaders} from './apiURL'

export const createNewContact = async (data) => {

    const response = await fetch(`${apiURL}/phonebook`, {
        headers: jwtHeaders,
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}


export const getUserPhoneBook = async (id) => {
    try {
        const response = await fetch(`${apiURL}/phonebook/${id}`, {headers: jwtHeaders});
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
