// Write A Function That Determines Whether A Given Year Is A Leap Year.

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is a not leap year`;
  }
};
