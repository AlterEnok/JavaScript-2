const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay('10', 3000);

const getSum = numbers =>
    numbers.reduce((acc, num) => {
        if (!isNaN(Number(num))) {
            return acc + Number(num);
        }
        return acc;
    }, 0);

const asyncSum = (...asyncNumbers) => {
    return Promise.allSettled(asyncNumbers)
        .then(results => {
            const resolvedValues = results.filter(result => result.status === 'fulfilled').map(result => result.value);
            const sum = getSum(resolvedValues);
            if (resolvedValues.length !== asyncNumbers.length) {
                throw new Error("Can't calculate");
            }
            return sum;
        });
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));