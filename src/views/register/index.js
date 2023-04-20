import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import Required from "../components/required";
import {Navigate} from "react-router";
import {registerThunk} from "../../thunks/users-thunks";
import {setErrorMessage} from "../../reducers/users-reducer";

const Register = () => {
  const {registerSuccess, errorMessage, loading} = useSelector((state) => state.users);
  const [user, setUser] = useState(
    {
      first_name: '',
      last_name: '',
      user_id: '',
      password: '',
      confirm_password: ''
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spaceBetween = "mt-3";

  const updateFormData = (field, value) => {
    const newUser = {...user};
    newUser[field] = value;
    setUser(newUser);
  };

  const register = async () => {
    const error = validateForm(user);
    if (error) {
      dispatch(setErrorMessage(error));
    } else {
      dispatch(setErrorMessage(""));
      dispatch(registerThunk(user));
    }
  };

  const redirectToLogin = () => {
    navigate("/login");
  }

  if (registerSuccess) {
    return (<Navigate to={'/login'}/>)
  }

  return (
    <>
      <div className="row justify-content-center m-4">
        <div className="d-none d-lg-block col-lg-4 col-xl-4 position-relative border rounded p-0">
          <div className="wd-image-caption p-4">
            <h1 className="text-info">Hey there!</h1>
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
            <>
                  <div className="row">
                    <div className="col">
                      <h3>Register</h3>
                      <span>Already have account?</span>
                      <button type="button"
                              onClick={redirectToLogin}
                              className="btn btn-link pt-0 px-1">Login</button>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ${spaceBetween}`}>
                      <label htmlFor="register-first-name"
                             className="form-label">First Name</label>
                      <Required/>
                      <input id="register-first-name"
                             className="form-control"
                             value={user.first_name}
                             onChange={(e) => updateFormData("first_name",
                                                             e.target.value)}
                             placeholder="Enter first name"/>
                    </div>
                    <div
                      className={`col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ${spaceBetween}`}>
                      <label htmlFor="register-last-name"
                             className="form-label">Last Name</label>
                      <Required/>
                      <input id="register-last-name"
                             className="form-control"
                             value={user.last_name}
                             onChange={(e) => updateFormData("last_name",
                                                             e.target.value)}
                             placeholder="Enter last name"/>
                    </div>
                  </div>
                  <div className={`row + ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="register-user-name"
                             className="form-label">User Name</label>
                      <Required/>
                      <input id="register-user-name"
                             className="form-control"
                             value={user.user_id}
                             onChange={(e) => updateFormData("user_id",
                                                             e.target.value)}
                             placeholder="Enter user name"/>
                    </div>
                  </div>
                  <div className={`row + ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="register-password"
                             className="form-label">Password</label>
                      <Required/>
                      <input type="password"
                             id="register-password"
                             className="form-control"
                             value={user.password}
                             onChange={(e) => updateFormData("password",
                                                             e.target.value)}
                             placeholder="Enter password"/>
                    </div>
                  </div>
                  <div className={`row + ${spaceBetween}`}>
                    <div className="col">
                      <label htmlFor="register-confirm-password"
                             className="form-label">Confirm Password</label>
                      <Required/>
                      <input type="password"
                             id="register-confirm-password"
                             className="form-control"
                             value={user.confirm_password}
                             onChange={(e) => updateFormData("confirm_password",
                                                             e.target.value)}
                             placeholder="Confirm password"/>
                    </div>
                  </div>
                  {
                    errorMessage &&
                    <div className={`row + ${spaceBetween}`}>
                      <div className="col">
                        <div className="text-danger">{errorMessage}</div>
                        <div className="text-danger">Please fix above errors
                          to proceed to next step.
                        </div>
                      </div>
                    </div>
                  }
                  <div className={`row + ${spaceBetween} float-end`}>
                    <div className="col">
                      {
                        loading &&
                        <button type="button"
                                disabled
                                onClick={register}
                                className="btn btn-secondary">
                          ...loading
                        </button>
                      }
                      {
                        !loading &&
                        <button type="button"
                                onClick={register}
                                className="btn btn-primary">Register
                        </button>
                      }
                    </div>
                  </div>
                </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const validateForm = (formData) => {
  let errorMessage = "";
  if (!formData.first_name) {
    errorMessage += "First Name is missing! ";
  }
  if (!formData.last_name) {
    errorMessage += "Last Name is missing! ";
  }
  if (!formData.user_id) {
    errorMessage += "User Name is missing! ";
  }
  if (!formData.password) {
    errorMessage += "Password is missing! ";
  }
  if (!formData.confirm_password) {
    errorMessage += "Confirm Password is missing! ";
  }
  if (formData.password !== formData.confirm_password) {
    errorMessage += "Password and Confirm Password don't match! ";
  }
  return errorMessage;
}

export default Register;