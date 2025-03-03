import { Day_card } from "../components/day_card";

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
  return (
    <>
      <body>
        {/*<!-- Sección de encabezado -->*/}
        <header class="section__container ">
          {/* <!-- Contenido del encabezado -->*/}
          <div class="header__content">
            <span class="bg__blur"></span>
            <span class="bg__blur header__blur"></span>
            <h1 id="agenda_titulo">
              TENEMOS UN PRESUPUESTO<span> PARA VOS</span>
            </h1>
            <p>
              Nuestro plan de precios viene con varios niveles de membresía,
              cada uno de ellos diseñado para satisfacer diferentes preferencias
              y aspiraciones de acondicionamiento físico.
            </p>
          </div>
        </header>

        <section id="agendaTurnos">
          <div class="col-12 form__agenda">
            <div class="ag_datosUsuario">
              <label for="nombre">Nombre para agendar tu turno: </label>
              <input
                type="text"
                class="inputs__agenda"
                id="nombreUsuario"
                placeholder="  Ingrese su nombre "
              />
              <button class="btn " id="ag_enviarNombre">
                Enviar
              </button>
              <a
                class="btn ag_nueva_consulta"
                hidden
                href="agenda.html"
                id="ag_NConsulta"
              >
                Nueva consulta
              </a>
              <p class="saludoUser"></p>
            </div>
            <div class="row agendaSemana" id="diasSemana">
              {days.map((elem, index) => {
                return (
                  <Day_card
                    day={elem.day}
                    open={elem.open}
                    close={elem.close}
                  />
                );
              })}
             
               
            </div>
          </div>
          <button class="btn centrar " hidden id="ag_reservaDias">
            Reservar turnos
          </button>

          <div class="ag_precioFinal" hidden>
            <p class="precioFinal "></p>
          </div>
        </section>

        <footer class="section__container footer__container">
          <span class="bg__blur"></span>
          <span class="bg__blur footer__blur"></span>
          <div class="footer__col">
            <div class="footer__logo">
              <img src="assets/logo.png" alt="logo" />
            </div>
            <p>
              Dá el primer paso hacia una persona más sana y fuerte con nuestros
              planes y precios inmejorables. ¡Logramos y conquistemos juntos!
            </p>
            <div class="footer__socials">
              <a href="#">
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i class="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <a href="#">Negocios</a>
            <a href="#">Franquicia</a>
            <a href="#">Asociación</a>
          </div>
          <div class="footer__col">
            <h4>Nosotros</h4>
            <a href="#">Blog</a>
            <a href="#">Seguridad</a>
          </div>
          <div class="footer__col">
            <h4>Contact</h4>
            <a href="#">Contactanos</a>
            <a href="#">Políticas de Privacidad</a>
            <a href="#">Terminos y Condiciones</a>
            <a href="#">Calculadora BMI</a>
          </div>
        </footer>
        <div class="footer__bar">Copyright © Codo a Codo - GRUPO 14 - 2024</div>
      </body>
      <script src="script.js"></script>
    </>
  );
};
