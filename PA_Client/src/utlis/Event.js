import apiURL from './apiURL'

export const getUserEvents = async (id) => {
    try {
        const response = await fetch(`${apiURL}/event/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
