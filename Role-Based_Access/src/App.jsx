import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import GuestPage from "./pages/GuestPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* Protected Route */}
        <Route path="/admin" element={
            <ProtectedRoute roles={['admin']}>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route path="/user" element={
            <ProtectedRoute roles={['admin', 'user']}>
              <UserPage />
            </ProtectedRoute>
          }
        />

        <Route path="/guest" element={
            <ProtectedRoute roles={['admin', 'user', 'guest']}>
              <GuestPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
