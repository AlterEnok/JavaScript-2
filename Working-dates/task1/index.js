const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const dayOfWeek = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);

  return weekDays[newDate.getDay()];
};
const result = dayOfWeek(new Date(2022, 2, 1), 4);

console.log(result);
