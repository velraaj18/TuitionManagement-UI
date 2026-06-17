import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("jwtToken");
    
    // replace -> is to replace the previous history with new so that user won't get to see the previous pages without login and to avoid loop
    return token ? <Outlet/> : <Navigate to= "/login" replace/> 
}

export default ProtectedRoute;