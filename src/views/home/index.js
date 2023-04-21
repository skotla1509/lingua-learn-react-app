import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addLanguageLearningThunk, getAllLanguagesThunk, getUserLanguagesThunk, getUserStatisticsThunk } from '../../thunks/app-thunks';
import { setLanguage } from '../../reducers/app-reducer';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import myImage from '../../badge.jpg';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { languages, stats, learning_languages } = useSelector((state) => state.app);
  const { currentUser } = useSelector((state) => state.users);
  useEffect(() => {
    if (currentUser) {
      dispatch(getAllLanguagesThunk());
      dispatch(getUserStatisticsThunk(currentUser.user_id));
      dispatch(getUserLanguagesThunk(currentUser.user_id));
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
              <div className='row'>
                <div className='col'>
                  <h5>Languages you are learning</h5>
                  <div className="d-flex flex-wrap">
                    {learning_languages.map((lang, index) => (
                      <div key={"language-learning" + index} className="m-2">
                        <Badge variant="secondary" className='bg-info'>
                          <img src={myImage} alt={lang.name} width="24" height="24" className="mr-1 mx-1 rounded" />
                          {lang.name}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col'>
                  <h5>Your Practice History</h5>
                  <Row xs={1} md={2} lg={2}>
                    {stats.map((stat, index) => (
                      <Col key={index} className="mb-4">
                        <Card>
                          <Card.Body>
                            <Card.Title>{stat.language_name}</Card.Title>
                            <Card.Text>Average Score: {stat.avg_score}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
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
