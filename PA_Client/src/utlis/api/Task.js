import {apiURL, jwtHeaders} from './apiURL'

export const getUserTasks = async (id) => {
    try {
        const response = await fetch(`${apiURL}/task/${id}`, {headers: jwtHeaders});
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
