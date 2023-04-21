import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
	createPostForLanguageThunk,
	getAllDecksForLanguageThunk,
	getAllPostsForLanguagesThunk
} from '../../thunks/app-thunks';
import {setDeck} from "../../reducers/app-reducer";

const Deck = () => {
	const [post,setPost] = useState("")
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {decks, selected_language, posts} = useSelector((state) => state.app);
	const {currentUser} = useSelector((state) => state.users);
	useEffect(() => {
		dispatch(getAllDecksForLanguageThunk(selected_language.language_id))
		dispatch(getAllPostsForLanguagesThunk(selected_language.language_id))
	}, []);
const createPost = () => {
	const requestBody = {
		content: post,
		user_id: currentUser.user_id,
		language_id: selected_language.language_id
	}
	setPost("")
	dispatch(createPostForLanguageThunk(requestBody))
}
	const onDeckClick = (deck) => {
		dispatch(setDeck(deck))
		navigate("/learn/language/cards");
	}

	return (
		<>
			<>
				<h1 className='m-4 container'>Learning {selected_language.name}</h1>
				<div className='row m-4'>
					<div className='col border rounded p-4'>
						<h5>Lets get started!</h5>
						<ul className="list-group list-group-flush">
							{
								decks.map((deck, index) =>
														<div className ="list-group-item list-group-item-action"
																 onClick={() => onDeckClick(deck)}
														>

															<div id={`decks-title-${index}`}
																	 className="d-flex w-100 justify-content-between">
																<h5 className="mb-1">{deck.name}</h5>

															</div>
															<p id={`decks-desc-${index}`} className="mb-1">{deck.description}</p>
														</div>
								)
							}
						</ul>
					</div>
					<div className='ms-1 col border rounded p-4'>
						<h5>Create a Language exchange post</h5>
						<div className="mt-2 row">
							<div className="row mt-2 mb-2">
								<div className="col-10">
                        <textarea
													onChange={(e) => setPost(e.target.value)}
													placeholder="Write new comment"
													className="form-control">
                        </textarea>
								</div>
								<div className="col-2">
									<button className="btn btn-primary rounded"
													onClick={createPost}>Post
									</button>
								</div>
							</div>
						</div>
						<ul className="list-group">
							{
								posts.map(
									(item, index) =>
										<div className ="list-group-item list-group-item-action">

											<div id={`posts-title-${index}`}
													 className="d-flex w-100 justify-content-between">
												<h5 className="mb-1">{item.first_name}  {item.last_name}</h5>

											</div>
											<p id={`posts-desc-${index}`} className="mb-1">{item.content}</p>
										</div>
								)
							}
						</ul>

					</div>
				</div>
			</>

		</>
	);
}

export default Deck;
