const userDataPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve({ name: 'Tom', age: 17 });
    }, 1000);
});

console.log(userDataPromise);

userDataPromise.then(function onSuccess(userData) {
    console.log(userData);
});

userDataPromise.then(function onSuccess(userData) {
    const { name, age } = userData;
    console.log(`My name is ${name}. I am ${age} years old`);
});