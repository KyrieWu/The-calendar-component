import { getDateInfo } from "./utils.js";
import { render, update } from "./render.js";

import "./index.scss";

import event from "./event.js";

export default (handler) => {
  const oContainer = document.createElement("table");

  oContainer.className = "my-calender";

  event(oContainer);

  return {
    render: render(oContainer),
    update,
    getDateInfo,
  };
};
