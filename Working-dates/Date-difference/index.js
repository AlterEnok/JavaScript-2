const getDiff = (startDate, endDate) => {
  const diffInMilliseconds = Math.abs(startDate - endDate);
  const seconds = Math.floor(diffInMilliseconds / 1000) % 60;
  const minutes = Math.floor(diffInMilliseconds / (1000 * 60)) % 60;
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  const formattedDiff = [];

  if (days > 0) {
    formattedDiff.push(`${days}d`);
  }
  if (hours > 0) {
    formattedDiff.push(`${hours}h`);
  }
  if (minutes > 0) {
    formattedDiff.push(`${minutes}m`);
  }
  if (seconds > 0) {
    formattedDiff.push(`${seconds}s`);
  }

  return formattedDiff.join(' ');
};

const startDate = new Date('2023-07-01T12:00:00');
const endDate = new Date('2023-07-10T14:30:45');
const difference = getDiff(startDate, endDate);
console.log(difference);
