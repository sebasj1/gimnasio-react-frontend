import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { UserLogin } from "../handler_api";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Tiene que ser un email")
    .required("Es un campo requerido"),
  password: Yup.string()
    .min(8, "Debe ser minimo de 8 caracteres")
    .required("Es un campo requerido"),
});
export const StartSession = () => {
  const [type_pw, setType_pw] = useState("password");
  console.log(type_pw);

  return (
    <Formik
      initialValues={{ user: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
        UserLogin({ email: values.email, password: values.password });
      }}
    >
      {() => (
        <div className=" section_container">
          <Form className="section__contacto section_start_session">
            <div className="header__content">
              <span className="bg__blur"></span>
              <span className="bg__blur header__blur"></span>
              <h4>Iniciar sesión</h4>
              <h1 id="contacto_titulo">
                INICIO<span> </span>
              </h1>
              <p>
                Desata el potencial hacia tú versión más fuerte, más en forma y
                más seguro de ti mismo. <b>¡Inscríbete ahora</b>y sé testigo de
                tu transformación!
              </p>
            </div>
            <div className="start_session_fields">
              <div className="start_session_field">
                <label htmlFor="email">Correo Electrónico: </label>
                <Field
                  type="text"
                  name="email"
                  placeholder="Tu correo electrónico"
                />
                <ErrorMessage name="email" component="p" className="error" />
              </div>
              <div className="start_session_field">
                <label htmlFor="password">Contraseña: </label>
                <Field type={type_pw} name="password" />
                <button
                  className="btn btn_min"
                  onClick={
                    type_pw === "password"
                      ? () => setType_pw("text")
                      : () => setType_pw("password")
                  }
                ><img className="start_session_btn_pw " src={type_pw === "password" ? (
                   "./src/assets/img/eye_visible.png" 
                  ) : (
                    "./src/assets/img/eye_hide.png" 
                  )}/>
                  
                </button>
                <ErrorMessage name="password" component="p" className="error" />
              </div>
              <div className="start_session__btn">
                <button type="submit" className="btn">
                  Iniciar
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
