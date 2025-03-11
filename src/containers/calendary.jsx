import { useContext, useEffect } from "react";
import { Day_card } from "../components/day_card";
import { SessionContext } from "../context/session";
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
  const { daysChoosen, User, addDay, AuthToken } = useContext(SessionContext);
  //A grandes rasgos obtengo todos los dias registrados en la bd y los resalto si estan elegidos,mostrando una vision actualizada del horario
  useEffect(() => {
    let allDays = document.querySelector("#diasSemana");
    if (daysChoosen.length > 0) {
      daysChoosen.forEach((elem) => {
        const dia = allDays.querySelector(
          `#${elem.dia}${elem.hora.substring(0, 2)}` //busco por id a los dias y horarios registrados
        );
        dia.classList.add("resaltar");
      });
    }
  }, []);

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
          <h4>
            De a cuerdo a la membresía podes elegir multiples horas para
            continuar ejercitandote
          </h4>
          <ul>
            <li>Básico : 1 hora por día</li>
            <li>PRO : Hasta 2 hora por día</li>
            <li>ELITE : Hasta 3 hora por día</li>
          </ul>
        </div>
      </header>

      <section id="agendaTurnos">
        <div className="col-12 form__agenda">
          <div className="ag_datosUsuario">
            <label>Elige el horario que mejor se acomode a tu rutina.: </label>
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
            const resp = confirm("Se actualizaran los horarios");
            if (resp) {
              const id_user = User.id_usuario;
              // Espera a que se resuelva la promesa de delete_turn
              await delete_turn(id_user, AuthToken);

              // Crear nuevos turnos
              const promises = Object.keys(daysChoosen).map((element) => {
                return Promise.all(
                  daysChoosen[element].map((el) => {
                    const data = {
                      dia: element,
                      hora: el,
                      id_usuario: id_user,
                    };
                    return create_turn(data, AuthToken);
                  })
                );
              });

              //esperar a que todas las promesas de create_turn se resuelvan
              await Promise.all(promises);
              const get = await get_turn(id_user, AuthToken);
              addDay(get);
            }
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
