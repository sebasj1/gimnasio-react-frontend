import { createContext, useEffect, useState } from "react";
import { get_turn, getUserRefresh } from "../handler_api";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [AuthToken, setAuthToken] = useState(null);
  const [User, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [daysChoosen, setDaysChoosen] = useState({});

  useEffect(() => {
    //obtener si ya hay sesion iniciada
    if (User) {
      const load = async () => {
        try {
          // Espera a que se resuelva la promesa de get_turn

          const id = JSON.parse(User).id_usuario;
          const new_user = await getUserRefresh(id, AuthToken);

          setUser(new_user);
          setIsRegister(true);

          const get = await get_turn(id,AuthToken);
          // Pasa el resultado a la función addDay
          Object.keys(get).map((key) => ({ [key]: get[key] }));
          setDaysChoosen(get);
        } catch (error) {
          console.error("Error al cargar datos:", error);
        }
      };

      load();
    }
  }, [AuthToken]);

  useEffect(() => {
    const tokenLS = localStorage.getItem("AuthToken");
    const userLS = localStorage.getItem("User");

    if (userLS != null) {
      setAuthToken(tokenLS);
      setUser(userLS);
    }
  }, []);

  const login_context = (user, token) => {
    localStorage.setItem("AuthToken", token);
    localStorage.setItem("User", JSON.stringify(user));
    setAuthToken(token);
    setUser(user);
    setIsRegister(true);
  };

  const logOut = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("User");
    setAuthToken(null);
    setUser(null);
    setIsRegister(false);
  };

  const addDay = (obj) => {
    setDaysChoosen(obj);
  };

  return (
    <SessionContext.Provider
      value={{
        login_context,
        logOut,
        AuthToken,
        User,
        isRegister,
        addDay,
        daysChoosen,
        setDaysChoosen,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
