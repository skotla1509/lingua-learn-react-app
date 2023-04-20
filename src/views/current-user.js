import {useDispatch} from "react-redux";
import {useEffect} from "react";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        //
    }, [])
    return(children)
}
export default CurrentUser;