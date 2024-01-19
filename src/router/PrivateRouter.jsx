import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({Children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div>Loading...</div>
    }
    
    if(user && user.uid){
        return Children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;