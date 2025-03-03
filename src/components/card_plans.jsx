export const Card_plans = ({ plan, text, price, index = 0 }) => {
  return (
    <>
      {/*<!-- Tarjeta de Plan Básico -->*/}
      <div className="price__card">
        <div className="price_card_content">
          <h4>{plan}</h4>
          <h3>${price}</h3>
          {text.map((text_element, index) => {
            return (
              <p key={index}>
                <i className="ri-checkbox-circle-line"></i>
                {text_element}
              </p>
            );
          })}
        </div>
        <a className="btn price__btn aHref" href="agenda.html">
          Empieza ahora
        </a>
      </div>
    </>
  );
};
