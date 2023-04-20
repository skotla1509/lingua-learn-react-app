import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
import { useEffect } from "react";
import { logoutThunk } from '../../thunks/users-thunks';

const Logout = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(logoutThunk());
  }, []);

  return (
    <Navigate to={'/login'}/>
  );
}

export default Logout;
