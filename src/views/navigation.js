import {Link, useNavigate} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import './index.css';
import { logoutThunk } from "../thunks/users-thunks";

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const parts = pathname.split('/')
    return(
      <div className="mt-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/">
              <img src="logo.png"
                   className="rounded p-0" height="60px" width="150px"
                   alt="" />
            </Link>
          </li>
          <li className="nav-item ps-2">
            <Link to="/"
                  className={`nav-link ${parts[1] === ''?'active': ''}`}>
              <h3>Home</h3>
            </Link>
          </li>
          <li className={`nav-item ${currentUser ? 'd-none':''}`}>
            <Link to="/login"
                  className={`nav-link ${parts[1] === 'login'?'active': ''}`}>
              <h3>Login</h3>
            </Link>
          </li>
          <li className={`nav-item ${currentUser ? 'd-none':''}`}>
            <Link to="/register"
                  className={`nav-link ${parts[1] === 'register'?'active': ''}`}>
              <h3>Register</h3>
            </Link>
          </li>
          {
            currentUser &&
            <li className="nav-item">
              <Link to={"/"}
                    onClick={() => {
                        dispatch(logoutThunk());
                      }
                    }
                    className={`nav-link ${parts[1] === 'logout'?'active': ''}`}>
                <h3>Log out</h3>
              </Link>
            </li>
          }
        </ul>
      </div>
    )
}

export default Navigation