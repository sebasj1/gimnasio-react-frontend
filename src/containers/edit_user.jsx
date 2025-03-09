import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import {
  getUser,
  getUserRefresh,
  send_data_edit_user,
  UserRegister,
} from "../handler_api";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/session";
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
});

export const Edit_user = () => {
  const { User, refresh_user_context } = useContext(SessionContext);
  const [userTo, setUserTo] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(User.id_usuario);
      setUserTo(user[0]);
    };
    if (User && User.id_usuario) {
      fetchUser(); // Solo llamamos a fetchUser si `User` tiene un `id_usuario`
    }
  }, []);

  useEffect(() => {
    if (userTo && userTo.fecha_nacimiento) {
      const [day, month, year] = userTo.fecha_nacimiento
        .substring(0, 10)
        .split("-");
      const newDate = `${day}/${month}/${year}`;
      if (newDate !== date) {
        // Asegurarse de no hacer una actualización innecesaria
        setDate(newDate);
      }

      //setDate(fe[1] + "-" + fe[2] + "-" + fe[0]); //Si no toma de cualquier forma
    }
  }, [userTo, date]);

  if (!userTo) {
    return <div>Cargando...</div>;
  }

  const confirm_update = async (values) => {
    const send = confirm("¿Desea enviar la información?");
    if (send) {
      const data = {
        nombre: values.ct_nombre,
        apellido: values.ct_apellido,
        telefono: values.ct_telefono,
        email: values.ct_email,
        id_tipo_plan: values.ct__select,
        id_tipo_usuario: 1,
        fecha_nacimiento: date,
        direccion: values.ct_direccion,
        numero_documento: values.ct_documento,
      };
      const resp = await send_data_edit_user(User.id_usuario, data);
      if (resp) refresh_user();

    }
  };

  const refresh_user = async () => {
    const dataUser = await getUserRefresh(User.id_usuario);
    console.log(dataUser);
    refresh_user_context(dataUser);
    window.location.reload();
  };

  const handleDateChange = (date) => {
    setDate(date.toLocaleDateString("eu-CA"));
  };
  return (
    <Formik
      initialValues={{
        ct_nombre: userTo.nombre,
        ct_apellido: userTo.apellido,
        ct_telefono: userTo.telefono,
        ct_email: userTo.email,
        ct_documento: userTo.numero_documento,
        ct_direccion: userTo.direccion,
        ct__select: userTo.id_tipo_plan,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        confirm_update(values);
      }}
    >
      {() => (
        <section className="section__container__general ">
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur"></span>
            <h4>Editar</h4>
            <h1 id="contacto_titulo">
              EDITAR<span> USUARIO </span>
            </h1>
            <p>
              Desata el potencial hacia tú versión más fuerte, más en forma y
              más seguro de ti mismo. <b>¡Inscríbete ahora</b>y sé testigo de tu
              transformación!
            </p>
          </div>
          <Form className="contacto__form">
            <fieldset className="contacto__fieldset">
              <legend>Actualiza tus datos</legend>
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
                />
                <ErrorMessage name="ct_email" component="p" className="error" />
              </div>
              {/*Plan*/}
              <div className="contacto__campo--select">
                <label htmlFor="ct__select">Tipo de plan : </label>
                <Field as="select" name="ct__select">
                  <option value="1">Básico</option>
                  <option value="2">PRO</option>
                  <option value="3">Elite</option>
                </Field>
              </div>
              {/*fecha*/}
              <div className="date_form">
                <h1>Seleccionar Fecha de nacimiento</h1>
                <div>
                  <label>Fecha:</label>
                  <Calendar
                    name="ct_fecha"
                    onChange={handleDateChange}
                    value={date}
                    view="month" // Muestra el calendario mensual
                    showNeighboringMonth={false} // Ocultar los días del mes anterior y siguiente
                  />
                </div>
              </div>
            </fieldset>

            <div className="general__btn-submit">
              <button type="submit" className="btn">
                Actualizar
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
