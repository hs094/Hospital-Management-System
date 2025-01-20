import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader show={!loaded} />
      {loaded && children}
    </>
  );
};

export default () => (
  <Routes>
    <Route
      path={routes.Presentation.path}
      element={
        <RouteWithLoader>
          <Presentation />
        </RouteWithLoader>
      }
    />
  </Routes>
);