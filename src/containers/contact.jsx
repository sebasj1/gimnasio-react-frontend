import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

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
  ct_wpp: Yup.string().oneOf(["SI", "NO"]),
  ct_edad: Yup.number()
    .positive("La edad tiene que ser positiva")
    .max(90, "La edad no puede superar los 90")
    .required("La edad es obligatoria"),
  ct_mensaje: Yup.string()
    .min(10, "Debe ser mayor a 10 caracteres")
    .max(5000, "Debe ser menor a 5000 caracteres")
    .required("Debe contener un mensaje"),
});

export const Contact = () => {
  return (
    <Formik
      initialValues={{
        ct_nombre: "",
        ct_apellido: "",
        ct_telefono: "",
        ct_email: "",
        ct_mensaje: "",
        ct__select: "No aún",
        ct_wpp: "SI",
        ct_edad: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        const data = {
          nombre: values.ct_nombre,
          apellido: values.ct_apellido,
          telefono: values.ct_telefono,
          whatsapp: values.ct_wpp,
          contenido: values.ct_mensaje,
          entrenaba: values.ct__select,
          email: values.ct_email,
          edad: values.ct_edad,
        };
        console.log(data);

        fetch("http://localhost:3000/mensajes/", {
          method: "POST", // Define que es una solicitud POST
          headers: {
            "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
          },
          body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
        })
          .then((response) => response.json()) // Convierte la respuesta en formato JSON
          .then((data) => {
            console.log("Éxito:", data); // Manejo de la respuesta exitosa
          })
          .catch((error) => {
            console.error("Error:", error); // Manejo de errores
          });
      }}
    >
      {() => (
        <section className="section__container__general">
          <div className="header__content">
            <span className="bg__blur"></span>
            <span className="bg__blur header__blur"></span>
            <h4>DEJANOS TU CONSULTA</h4>
            <h1 id="contacto_titulo">
              COMUNICATE<span> CON NOSOTROS</span>
            </h1>
            <p>
              Desata el potencial hacia tú versión más fuerte, más en forma y
              más seguro de ti mismo. <b>¡Inscríbete ahora</b>y sé testigo de tu
              transformación!
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

              {/*Wpp*/}
              <div className="contacto__campo--rb">
                <p>¿Tienes WhatsApp?</p>

                <label>
                  <Field type="radio" name="ct_wpp" value="SI" />
                  Si tengo
                </label>
                <br />
                <label>
                  <Field type="radio" name="ct_wpp" value="NO" />
                  No tengo
                </label>
              </div>

              {/*Entrena*/}
              <div className="contacto__campo--select">
                <label htmlFor="ct__select">
                  ¿Entrenas/entrenabas con nosotros? :{" "}
                </label>
                <Field as="select" name="ct__select">
                  <option value="No aún">No aún</option>
                  <option value="Si, anteriormente">Si, anteriormente</option>
                  <option value="Si, aún entreno">Si, aún entreno</option>
                </Field>
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
              </div>

              {/*Edad*/}
              <div className="contacto__campo contacto__gc100">
                <label htmlFor="ct_edad">Edad : </label>
                <Field
                  id="ct_edad"
                  name="ct_edad"
                  placeholder="Tu edad"
                  type="number"
                  min="18"
                  max="90"
                />
                <ErrorMessage name="ct_edad" component="p" className="error" />
              </div>

              {/*Mensaje*/}
              <div className="contacto__campo contacto__gc100">
                <label htmlFor="ct_mensaje">Mensaje : </label>
                <Field
                  as="textarea"
                  rows="10"
                  id="ct_mensaje"
                  name="ct_mensaje"
                  maxLength="5000" // Límite máximo de caracteres
                  placeholder="Ingrese un mensaje"
                />
                <ErrorMessage
                  name="ct_mensaje"
                  component="p"
                  className="error"
                />
              </div>
            </fieldset>

            <div className="general__btn-submit">
              <button type="submit" className="btn">
                Enviar
              </button>
            </div>
          </Form>
        </section>
      )}
    </Formik>
  );
};
