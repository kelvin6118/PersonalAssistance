export const getUserTasks = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/task/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
