import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { UserRegister } from "../handler_api";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const validationSchema = Yup.object({
  ct_nombre: Yup.string()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(100, "No puede superar 100 caracteres")
    .required("Este campo es obligatorio"),
  ct_apellido: Yup.string()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(100, "No puede superar 100 caracteres")
    .required("Este campo es obligatorio"),
  ct_telefono: Yup.string()
    .min(6, "Debe tener al menos 6 números")
    .max(12, "No puede superar 12 números")
    .optional(),
  ct_email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("Este campo es obligatorio"),
  ct_documento: Yup.string()
    .min(4, "Debe tener mas de 4 digitos")
    .max(10, "Debe tener menos de 10 digitos")
    .required("Este campo es obligatorio"),
  ct_direccion: Yup.string()
    .min(4, "Debe tener mas de 4 caracteres")
    .max(600, "Debe tener menos de 60 caracteres")
    .required("Este campo es obligatorio"),
  ct_password: Yup.string()
    .min(8, "Debe tener mas de 8 caracteres")
    .max(24, "Debe tener menos de 24 caracteres")
    .required("Este campo es obligatorio"),
  ct_password2: Yup.string()
    .oneOf([Yup.ref("ct_password"), null], "Las contraseñas no coinciden") // Confirmación de contraseña
    .required("La confirmación de la contraseña es obligatoria"),
});

export const Register = () => {
  const [type_pw, setType_pw] = useState("password");
  const [type_pw2, setType_pw2] = useState("password");
  const [date, setDate] = useState(new Date());

  const confirm_register = async (values) => {
    const send = confirm("¿Desea enviar la información?");
    if (send) {
      const data = {
        nombre: values.ct_nombre,
        apellido: values.ct_apellido,
        telefono: values.ct_telefono,
        email: values.ct_email,
        id_tipo_plan: 1,
        id_tipo_usuario: 1,
        fecha_nacimiento: date.toLocaleDateString("en-CA"),
        direccion: values.ct_direccion,
        numero_documento: values.ct_documento,
        password: values.ct_password,
      };

      const resp = await UserRegister(data,);
      if (resp) window.location.reload();
    }
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <Formik
      initialValues={{
        ct_nombre: "",
        ct_apellido: "",
        ct_telefono: "",
        ct_email: "",
        ct_documento: "",
        ct_direccion: "",
        ct_password: "",
        ct_password2: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        confirm_register(values);
      }}
    >
      {() => (
        <section className="section__container__general ">
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur"></span>
            <h4>REGISTRARSE</h4>
            <h1 id="contacto_titulo">
              REGISTRO<span> USUARIO </span>
            </h1>
            <p>
              Desata el potencial hacia tú versión más fuerte, más en forma y
              más seguro de ti mismo. <b>¡Inscríbete ahora </b>y sé testigo de
              tu transformación!
            </p>
          </div>
          <Form className="contacto__form">
            <fieldset className="contacto__fieldset">
              <legend>Completa tus datos</legend>
              {/* Nombre */}
              <div className="contacto__campo">
                <label htmlFor="ct_nombre" className="">
                  Nombre :
                </label>
                <Field
                  id="ct_nombre"
                  name="ct_nombre"
                  type="text"
                  placeholder="Tu nombre"
                />
                <ErrorMessage
                  name="ct_nombre"
                  component="p"
                  className="error"
                />
              </div>
              {/*Apellido*/}
              <div className="contacto__campo">
                <label htmlFor="ct_apellido" className="">
                  Apellido :
                </label>
                <Field
                  id="ct_apellido"
                  type="text"
                  name="ct_apellido"
                  placeholder="Tu apellido"
                />
                <ErrorMessage
                  name="ct_apellido"
                  component="p"
                  className="error"
                />
              </div>
              {/*Nro documento*/}
              <div className="contacto__campo">
                <label htmlFor="ct_documento" className="">
                  Nro.documento :
                </label>
                <Field
                  id="ct_documento"
                  type="text"
                  name="ct_documento"
                  placeholder="Tu nro. de documento"
                />
                <ErrorMessage
                  name="ct_documento"
                  component="p"
                  className="error"
                />
              </div>
              {/*Dirección*/}
              <div className="contacto__campo">
                <label htmlFor="ct_direccion" className="">
                  Dirección :
                </label>
                <Field
                  id="ct_direccion"
                  type="text"
                  name="ct_direccion"
                  placeholder="Tu dirección"
                />
                <ErrorMessage
                  name="ct_direccion"
                  component="p"
                  className="error"
                />
              </div>
              {/*Nro celular*/}
              <div className="contacto__campo">
                <label htmlFor="ct_telefono">Nro celular : </label>
                <Field
                  id="ct_telefono"
                  name="ct_telefono"
                  type="text"
                  placeholder="Tu nro. de celular"
                />
                <ErrorMessage
                  name="ct_telefono"
                  component="p"
                  className="error"
                />
              </div>
              {/*Email*/}
              <div className="contacto__campo contacto__gc100">
                <label htmlFor="ct_email">Email : </label>
                <Field
                  id="ct_email"
                  name="ct_email"
                  placeholder="Tu correo"
                  type="email"
                />{" "}
                <ErrorMessage name="ct_email" component="p" className="error" />
              </div>{" "}
              {/*fecha*/}
              <div className="date_form">
                <h1>Seleccionar Fecha de nacimiento</h1>
                <div>
                  <label>Fecha:</label>
                  <Calendar
                    onChange={handleDateChange}
                    value={date}
                    view="month" // Muestra el calendario mensual
                    showNeighboringMonth={false} // Ocultar los días del mes anterior y siguiente
                  />
                </div>
                <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
              </div>
              {/*COntraseña*/}
              <div className="contacto__campo">
                <label htmlFor="ct_password">Contraseña: </label>
                <Field
                  id="register_password"
                  name="ct_password"
                  type={type_pw}
                  placeholder="Una contraseña"
                />{" "}
                <button
                  type="button"
                  className="btn btn_min"
                  onClick={
                    type_pw === "password"
                      ? () => setType_pw("text")
                      : () => setType_pw("password")
                  }
                >
                  <img
                    className="start_session_btn_pw "
                    src={
                      type_pw === "password"
                        ? "./src/assets/img/eye_visible.png"
                        : "./src/assets/img/eye_hide.png"
                    }
                  />
                </button>
                <ErrorMessage
                  name="ct_password"
                  component="p"
                  className="error"
                />
              </div>{" "}
              {/*COntraseña*/}
              <div className="contacto__campo">
                <label htmlFor="ct_password2">Confirmar contraseña: </label>
                <Field
                  id="register_password2"
                  name="ct_password2"
                  type={type_pw2}
                  placeholder="Confirmar contraseña"
                />{" "}
                <button
                  type="button"
                  className="btn btn_min"
                  onClick={
                    type_pw2 === "password"
                      ? () => setType_pw2("text")
                      : () => setType_pw2("password")
                  }
                >
                  <img
                    className="start_session_btn_pw "
                    src={
                      type_pw2 === "password"
                        ? "./src/assets/img/eye_visible.png"
                        : "./src/assets/img/eye_hide.png"
                    }
                  />
                </button>
                <ErrorMessage
                  name="ct_password2"
                  component="p"
                  className="error"
                />
              </div>
            </fieldset>

            <div className="general__btn-submit">
              <button type="submit" className="btn">
                Registrarse
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
