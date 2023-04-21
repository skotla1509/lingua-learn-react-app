import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addLanguageLearningThunk, getAllLanguagesThunk } from '../../thunks/app-thunks';
import { setLanguage } from '../../reducers/app-reducer';

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { languages } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.users);
  useEffect(() => {
    if (currentUser) {
      dispatch(getAllLanguagesThunk());
    }
  }, []);

  const onLanguageClick = (language) => {
    dispatch(setLanguage(language))
    dispatch(addLanguageLearningThunk({ language_id: language.language_id, user_id: currentUser.user_id }))
    navigate("/learn/language");
  }

  return (
    <>
      {currentUser &&
        <>
          <h1 className='m-4 container'>Hi {currentUser.first_name}, welcome to Lingua-Learn</h1>
          <div className='row m-4'>
            <div className='col border rounded p-4'>
              <h5>What do you want to learn?</h5>
              <ul className="list-group list-group-flush">
                {
                  languages.map((language, index) =>
                    <>
                      <div className='list-group-item list-group-item-action'>
                        <div className='row'>
                          <div className='col-8'>
                            <span
                              id={`languages-${index}`}
                              className="">
                              {
                                language.name
                              }
                            </span>
                          </div>
                          <div className='col-4'>
                            <button type="button" className="btn btn-primary float-end" onClick={() => onLanguageClick(language)}>Start Learning</button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              </ul>
            </div>
            <div className='ms-1 col border rounded p-4'>
              <h5>Your journey</h5>
            </div>
          </div>
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
