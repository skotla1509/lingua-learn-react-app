import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.users);
  useEffect(() => {
    //
  }, []);

  return (
    <>
      {currentUser &&
       <>
          <h1 className='m-4 container'>Hi {currentUser.first_name}, welcome to Lingua-Learn</h1>
       </>
      }
      {!currentUser &&
       <>
          <h1 className='m-4 container'>Please login to access Lingua-Learn</h1>
       </>
      }
    </>
  );
}

export default Home;
