export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
  name: 'Argo',
  hasWheels: false,

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

export function getOwnProps(ship) {
  const ownProps = [];
  for (let prop in ship) {
    if (ship.hasOwnProperty(prop) && typeof ship[prop] !== 'function') {
      ownProps.push(prop);
    }
  }

  return ownProps;
}
