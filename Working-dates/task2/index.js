// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC',
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false,
// });

// const getTime = (date) => formatter.format(date);

// console.log(getTime(new Date()));

const getGreenwichTime = (date) => {
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};
const currentDate = new Date();
const greenwichTime = getGreenwichTime(currentDate);
console.log(greenwichTime);
