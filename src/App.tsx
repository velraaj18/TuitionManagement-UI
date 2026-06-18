import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Student from "./pages/Student";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <div>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/student" element={<Student />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
};

export default App;
