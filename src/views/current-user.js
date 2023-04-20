import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { profileThunk } from "../thunks/users-thunks";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}
export default CurrentUser;