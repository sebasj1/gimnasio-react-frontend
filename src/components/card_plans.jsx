import { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SessionContext } from "../context/session";

export const Card_plans = ({ title, text, price, tipo }) => {
  const context = useContext(SessionContext);
  const navigate = useNavigate();

  const elec = (ptipo) => {
    if (context.User.id_tipo_plan != ptipo) {
      const confirm_change = confirm("Debes cambiar tu tipo de plan primero");
      if (confirm_change) navigate("/editarUsuario");
    } else {
      navigate("/agenda");
    }
  };
  return (
    <>
      {/*<!-- Tarjeta de Plan  -->*/}
      <div className="price__card">
        <div className="price_card_content">
          <h4>{title}</h4>
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
        {context.User ? (
          <Link
            className="btn price__btn aHref"
            onClick={(e) => {
              e.preventDefault();
              elec(tipo);
            }}
          >
            {context.User.id_tipo_plan == tipo ? "Ir ahora" : "Cambiar plan"}
          </Link>
        ) : (
          <Link className="btn price__btn aHref" to="/iniciarSesion">
            Empezar
          </Link>
        )}
      </div>
    </>
  );
};
