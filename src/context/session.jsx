import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [AuthToken, setAuthToken] = useState(null);
  const [User, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [daysChoosen, setDaysChoosen] = useState({});

  useEffect(() => {
    //obtener si ya hay sesion iniciada
    const tokenLS = localStorage.getItem("AuthToken");
    const userLS = localStorage.getItem("User");
    if (userLS != null) {
      setAuthToken(tokenLS);
      setUser(JSON.parse(userLS));
      setIsRegister(true);
    }
  }, []);

  const login_context = (user, token) => {
    localStorage.setItem("AuthToken", AuthToken);
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
    setDaysChoosen({
      obj,
    });

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
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
