import { useContext } from "react";
import AuthContext from "../context/AuthProvider";


export default useAuth = () => {
    return useContext(AuthContext);
}