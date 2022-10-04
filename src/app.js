import MyCalender from "./components/Calendar";

(() => {
  const myCalender = MyCalender(handler);
  const oApp = document.querySelector("#app");
  const oYear = document.querySelector(".year");
  const oMonth = document.querySelector(".month");
  const oYearSpan = oYear.querySelector("span");
  const oMonthSpan = oMonth.querySelector("span");
  const dateInfo = myCalender.getDateInfo();

  const init = () => {
    render(...dateInfo);
    bindEvent();
  };

  function render(...args) {
    oApp.appendChild(myCalender.render(...args));
  }

  function bindEvent() {
    oYear.addEventListener("click", setYear, false);
    oMonth.addEventListener("click", setMonth, false);
  }

  function handler(date) {}

  function setYear(e) {
    const tar = e.target;
    const className = tar.className;
    const currentYear = Number(oYearSpan.innerText);

    if (className === "lt" || className === "gt") {
      switch (className) {
        case "lt":
          dateInfo[0] = currentYear - 1;
          break;
        case "gt":
          dateInfo[0] = currentYear + 1;
          break;
        default:
          break;
      }

      oYearSpan.innerText = dateInfo[0];
      myCalender.update(...dateInfo);
    }
  }

  function setMonth(e) {
    const tar = e.target;
    const className = tar.className;
    const currentMonth = Number(oMonthSpan.innerText);

    if (className === "lt" || className === "gt") {
      switch (className) {
        case "lt":
          dateInfo[1] = currentMonth - 1;
          break;
        case "gt":
          dateInfo[1] = currentMonth + 1;
          break;
        default:
          break;
      }

      oMonthSpan.innerText = dateInfo[1];
      myCalender.update(...dateInfo);
    }
  }

  init();
})();
