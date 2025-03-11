import { useContext, useEffect } from "react";
import { Card_plans } from "../components/card_plans";
import { SessionContext } from "../context/session";

const all_plans = [
  {
    //Tarjeta de Plan Básico
    id_tipo: 1,
    title: "Plan Básico",
    text: [
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
      "1 hora por día",
    ],
    price: 1200,
  },
  {
    //Tarjeta de Plan Semanal
    id_tipo: 2,
    title: "Plan Pro",
    price: 5000,
    text: [
      "Entrenamientos PRO",
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
      "Hasta 2 horas por día",
    ],
  },
  {
    //Tarjeta de Plan Mensual
    id_tipo: 3,
    title: "Plan Elite",
    price: 15000,
    text: [
      "Clases de tipo ELITE",
      "PRO Gyms",
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
      "Entrenamiento Personal",
      "Hasta 3 horas por día",
    ],
  },
];

export const Plans = () => {
  return (
    <>
      <section className="section__container price__container" id="planes">
        {/*<!-- Sección de precios -->*/}
        <h2 className="section__header">PRECIOS DE NUESTROS PLANES</h2>
        <p className="section__subheader">
          Nuestro plan de precios viene con varios niveles de membresía, cada
          uno de ellos diseñado para satisfacer diferentes preferencias y
          aspiraciones de acondicionamiento físico.
        </p>
        <div className="price__grid">
          {all_plans.map((plan, index) => {
            return (
              <Card_plans
                key={index}
                title={plan.title}
                text={plan.text}
                price={plan.price}
                tipo={plan.id_tipo}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
