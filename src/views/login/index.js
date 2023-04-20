import React, {useState} from "react";
import './index.css';
import Required from "../components/required";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {changePasswordThunk, loginThunk } from "../../thunks/users-thunks";
import {setErrorMessage} from "../../reducers/users-reducer";

const Login = () => {
  const {loginSuccess, passwordChangeSuccess, errorMessage, loading} = useSelector((state) => state.users);
  const [user, setUser] = useState(
    {
      user_id: '',
      password: ''
    }
  );
  const [passwordUpdate, setPasswordUpdate] = useState(
    {
      user_id: '',
      password: '',
      confirm_password: ''
    }
  )
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const spaceBetween = "mt-3";

  const redirectToRegister = () => {
    navigate("/register");
  };

  if (loginSuccess) {
    return (<Navigate to={'/'}/>)
  }

  const login = () => {
    const error = validateFormPage1(user);
    if (error) {
      dispatch(setErrorMessage(error));
    } else {
      dispatch(setErrorMessage(""));
      dispatch(loginThunk(user));
    }
  };

  const updateFormDataPage1 = (field, value) => {
    const newState = {...user};
    newState[field] = value;
    setUser(newState);
  };

  const updateFormDataPage2 = (field, value) => {
    const newState = {...passwordUpdate};
    newState[field] = value;
    setPasswordUpdate(newState);
  };

  const changePassword = () => {
    const error = validateFormPage2(passwordUpdate);
    if (error) {
      dispatch(setErrorMessage(error));
    } else {
      dispatch(setErrorMessage(""));
      const request = {
        user_id: passwordUpdate.user_id,
        password: passwordUpdate.password
      }
      dispatch(changePasswordThunk(request));
    }
  }

  return (
    <>
      <div className="row justify-content-center m-4">
        <div className="d-none d-lg-block col-lg-4 col-xl-4 position-relative border rounded p-0">
          <div className="wd-image-caption p-4">
            <h1 className="text-info">Welcome Back!!!</h1>
            <div className="mt-4">
              Get access to a wealth of interactive resources and learning materials to help you master a new 
              language quickly and easily. Join our community of language learners today and start your 
              journey to fluency!
            </div>
            <div className="bg-info mt-4" style={{height: "5px", width: "50px"}}></div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 border rounded px-2">
          <div className="row mx-1">
            <div className="col pt-2 pb-2">
              {
                (page === 1) &&
                <>
                  <div className="row">
                    <div className="col">
                      <h3>Login</h3>
                      <span>New to Lingua-Learn?</span>
                      <button type="button"
                              onClick={redirectToRegister}
                              className="btn btn-link pt-0 px-1">Register
                      </button>
                    </div>
                  </div>
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="login-user-name"
                             className="form-label">User Name</label>
                      <Required/>
                      <input id="login-user-name"
                             className="form-control"
                             value={user.user_id}
                             onChange={(e) => updateFormDataPage1("user_id",
                                                             e.target.value)}
                             placeholder="Enter email address"/>
                    </div>
                  </div>
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="login-password"
                             className="form-label">Password</label>
                      <Required/>
                      <input type="password"
                             id="login-password"
                             className="form-control"
                             value={user.password}
                             onChange={(e) => updateFormDataPage1("password",
                                                             e.target.value)}
                             placeholder="Enter password"/>
                    </div>
                  </div>
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <button type="button"
                              onClick={() => setPage(2)}
                              className="btn btn-link p-0">Forgot Password
                      </button>
                    </div>
                  </div>
                  {
                    errorMessage &&
                    <div className={`row ${spaceBetween}`}>
                      <div className="col">
                        <div className="text-danger">{errorMessage}</div>
                        <div className="text-danger">Please fix above errors
                          to proceed to next step.
                        </div>
                      </div>
                    </div>
                  }
                  <div className={`row ${spaceBetween} float-end`}>
                    <div className="col">
                      {
                        loading &&
                        <button type="button"
                                disabled
                                onClick={login}
                                className="btn btn-secondary">
                          ...loading
                        </button>
                      }
                      {
                        !loading &&
                        <button type="button"
                                onClick={login}
                                className="btn btn-primary">Login
                        </button>
                      }
                    </div>
                  </div>
                </>
              }
              {
                (page === 2) &&
                <>
                  {
                    passwordChangeSuccess &&
                    <div className="row">
                      <div className="col">
                        <h3 className="text-success">Successfully updated!</h3>
                        <span>Click here to go back to </span>
                        <button type="button"
                                onClick={() => setPage(1)}
                                className="btn btn-link pt-0 px-1">Login
                        </button>
                        <span> page</span>
                      </div>
                    </div>
                  }
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="login-user-name"
                             className="form-label">User Name</label>
                      <Required/>
                      <input id="login-user-name"
                             className="form-control"
                             value={passwordUpdate.user_id}
                             onChange={(e) => updateFormDataPage2("user_id",
                                                             e.target.value)}
                             placeholder="Enter user name"/>
                    </div>
                  </div>
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="login-new-password"
                             className="form-label">New Password</label>
                      <Required/>
                      <input type="password"
                             id="login-new-password"
                             className="form-control"
                             value={passwordUpdate.password}
                             onChange={(e) => updateFormDataPage2("password",
                                                             e.target.value)}
                             placeholder="Enter new password"/>
                    </div>
                  </div>
                  <div className={`row ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="login-confirm-new-password"
                             className="form-label">Confirm New Password</label>
                      <Required/>
                      <input type="password"
                             id="login-confirm-new-password"
                             className="form-control"
                             value={passwordUpdate.confirm_password}
                             onChange={(e) => updateFormDataPage2("confirm_password",
                                                             e.target.value)}
                             placeholder="Confirm new password"/>
                    </div>
                  </div>
                  {
                    errorMessage &&
                    <div className={`row ${spaceBetween}`}>
                      <div className="col">
                        <div className="text-danger">{errorMessage}</div>
                        <div className="text-danger">Please fix above errors
                          to proceed to next step.
                        </div>
                      </div>
                    </div>
                  }
                  <div className={`row ${spaceBetween} float-end`}>
                    <div className="col">
                      {
                        loading &&
                        <button type="button"
                                disabled
                                onClick={changePassword}
                                className="btn btn-secondary">
                          ...loading
                        </button>
                      }
                      {
                        !loading &&
                        <button type="button"
                                onClick={changePassword}
                                className="btn btn-primary">Update
                        </button>
                      }
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const validateFormPage1 = (user) => {
  let errorMessage = "";
  if (!user.user_id) {
    errorMessage += "User Name is missing! ";
  }
  if (!user.password) {
    errorMessage += "Password is missing! ";
  }

  return errorMessage;
}

const validateFormPage2 = (passwordUpdate) => {
  let errorMessage = "";
  if (!passwordUpdate.user_id) {
    errorMessage += "User Name is missing! ";
  }
  if (!passwordUpdate.password) {
    errorMessage += "New Password is missing! ";
  }
  if (!passwordUpdate.confirm_password) {
    errorMessage += "Confirm New Password is missing! ";
  }
  if (passwordUpdate.password !== passwordUpdate.confirm_password) {
    errorMessage += "New Password and Confirm New Password don't match! ";
  }
  return errorMessage;
}
export default Login;