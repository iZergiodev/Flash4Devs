import { Navigate, Route, Routes } from "react-router";

import { AuthRouter } from "../auth/router/AuthRouter";

export const Flash4DevsRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/auth/login" />} />

      <Route path="/auth/*" element={<AuthRouter />} />

    </Routes>
  );
};
