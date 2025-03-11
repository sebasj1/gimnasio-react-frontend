import { useContext, useEffect } from "react";
import { SessionContext } from "./context/session";

export const UserRegister = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/auth/registro", {
      method: "POST", // Define que es una solicitud POST
      headers: {
        "Content-Type": "application/json", //  el cuerpo es JSON
      },
      body: JSON.stringify(data), // Convertimos  a una cadena JSON
    });
    if (!response.ok) {
      alert("No se ha podido registrar");
      throw new Error("Error al registrar");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const UserLogin = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      alert("Credenciales invalidas");
    }
    const result = await response.json();
    return result; // Retorna los datos del usuario y el token
  } catch (error) {
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getUserRefresh = async (id, token) => {
  try {
    const response = await fetch(
      `http://localhost:3000/usuarios/refresh/${id}`,
      {
        method: "GET", // Método GET (por defecto, pero se incluye para mayor claridad)
        headers: {
          Authorization: `Bearer ${token}`, // Aquí estamos agregando el token en los headers
        },
      }
    );

    if (!response.ok) {
      throw new Error("Ha ocurrido un error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const send_data_edit_user = async (id, data, token) => {
  try {
    const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.affectedRows === 0) {
      return false;
    } else {
      alert(result.message);
      return true;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const send_message = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/mensajes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.message);
    }
    const responseData = await response.json();
    alert(responseData.message);

    return responseData; //Devolver los datos recibidos
  } catch (error) {
    alert("Ha ocurrido un error al enviar el mensaje.");
    throw error;
  }
};

export const create_turn = async (data, token) => {
  try {
    await fetch("http://localhost:3000/turnos/", {
      method: "POST", // Define que es una solicitud POST
      headers: {
        "Content-Type": "application/json", // Especificamos que el cuerpo es JSON
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data), // Convertimos el objeto `data` a una cadena JSON
    })
      .then((response) => response.json()) // Convierte la respuesta en formato JSON
      .then((data) => {
        return;
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    throw new Error(error);
  }
};

export const delete_turn = async (id, token) => {
  try {
    await fetch(`http://localhost:3000/turnos/${id}`, {
      method: "DELETE", // Tipo de solicitud HTTP
      headers: {
        "Content-Type": "application/json", // Tipo de contenido
        Authorization: `Bearer ${token}`,
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
  } catch (error) {
    throw new Error(error);
  }
};

export const get_turn = async (id, token) => {
  try {
    const response = await fetch(`http://localhost:3000/turnos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Tipo de contenido
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error, no se puede obtener los datos`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
