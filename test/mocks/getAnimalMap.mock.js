const allAnimalMap = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

const residentsMale = {
  NE: [{ lions: ['Maxwell', 'Faustino'] }, { giraffes: ['Antone', 'Clay', 'Arron', 'Bernard'] }],
  NW: [
    { tigers: [] }, { bears: ['Hiram', 'Edwardo', 'Milan'] }, { elephants: ['Orval', 'Jefferson'] },
  ],
  SE: [{ penguins: ['Joe', 'Tad', 'Nicholas'] }, { otters: ['Neville', 'Lloyd'] }],
  SW: [{ frogs: [] }, { snakes: ['Bill'] }],
};

const residentFemaleSorted = {
  NE: [{ lions: ['Dee', 'Zena'] }, { giraffes: ['Gracia', 'Vicky'] }],
  NW: [{ tigers: ['Esther', 'Shu'] }, { bears: [] }, { elephants: ['Bea', 'Ilana'] }],
  SE: [{ penguins: ['Keri'] }, { otters: ['Margherita', 'Mercedes'] }],
  SW: [{ frogs: ['Annice', 'Cathey'] }, { snakes: ['Paulette'] }],
};

const residentSorted = {
  NE: [
    { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
    { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }],
  NW: [
    { tigers: ['Esther', 'Shu'] }, { bears: ['Edwardo', 'Hiram', 'Milan'] },
    { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
  ],
  SE: [
    { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
    { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
  ],
  SW: [{ frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }],
};

module.exports = {
  allAnimalMap,
  residentsMale,
  residentFemaleSorted,
  residentSorted,
};
