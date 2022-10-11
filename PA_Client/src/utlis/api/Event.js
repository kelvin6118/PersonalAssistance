import {apiURL, jwtHeaders} from './apiURL'

export const getUserEvents = async (id) => {
    try {
        const response = await fetch(`${apiURL}/event/${id}`, {headers: jwtHeaders});
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
