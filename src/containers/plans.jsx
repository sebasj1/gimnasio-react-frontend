import { Card_plans } from "../components/card_plans";

const all_plans = [
  {
    //Tarjeta de Plan Básico
    title: "Plan Básico",
    text: [
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
    ],
    price: 1200,
  },
  {
    //Tarjeta de Plan Semanal
    title: "Plan Semanal",
    price: 5000,
    text: [
      "Entrenamientos PRO",
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
    ],
  },
  {
    //Tarjeta de Plan Mensual
    title: "Plan Mensual",
    price: 15000,
    text: [
      "Clases de tipo ELITE",
      "PRO Gyms",
      "Plan de entrenamiento inteligente",
      "Plan de entrenamiento en casa",
      "Entrenamiento Personal",
    ],
  },
];
export const Plans = () => {
  return (
    <>
      <section className="section__container price__container" id="planes">
        {/*<!-- Sección de precios -->*/}
        <h2 class="section__header">PRECIOS DE NUESTROS PLANES</h2>
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
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
