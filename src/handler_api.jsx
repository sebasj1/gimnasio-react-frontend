import { useContext, useEffect } from "react";
import { SessionContext } from "./context/session";

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
        return false;
      } else {
        alert(data.message);
        return true;
      } // Manejo de la respuesta exitosa
    })
    .catch((error) => {
      console.error("Error:", error); // Manejo de errores
    });
};
export const UserLogin = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST", // Define que es una solicitud POST
      headers: {
        "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
      },
      body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    return result; // Retorna los datos del usuario o el token, dependiendo de lo que te devuelva la API
  } catch (error) {
    throw new Error("Ha ocurrido un error", error); // Si deseas que el error se propague
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`);

    // Verifica si la respuesta es exitosa (status 200)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Convierte la respuesta a JSON
    const data = await response.json();

    // Devuelve los datos
    return data;
  } catch (error) {
    console.error("Error:", error); // Manejo de errores
    throw error; // Re-lanza el error si lo necesitas
  }
};

export const getUserRefresh = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/usuarios/refresh/${id}`
    );

    // Verifica si la respuesta es exitosa (status 200)
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Convierte la respuesta a JSON
    const data = await response.json();

    // Devuelve los datos
    return data;
  } catch (error) {
    console.error("Error:", error); // Manejo de errores
    throw error; // Re-lanza el error si lo necesitas
  }
};
export const send_data_edit_user = async (id, data) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "PUT", // Define que es una solicitud PUT
      headers: {
        "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
      },
      body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
    });

    const result = await response.json(); // Obtener el cuerpo de la respuesta en formato JSON

    if (result.affectedRows === 0) {
      return false; // Devolver false si no hubo cambios
    } else {
      alert(result.message); // Mostrar mensaje de éxito
      return true; // Devolver true si la actualización fue exitosa
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return false; // Devolver false si ocurre un error durante la solicitud
  }
};
export const send_message = async (data) => {
  await fetch("http://localhost:3000/mensajes/", {
    method: "POST", // Define que es una solicitud POST
    headers: {
      "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
  })
    .then((response) => response.json()) // Convierte la respuesta en formato JSON
    .then((data) => {
      alert(data.message);
      return true;
    })
    .catch((error) => {
      throw new Error(error); // Manejo de errores
    });
};

export const create_turn = async (data) => {
  await fetch("http://localhost:3000/turnos/", {
    method: "POST", // Define que es una solicitud POST
    headers: {
      "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
    },
    body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
  })
    .then((response) => response.json()) // Convierte la respuesta en formato JSON
    .then((data) => {
      
      return ;
    })
    .catch((error) => {
      throw new Error(error); // Manejo de errores
    });
};

export const delete_turn = async (id) => {
  await fetch(`http://localhost:3000/turnos/${id}`, {
    method: "DELETE", // Tipo de solicitud HTTP
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
      //  Authorization: "Bearer " + token, // Si necesitas un token de autenticación
    },
  })
    .then((response) => {
      if (response.ok) {
        return;
        // Actualizar UI para reflejar la eliminación (por ejemplo, eliminar el producto de la lista en la interfaz)
      } else {
        return;
      }
    })
    .catch((error) => console.error("Error de red:", error));
};

export const get_turn = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/turnos/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
