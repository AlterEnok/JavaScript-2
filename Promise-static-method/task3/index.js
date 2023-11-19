const makePromise = (value) => {
    return new Promise((resolve) => {
        resolve(value);
    });
};
makePromise(17)
    .then((number) => console.log(number));