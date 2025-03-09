import { useContext } from "react";
import { SessionContext } from "../context/session";

export const Day_card = ({ day, open, close }) => {
  let hour = Number(open);
  const hours = [];
  const { addDay, User } = useContext(SessionContext);
  const numberSelect = User ? User.id_tipo_plan : 1;

  const sum = (e) => {
    let allDay = document.querySelector(`#${e.target.dataset.day}`);
    let hoursOfDay = allDay.querySelectorAll(".resaltar");
    e.target.classList.toggle("resaltar");
    if (hoursOfDay.length == numberSelect) {
      if (hoursOfDay[0].textContent == e.target.textContent) {
        hoursOfDay.shift;
      } else {
        hoursOfDay[hoursOfDay.length - 1].classList.remove("resaltar");
      }
    }
    allDay = document.querySelector(`#${e.target.dataset.day}`);
    hoursOfDay = allDay.querySelectorAll(".resaltar");
    console.log(allDay);
    console.log(hoursOfDay);
    regDays();
  };

  const regDays = () => {
    let allDays = document.querySelectorAll(".resaltar");
    let selectedDays = {};
    allDays.forEach((el) => {
      selectedDays = {
        ...selectedDays,
        [el.dataset.day]: selectedDays[el.dataset.day] //evalua si existe el valor anteriormente
          ? [...selectedDays[el.dataset.day], el.textContent] //agrega el nuevo
          : [el.textContent], //da un primer valor
      };
    });
    addDay(selectedDays);
  };
  while (hour <= Number(close)) {
    hours.push(
      <p className="" id={day + hour} data-day={day} onClick={sum}>
        {hour}:00
      </p>
    );
    hour++;
  }
  return (
    <div>
      <button className=" btnDia">{day}</button>
      <div id={day} className="horarios">
        {hours}
      </div>
    </div>
  );
};
