export const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            } else {
                throw new Error('Failed to get user data');
            }
        }

        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Failed to get user data');
    }
}