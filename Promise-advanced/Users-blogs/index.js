export const getUsersBlogs = async users => {
    try {
        const blogLinks = await Promise.all(users.map(async user => {
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            return userData.blog;
        }));
        return blogLinks;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};