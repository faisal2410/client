import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";



const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          
        <Route path="" element={<Dashboard />} />

        </Route>

        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
