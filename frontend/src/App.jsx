import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminViewLayout from "./components/adminView/adminViewLayout";
import Admindashboard from "./pages/adminView/dashboard";
import Adminproducts from "./pages/adminView/products";
import Adminorders from "./pages/adminView/orders";
import Adminfeatures from "./pages/adminView/features";
import ShopingViewLayout from "./components/shopingView/shopingViewLayout";
import NotFound from "./pages/notFound/notFound";
import ShoppingHome from "./pages/shopingView/home";
import ShoppingProduct from "./pages/shopingView/productsListing";
import ShoppingAccount from "./pages/shopingView/account";
import ShoppingCheckout from "./pages/shopingView/checkOut";
import CheckAuth from "./components/common/checkAuth";
import unAuthPage from "./pages/unAuth/unAuthPage";
function App() {
  const isAuthentication = false;
  const user = null;
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthentication} user={user}>
                <Authlayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />}></Route>
            <Route path="register" element={<AuthRegister />}></Route>
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthentication} user={user}>
                <AdminViewLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<Admindashboard />} />
            <Route path="products" element={<Adminproducts />} />
            <Route path="orders" element={<Adminorders />} />
            <Route path="features" element={<Adminfeatures />} />
          </Route>

          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthentication} user={user}>
                <ShopingViewLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />}></Route>
            <Route path="products" element={<ShoppingProduct />}></Route>
            <Route path="checkout" element={<ShoppingCheckout />}></Route>
            <Route path="account" element={<ShoppingAccount />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/unAuth" element={<unAuthPage/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
