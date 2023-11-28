const baseUrl = 'https://65666f7364fcff8d730ecc4d.mockapi.io/tasks';

const mapTasks = tasks =>
    tasks.map(({ id, ...rest }) => ({...rest, id }));

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(tasks => mapTasks(tasks))
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    });
};

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTaskData)
    });
};

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    });
};