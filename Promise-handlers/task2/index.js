export const asyncCalculator = num => {
    console.log(`Initial value: ${num}`);

    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num * num);
            }, 500);
        })
        .then(square => {
            console.log(`Squared value: ${square}`);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(square * 2);
                }, 500);
            });
        })
        .then(doubled => {
            console.log(`Doubled value: ${doubled}`);
            return doubled;
        });
};

asyncCalculator(5)
    .then(result => console.log(result));