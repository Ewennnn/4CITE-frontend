export async function fetchUser(username) {
    try {
        const response = await fetch(`http://localhost:9000/users/${username}`)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        return response.json()
    } catch (error) {
        throw new Error(`Fetch failed: ${error.message}`)
    }
}