import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";



const ProtectedRoutes = () => {
    const { loading, user } = useContext(UserContext);

    if (loading) {
        return null;
    }

    return user ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoutes;