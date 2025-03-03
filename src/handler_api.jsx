export const UserRegister = (data) => {
  return fetch("http://localhost:3000/auth/registro", {
    method: "POST", // Define que es una solicitud POST
    headers: {
      "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
  })
    .then((response) => response.json()) // Convierte la respuesta en formato JSON
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert(data.message);
      } // Manejo de la respuesta exitosa
    })
    .catch((error) => {
      console.error("Error:", error); // Manejo de errores
    });
};
export const UserLogin = (data) => {
  return fetch("http://localhost:3000/auth/login", {
    method: "POST", // Define que es una solicitud POST
    headers: {
      "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
  })
    .then((response) => {
      //if (response.status == 200) 
       return  response.json();
      
      
    }) // Convierte la respuesta en formato JSON
    .then(
      (data) => {
        console.log(data);
      } // Manejo de la respuesta exitosa
    )
    .catch((error) => {
      console.error("Error:", error); // Manejo de errores
    });
};
