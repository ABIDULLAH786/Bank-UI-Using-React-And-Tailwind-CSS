import "./App.css";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/homePage";
import Main from "./components/main";
import ManageUsers from "./pages/manageUsers";
import TransferUsers from "./pages/transferUsers";
import History from "./pages/history";
import PageNotFound from "./pages/pageNotFound";
import PageLayout from "./components/layout";
import Modal from "./themes/modal";
import ProtectedRoute from "./components/protectedRoute";
import { useSelector } from "react-redux";

function App() {
  const lng = useSelector((state) => state.languages.language);


  return (
    <>
      <Routes >
        <Route element={<PageLayout />}>
          <Route path={`/`} element={<Home />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Main />}>
              <Route path="/dashboard/manage-users" element={<ManageUsers />} />
              <Route
                path="/dashboard/transfer-to-users"
                element={<TransferUsers />}
              />
              <Route path="/dashboard/history" element={<History />} />
              <Route path="/dashboard/inbox" element={<Modal />} />
            </Route>
          </Route>

          <Route path={`/forgot_password`} element={<ForgotPassword />} />
          <Route
            path={`/reset_password`}
            element={<ResetPassword />}
          />
          <Route
            path={`/login_admin`}
            element={<Login />}
          />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
