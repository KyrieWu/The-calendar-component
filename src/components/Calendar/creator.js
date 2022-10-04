import { WEEK_DAYS } from "./config.js";
import {
  getDateInfo,
  getFormatDate,
  getLastMonthRestDays,
  getMonthDayCount,
  getNextMonthRestDays,
} from "./utils";

export function createWeekDaysNode() {
  const oTr = document.createElement("tr");
  oTr.className = "week-day";

  oTr.innerHTML = WEEK_DAYS.map((item) => {
    return `<th>${item}</th>`;
  }).join("");

  return oTr;
}

export function createDateNode(year, month) {
  const lastMonthRestDays = getLastMonthRestDays(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDays = getNextMonthRestDays(year, month);
  let dateTrArr = createDateTrs(6);

  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays);
  const currentMonthDaysTD = createCurrentDaysTD(
    currentMonthDayCount,
    year,
    month
  );
  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays);

  const tdArr = [
    ...lastMonthRestDaysTD,
    ...currentMonthDaysTD,
    ...nextMonthRestDaysTD,
  ];

  let index = 0;

  dateTrArr.forEach((tr) => {
    for (let i = 0; i < 7; i++) {
      tr.appendChild(tdArr[index]);
      index++;
    }
  });

  return dateTrArr;
}

export function createDateTrs(count) {
  const trArr = [];

  for (var i = 0; i < count; i++) {
    const oTr = document.createElement("tr");
    trArr.push(oTr);
  }

  return trArr;
}

function createRestDaysTD(restDays) {
  return restDays.map((item) => {
    const oTd = document.createElement("td");
    oTd.className = "day rest-day";
    oTd.innerText = item;

    return oTd;
  });
}

function createCurrentDaysTD(currentDayCount, year, month) {
  let tdArr = [];

  const [currentYear, currentMonth, currentDate] = getDateInfo();

  for (let i = 1; i <= currentDayCount; i++) {
    const oTd = document.createElement("td");

    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className = "day current-day current";
    } else {
      oTd.className = "day current-day";
    }

    oTd.innerText = i;
    oTd.setAttribute("data-date", getFormatDate(year, month, i));
    tdArr.push(oTd);
  }
  return tdArr;
}
