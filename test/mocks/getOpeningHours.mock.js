const allHours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

const zooClosed = 'The zoo is closed';

const zooOpen = 'The zoo is open';

const errorDayInvalid = 'The day must be valid. Example: Monday';

const errorAMPMInvalid = 'The abbreviation must be \'AM\' or \'PM\'';

const errorHoursInvalid = 'The hour should represent a number';

const errorHoursDoesntExist = 'The hour must be between 0 and 12';

const errorMinuteDoesntExist = 'The minutes must be between 0 and 59';

module.exports = {
  allHours,
  zooClosed,
  zooOpen,
  errorDayInvalid,
  errorHoursInvalid,
  errorAMPMInvalid,
  errorHoursDoesntExist,
  errorMinuteDoesntExist,
};
