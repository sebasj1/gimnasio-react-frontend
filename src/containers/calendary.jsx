import { useContext } from "react";
import { Day_card } from "../components/day_card";
import { SessionContext } from "../context/session";
import { object } from "yup";
import { create_turn, delete_turn, get_turn } from "../handler_api";

const days = [
  { day: "Lunes", open: 10, close: 20 },
  { day: "Martes", open: 10, close: 20 },
  { day: "Miercoles", open: 10, close: 20 },
  { day: "Jueves", open: 10, close: 20 },
  { day: "Viernes", open: 10, close: 20 },
  { day: "Sábado", open: 10, close: 20 },
  { day: "Domingo", open: 10, close: 15 },
];

export const Calendary = () => {
  const { daysChoosen, User } = useContext(SessionContext);

  return (
    <>
      {/*<!-- Sección de encabezado -->*/}
      <header className="section__container__general ">
        {/* <!-- Contenido del encabezado -->*/}
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h1 id="contacto_titulo">
            TENEMOS UN PRESUPUESTO<span> PARA VOS</span>
          </h1>
          <p>
            Nuestro plan de precios viene con varios niveles de membresía, cada
            uno de ellos diseñado para satisfacer diferentes preferencias y
            aspiraciones de acondicionamiento físico.
          </p>
        </div>
      </header>

      <section id="agendaTurnos">
        <div className="col-12 form__agenda">
          <div className="ag_datosUsuario">
            <label>Elige el horario que mejor se acomode a tu rutina.: </label>

            <p className="saludoUser"></p>
          </div>
          <div className="row agendaSemana" id="diasSemana">
            {days.map((elem, index) => {
              return (
                <Day_card
                  key={index}
                  day={elem.day}
                  open={elem.open}
                  close={elem.close}
                />
              );
            })}
          </div>
        </div>
        <button
          onClick={async () => {
            const id_user = User.id_usuario;
            delete_turn(id_user);
            const aa = await get_turn(id_user);
            console.log(aa);
            Object.keys(daysChoosen.obj).forEach((element) => {
              console.log(element, daysChoosen.obj[element]);
              daysChoosen.obj[element].forEach((el) => {
                const data = {
                  dia: element,
                  hora: el,
                  id_usuario: id_user,
                };
                create_turn(data);
              });
            });
          }}
          className="btn centrar "
          hidden
          id="ag_reservaDias"
        >
          Guardar turnos
        </button>

        <div className="ag_precioFinal" hidden>
          <p className="precioFinal "></p>
        </div>
      </section>

      <script src="./script.js"></script>
    </>
  );
};
