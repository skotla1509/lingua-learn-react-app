import React from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { testThunk } from "../../thunks/users-thunks";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(testThunk());
  }, [])
  return (
    <>
      <h1 className='container'>Home Page</h1>
    </>
  );
}

export default Home;
