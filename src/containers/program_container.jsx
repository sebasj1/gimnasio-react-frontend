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
          <div className="explore__card">
            <span>
              <i className="ri-run-line"></i>
            </span>
            <h4>Pérdida de grasa</h4>
            <p>
              A través de una combinación de ejercicios, lo capacitaremos para
              alcanzar sus objetivos.
            </p>
            <a href="#">
              Iniciar <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          {/*  <!-- Card programa de Aumento de peso -->*/}
          <div className="explore__card">
            <span>
              <i className="ri-shopping-basket-fill"></i>
            </span>
            <h4>Aumento de peso</h4>
            <p>
              Diseñado para individuos, nuestro programa ofrece un enfoque
              eficaz. ganar peso de forma sostenible.
            </p>
            <a href="#">
              Iniciar <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
