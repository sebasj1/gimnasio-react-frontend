import { Program_card } from "../components/program_card";

export const Program_container = () => {
  return (
    <>
      {/* <!-- Sección de programas -->*/}
      <section id="programas" className="section__container explore__container">
        {/*} <!-- Encabezado de la sección de programas -->*/}
        <div className="explore__header">
          <h2 className="section__header">NUESTROS PROGRAMAS</h2>
        </div>
        <div className="explore__grid">
          {/*<!-- Grid de programas -->*/}
          <Program_card
            img="ri-boxing-fill"
            category="Fuerza"
            text=" Abrace la esencia de la fuerza en sus diversas dimensiones físicas,
            mentales y emocionales."
          />
          {/*<!-- Card programa de Aptitud física -->*/}
          <Program_card
            img="ri-heart-pulse-fill"
            category="Aptitud física"
            text="Abarca una gama de actividades que mejoran la salud, la fuerza,
            flexibilidad y bienestar general."
          />
          {/*<!-- Card programa de Pérdida de grasa -->*/}
          <Program_card
            img="ri-run-line"
            category="Pérdida de grasa"
            text="A través de una combinación de ejercicios, lo capacitaremos para
              alcanzar sus objetivos."
          />
          {/*  <!-- Card programa de Aumento de peso -->*/} <Program_card
            img="ri-shopping-basket-fill"
            category="Aumento de peso"
            text=" Diseñado para individuos, nuestro programa ofrece un enfoque
              eficaz. ganar peso de forma sostenible."
          />
        </div>
      </section>
    </>
  );
};
