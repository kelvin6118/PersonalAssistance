import apiURL from './apiURL'

export const getUserTasks = async (id) => {
    try {
        const response = await fetch(`${apiURL}/task/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
