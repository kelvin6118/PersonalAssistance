import {apiURL, jwtHeaders} from './apiURL'

export const createTaskEvent = async (data) => {

    const response = await fetch(`${apiURL}/create`, {
        headers: jwtHeaders,
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}
