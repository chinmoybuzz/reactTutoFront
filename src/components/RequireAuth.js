import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    
    const { auth }=useAuth();
    const location=useLocation();
    const allowedRoles = ['admin', 'editor']; 

    return(
        auth?.roles?.find(role=>allowedRoles?.includes(role))
        ?<Outlet/>
        :auth?.user
            ?<Navigate to ='/unauthorized' state={{from:location}} replace/>
            :<Navigate to ='/login' state={{from:location}} replace/>
            
    );

}
export default RequireAuth;
