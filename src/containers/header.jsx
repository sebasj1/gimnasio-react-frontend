export const Header = () => {
  return (
    <>
      {/*<!-- Sección de encabezado -->*/}
      <header id="inicio" className="section__container header__container">
        {/*<!-- Contenido del encabezado -->*/}
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>ENTRENAMIENTO DE ELITE</h4>
          <h1>
            MEJORA  <span>TU CUERPO</span>
          </h1>
          <p>
            Desata el potencial hacia tú versión más fuerte, más en forma y más
            seguro de ti mismo. <b>¡Inscríbete ahora</b>y sé testigo de tu
            transformación!
          </p>
          <button className="btn">Iniciar</button>
        </div>
        {/* <!-- Imagen del encabezado -->*/}
        {/*<div className="header__image">
          <img src="assets/header.png" alt="header" />
  </div>*/}
      </header>
    </>
  );
};
