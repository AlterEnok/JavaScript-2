export const shmoment = (initialDate) =>{
    let resultDate = new Date(initialDate);

    const applyOperation = (unit, value, operation) => {
        if (unit === 'years') {
          resultDate = new Date(resultDate.getFullYear() + operation * value, resultDate.getMonth(), resultDate.getDate(), resultDate.getHours(), resultDate.getMinutes(), resultDate.getSeconds(), resultDate.getMilliseconds());
        } else if (unit === 'months') {
          resultDate = new Date(resultDate.getFullYear(), resultDate.getMonth() + operation * value, resultDate.getDate(), resultDate.getHours(), resultDate.getMinutes(), resultDate.getSeconds(), resultDate.getMilliseconds());
        } else if (unit === 'days') {
          resultDate = new Date(resultDate.getTime() + operation * value * 24 * 60 * 60 * 1000);
        } else if (unit === 'hours') {
          resultDate = new Date(resultDate.getTime() + operation * value * 60 * 60 * 1000);
        } else if (unit === 'minutes') {
          resultDate = new Date(resultDate.getTime() + operation * value * 60 * 1000);
        } else if (unit === 'seconds') {
          resultDate = new Date(resultDate.getTime() + operation * value * 1000);
        } else if (unit === 'milliseconds') {
          resultDate = new Date(resultDate.getTime() + operation * value);
        }
      };

      return {
        add(unit, value) {
          applyOperation(unit, value, 1);
          return this;
        },
        subtract(unit, value) {
          applyOperation(unit, value, -1);
          return this;
        },
        result() {
          return resultDate;
        },
      };
}

const initialDate = new Date(2020, 0, 7, 17, 17, 17);
const modifiedDate = shmoment(initialDate)
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();
console.log(modifiedDate);