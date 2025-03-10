import { Routes, Route } from "react-router-dom";

import { Home, Tour } from "../pages";
import Error from "../pages/error/Error";

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  );
};
