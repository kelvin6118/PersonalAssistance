export const createTaskEvent = async (data) => {

    const response = await fetch('http://localhost:3001/create', {
        headers: { "Content-Type": "application/json" },
        method: 'POST', 
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}
