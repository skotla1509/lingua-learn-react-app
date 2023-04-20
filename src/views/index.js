import React from "react";
import {Routes, Route} from "react-router";
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from "react-router-dom";
import CurrentUser from "./current-user";
import Navigation from "./navigation.js";
import Home from "./home/index.js";
import Login from "./login/index.js";
import Register from "./register/index.js";
import usersReducer from "../reducers/users-reducer";
import appReducer from "../reducers/app-reducer";
import Deck from "./deck/index.js";

const store = configureStore(
  {
    reducer: {
      users: usersReducer,
      app: appReducer
    }
  }
)

function Tuiter() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <CurrentUser>
        <Navigation/>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/learn/language" element={<Deck/>}/>
            </Routes>
      </CurrentUser>
    </BrowserRouter>
    </Provider>
  );
}

export default Tuiter;