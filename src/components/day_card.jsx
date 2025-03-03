export const Day_card = ({ day, open, close }) => {
  let hour = Number(open);
  const hours = [];
  while (hour <= Number(close)) {
    hours.push(<p>{hour}:00</p>);
    hour++;
  }
  return (
    <div>
      <button class=" btnDia">{day}</button>
      <div class="horarios">{hours}</div>
    </div>
  );
};
