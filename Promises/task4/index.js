const failedPromise = new Promise((resolve, reject) => {
    reject(new Error('Oops, error!'));
});


failedPromise.catch(function onError(error) {
    console.log(error);
});