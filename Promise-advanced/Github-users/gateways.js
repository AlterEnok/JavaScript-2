export const fetchUserData = async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`)

    if (response.ok) {
        return await response.json()
    }

    throw new Error('Failed to load data');

};

export const fetchRepositories = async url => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to load data');
        }
    } catch (error) {
        throw new Error('Failed to fetch repositories');
    }
}