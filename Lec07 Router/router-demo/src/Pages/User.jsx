import { useLocation } from "react-router-dom";


export default function User(props) {
    const { state } = useLocation();
    const dataObj = state;
    return (
        <div>
            <h3>User Page</h3>
            userId = {dataObj.userId} <br />
            userName = {dataObj.userName} <br />
        </div>
    )
}
