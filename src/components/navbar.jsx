import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    // Cuando cambia el hash, desplazarse a la sección correspondiente
    if (location.hash) {
      const elemento = document.querySelector(location.hash);
      console.log(elemento);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [selected, setSelected] = useState("inicio");
  return (
    <nav className="menu">
      <div className="nav__logo">
        <a href="#">
          <img src="/src/assets/img/logo.png" alt="logo" />
        </a>
      </div>
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
          className={selected === "programas" ? "link link_selected" : "link"}
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
          className={selected === "contacto" ? "link link_selected" : "link"}
        >
          <Link to="/contacto" onClick={() => setSelected("contacto")}>
            Contacto
          </Link>
        </li>
      </ul>
      <Link className="btn" to="/agenda">
        Inscribete ahora
      </Link>
      <Link className="btn" to="/iniciarSesion">
        Iniciar sesión
      </Link>
      <Link className="btn" to="/registrarse">
        Registrarse
      </Link>
    </nav>
  );
};
