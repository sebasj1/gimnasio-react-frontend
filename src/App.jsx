import {  useEffect } from "react";

import { Navbar } from "./components/navbar";
import { Header } from "./containers/header";
import { Program_container } from "./containers/program_container";

import Head from "./components/head";
import { Personalized } from "./containers/personalized";
import { Plans } from "./containers/plans";
import { Footer } from "./containers/footer";
import { Copyright } from "./components/copyright";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Contact } from "./containers/contact";
import { Calendary } from "./containers/calendary";
import { StartSession } from "./containers/startSesion";
import { Register } from "./containers/register";
import { SessionContext, SessionProvider } from "./context/session";
import { Edit_user } from "./containers/edit_user";

function App() {
  let isRegister = false;
  useEffect(() => {
    //obtener si ya hay sesion iniciada
    const tokenLS = localStorage.getItem("AuthToken");
    const userLS = localStorage.getItem("User");
    userLS != null && tokenLS != null
      ? (isRegister = true)
      : (isRegister = false);
  }, []);

  return (
    <>
      <SessionProvider>
        <Router>
          <Head />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Program_container />
                  <Personalized />
                  <Plans />
                </>
              }
            ></Route>
            <Route
              path="/contacto"
              element={
                <>
                  <Contact />
                </>
              }
            ></Route>
            
             {!isRegister ? (
              <>
                <Route
                  path="/agenda"
                  element={
                    <>
                      <Calendary />
                    </>
                  }
                ></Route>
              </>
            ) : (
              Navigate("/")
            )}
            {!isRegister ? (
              <>
                <Route
                  path="/iniciarSesion"
                  element={
                    <>
                      <StartSession />
                    </>
                  }
                ></Route>
              </>
            ) : (
              Navigate("/")
            )}
            {!isRegister ? (
              <Route
                path="/registrarse"
                element={
                  <>
                    <Register />
                  </>
                }
              ></Route>
            ) : (
              Navigate("/")
            )}{" "}
            <Route
              path="/editarUsuario"
              element={
                <>
                  <Edit_user />
                </>
              }
            ></Route>
          </Routes>
          <Footer />
          <Copyright></Copyright>
        </Router>
      </SessionProvider>
    </>
  );
}

export default App;
