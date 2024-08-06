import { Link } from "react-router-dom";

export function Invalid(){
    return(
        <div>
            <h3>Invalid credinatial</h3>
            <Link to="/login">Back To Login</Link>
        </div>
    )
}