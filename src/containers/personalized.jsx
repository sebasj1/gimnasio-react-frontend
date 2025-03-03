export const Personalized = () => {
  return (
    <>
      {/* <!-- Sección de clases personalizadas -->*/}
      <section className="section__container class__container">
        {/*<!-- Video de YouTube -->*/}
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/eMjyvIQbn9M?si=Wa2ckR05e_m3jQB4"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* <!-- Contenido de las clases personalizadas -->*/}
        <div className="class__content">
          <h2 className="section__header">CLASES PERSONALIZADAS</h2>
          <p>
            Dirigida por nuestro equipo de instructores expertos y motivadores,
            "La clase que obtendrás aquí" es una sesión de alta energía
            orientada a resultados que combina una combinación perfecta de
            cardio, entrenamiento de fuerza y ​​ejercicios funcionales. Cada
            clase está cuidadosamente seleccionada para mantenerte involucrado y
            desafiado, asegurando que nunca llegues a un punto muerto en tus
            esfuerzos de acondicionamiento físico.
          </p>
          <button className="btn">Reserva tu clase</button>
        </div>
      </section>
    </>
  );
};
