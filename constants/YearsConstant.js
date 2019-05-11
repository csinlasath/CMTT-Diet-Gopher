let date = new Date();

const thisYear = date.getFullYear();
const lastYear = thisYear - 1;
const nextYear = thisYear + 1;

const yearArray = [
    lastYear,
    thisYear,
    nextYear
];

export default yearArray;