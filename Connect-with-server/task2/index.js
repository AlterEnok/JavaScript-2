const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

    .then(data => {
        return data;
    })

    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}



export function getTaskById(taskId) {
    const url = `${baseUrl}/${taskId}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

    .then(data => {
        return data;
    })

    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
}