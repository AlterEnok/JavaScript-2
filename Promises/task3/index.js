const successPromise = new Promise(resolve => {
    resolve(67);
});

successPromise.then(function onSuccess(number) {
    const square = number ** 2;
    console.log(square);
});

successPromise.catch(function onError() {

    console.log('I am an error');
})