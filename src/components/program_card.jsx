export const Program_card = ({ category, img, text }) => {
  return (
    <div className="explore__card">
      <span>
        <i className={img}></i>
      </span>
      <h4>{category}</h4>
      <p>{text}</p>
    </div>
  );
};
