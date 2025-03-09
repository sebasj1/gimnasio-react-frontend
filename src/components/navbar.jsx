import { useContext, useEffect, useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { SessionContext } from "../context/session";

export const Navbar = () => {
  const context = useContext(SessionContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Cuando cambia el hash, desplazarse a la sección correspondiente
    if (location.hash) {
      const elemento = document.querySelector(location.hash);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  useEffect(() => {
    navigate("/");
  }, [context.User]);

  const logOutSession = () => {
    const end = confirm("¿Desea cerrar sesión?");
    if (end) {
      context.logOut();
      navigate("/iniciarSesion");
    } else {
      return;
    }
  };

  const [selected, setSelected] = useState("inicio");
  return (
    <nav className="menu">
      <div className="nav__logo">
        <a href="#">
          <img src="/src/assets/img/logo.png" alt="logo" />
        </a>
      </div>
      {context.isRegister ? (
        <>
          <ul className="nav__links">
            {/*Inicio*/}
            <li
              id="link_inicio"
              className={selected === "inicio" ? "link link_selected" : "link"}
            >
              <Link to="/#inicio" onClick={() => setSelected("inicio")}>
                Inicio
              </Link>
            </li>
            {/*Contacto*/}
            <li
              id="link_contacto"
              className={
                selected === "contacto" ? "link link_selected" : "link"
              }
            >
              <Link to="/contacto" onClick={() => setSelected("contacto")}>
                Contacto
              </Link>
            </li>
            {/*Mi plan*/}
            <li
              id="link_mi_plan"
              className={selected === "mi_plan" ? "link link_selected" : "link"}
            >
              <Link
                className=""
                onClick={() => setSelected("mi_plan")}
                to="/agenda"
              >
                Mi plan
              </Link>
            </li>
            {/*Mi usuario*/}
            <li
              id="link_mi_usuario"
              className={
                selected === "mi_usuario" ? "link link_selected" : "link"
              }
            >
              <Link
                className=""
                onClick={() => setSelected("mi_usuario")}
                to="/editarUsuario"
              >
                Mi usuario
              </Link>
            </li>
          </ul>

          <>
            <div className="btn__container">
              <label className="lbl__navbar">
                {context.User.nombre}, {context.User.apellido}
              </label>{" "}
              <Link className="btn" onClick={logOutSession}>
                Cerrar sesión
              </Link>
            </div>
          </>
        </>
      ) : (
        <>
          <ul className="nav__links">
            <li
              id="link_inicio"
              className={selected === "inicio" ? "link link_selected" : "link"}
            >
              <Link to="/#inicio" onClick={() => setSelected("inicio")}>
                Inicio
              </Link>
            </li>
            <li
              id="link_programas"
              className={
                selected === "programas" ? "link link_selected" : "link"
              }
            >
              <Link to="/#programas" onClick={() => setSelected("programas")}>
                Programas
              </Link>
            </li>
            <li
              id="link_planes"
              className={selected === "planes" ? "link link_selected" : "link"}
            >
              <Link to="/#planes" onClick={() => setSelected("planes")}>
                Planes
              </Link>
            </li>
            <li
              id="link_contacto"
              className={
                selected === "contacto" ? "link link_selected" : "link"
              }
            >
              <Link to="/contacto" onClick={() => setSelected("contacto")}>
                Contacto
              </Link>
            </li>
          </ul>
          <>
            <div className="btn__container">
              <Link className="btn" to="/iniciarSesion">
                Iniciar sesión
              </Link>
              <Link className="btn" to="/registrarse">
                Registrarse
              </Link>
            </div>
          </>
        </>
      )}
    </nav>
  );
};
