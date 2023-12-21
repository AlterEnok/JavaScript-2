const baseUrl = 'https://656b200edac3630cf727b87b.mockapi.io/users';

export function getUsersList() {
    return fetch(baseUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })

    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}

export function getUserById(userId) {
    const url = `${baseUrl}/${userId}`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export function createUser(userData) {
    return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(userData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('User created');
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export function updateUser(userId, userData) {
    const url = `${baseUrl}/${userId}`;
    return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(userData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('User updated');
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

export function deleteUser(userId) {
    const url = `${baseUrl}/${userId}`;
    return fetch(url, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('User deleted');
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}