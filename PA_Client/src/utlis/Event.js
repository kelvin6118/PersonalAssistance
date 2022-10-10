export const getUserEvents = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/event/${id}`);
        const info = await response.json()
        return info
    } catch (err) {
        console.warn(err);
    }
}
