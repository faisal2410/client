import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category.jsx";
import AdminProduct from "./pages/admin/Product.jsx";
import AdminProducts from "./pages/admin/Products";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import Shop from "./pages/Shop";
import Search from "./pages/Search";




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
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />     
        </Route>

    <Route path="/dashboard" element={<AdminRoute/>}>

          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/category" element={<AdminCategory />} />
          <Route path="admin/product" element={<AdminProduct />} /> 
          <Route path="admin/products" element={<AdminProducts />} /> 
          <Route
            path="admin/product/update/:slug"
            element={<AdminProductUpdate />}
          /> 

    </Route>


        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
