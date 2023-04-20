import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllLanguagesThunk } from '../../thunks/app-thunks';

const Deck = () => {
  const dispatch = useDispatch()
  const { languages, selected_language } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.users);
  useEffect(() => {
    
  }, []);

  return (
    <>
      <h1 className='m-4 container'>Decks page for {selected_language.name}</h1>
    </>
  );
}

export default Deck;
