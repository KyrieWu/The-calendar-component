function getFirstWeekDay(year, month) {
  const date = new Date(year, month - 1, 1);
  return date.getDay();
}

function getMonthDayCount(year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}
