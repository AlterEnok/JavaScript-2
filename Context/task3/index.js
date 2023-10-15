export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Edem',
  sayHi() {
    console.log(`Hi, i'm ${this.name}!`);
  },
};

const deferredSayHi = defer(user.sayHi.bind(user), 1000);
deferredSayHi();
