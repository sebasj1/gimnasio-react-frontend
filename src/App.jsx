import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./components/navbar";
import { Header } from "./containers/header";
import { Program_container } from "./containers/program_container";
import { Helmet } from "react-helmet";
import Head from "./components/head";
import { Personalized } from "./containers/personalized";
import { Plans } from "./containers/plans";
import { Footer } from "./containers/footer";
import { Copyright } from "./components/copyright";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Contact } from "./containers/contact";
import { Calendary } from "./containers/calendary";
import { StartSession } from "./containers/startSesion";
import { Register } from "./containers/register";

function App() {
  return (
    <>
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
          <Route
            path="/agenda"
            element={
              <>
                <Calendary />
              </>
            }
          ></Route>
          <Route
            path="/iniciarSesion"
            element={
              <>
                <StartSession />
              </>
            }
          ></Route>
          <Route
            path="/registrarse"
            element={
              <>
                <Register />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
        <Copyright></Copyright>
      </Router>
    </>
  );
}

export default App;
