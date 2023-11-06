export const pinger = (count, period) => {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            console.log('Ping');
        }, i * period);
    }
};

pinger(5, 100);