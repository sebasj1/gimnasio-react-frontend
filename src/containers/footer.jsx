export const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
          <div className="footer__logo">
            <img src="assets/logo.png" alt="logo" />
          </div>
          <p>
            Dá el primer paso hacia una persona más sana y fuerte con nuestros
            planes y precios inmejorables. ¡Logramos y conquistemos juntos!
          </p>
          <div className="footer__socials">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">Negocios</a>
          <a href="#">Franquicia</a>
          <a href="#">Asociación</a>
        </div>
        <div className="footer__col">
          <h4>Nosotros</h4>
          <a href="#">Blog</a>
          <a href="#">Seguridad</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">Contactanos</a>
          <a href="#">Políticas de Privacidad</a>
          <a href="#">Terminos y Condiciones</a>
          <a href="#">Calculadora BMI</a>
        </div>
      </footer>
    </>
  );
};
