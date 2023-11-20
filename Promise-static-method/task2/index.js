const userData = {
    name: 'Tom',
    age: 17,
};

const getRandomDelay = (from, to) => from + Math.random() * (to - from);

const request = url =>
    new Promise(resolve => {
        const delay = getRandomDelay(1000, 3000);
        setTimeout(
            () =>
            resolve({
                userData,
                source: url,
            }),
            delay,
        );
    });

const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

export const getUserASAP = userId => {
    const requests = servers.map(serverUrl => request(`${serverUrl}/users/${userId}`));

    return Promise.race(requests);
};