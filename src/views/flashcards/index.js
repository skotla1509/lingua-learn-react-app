import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	addNewFeedbackForDeckThunk,
	checkFavoriteDeckForUserThunk,
	getAllCardsForDeckThunk,
	getAverageFeedbackForDeckThunk,
	getFeedbackForDeckThunk,
	markUnmarkDeckAsFavoriteForUserThunk
} from '../../thunks/app-thunks';

const Flashcard = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [feedbackComment, setFeedbackComment] = useState("")
	const [rating, setRating] = useState(0);
	const { cards, selected_deck, isFavorite, feedbackList, average_rating } = useSelector((state) => state.app);
	const { currentUser } = useSelector((state) => state.users);
	const currentUserFeedback = feedbackList.find((item) => item.user_id === currentUser.user_id);
	useEffect(() => {
		dispatch(getAllCardsForDeckThunk(selected_deck.deck_id))
		dispatch(getFeedbackForDeckThunk(selected_deck.deck_id))
		dispatch(getAverageFeedbackForDeckThunk(selected_deck.deck_id))
		dispatch(checkFavoriteDeckForUserThunk({ deck_id: selected_deck.deck_id, user_id: currentUser.user_id }))
	}, []);

	const goToPractice = () => {
		navigate("/learn/language/practice")
	}

	const markFavorite = () => {
		dispatch(markUnmarkDeckAsFavoriteForUserThunk({ deck_id: selected_deck.deck_id, user_id: currentUser.user_id }))
	}

	const handleRatingChange = (event) => {
		const selectedRating = Number(event.target.value);
		setRating(selectedRating);
	};

	const submitFeedback = () => {
		const requestBody = {
			deck_id: selected_deck.deck_id,
			user_id: currentUser.user_id,
			rating: rating,
			comment: feedbackComment
		}
		dispatch(addNewFeedbackForDeckThunk(requestBody))
	}

	return (
		<>
			<>
				<div className="row">
					<div className="col-10">
						<h1 className='m-4 container'>Learning {selected_deck.name} : {selected_deck.description}</h1>
					</div>
					<div className="col-2 d-flex align-items-center">
						{isFavorite && <button type="button" className="btn btn-warning float-end" onClick={markFavorite}>Added to Favorites</button>}
						{!isFavorite && <button type="button" className="btn btn-info float-end" onClick={markFavorite}>Mark Favorite</button>}
					</div>
				</div>
				<div className='row m-4'>
					<div className='col border rounded p-4'>
						<div className="row mb-2">
							<div className="col">
								<h5>Lets get started!</h5>
							</div>

							<div className="col">
								<button type="button" className="btn btn-primary float-end" onClick={goToPractice}>Practice
								</button>
							</div>
						</div>
						<ul className="list-group list-group-flush">
							{
								cards.map((card, index) =>
									<div className="list-group-item list-group-item-action">

										<div id={`cards-title-${index}`}
											className="d-flex w-100 justify-content-between">
											<h5 className="mb-1">{card.front_text}</h5>

										</div>
										<p id={`cards-desc-${index}`} className="mb-1">{card.back_text}</p>
									</div>
								)
							}
						</ul>
					</div>

				</div>
				<div className='row m-4 justify-content-center'>
					<div className='col-6 p-4 border rounded'>
						{
							currentUserFeedback &&
							<>
								<div className='row'>
									<div className='col-12 m-2'>
										<h5>Your Rating: {currentUserFeedback.rating}</h5>
									</div>
									<div className="col-12 m-2">
										<h5>Comments: {currentUserFeedback.comment}</h5>
									</div>
								</div>
							</>
						}
						{
							!currentUserFeedback &&
							<>
								<div className='row'>
									<div className='col-12 m-2'>
										<h5>Your Rating</h5>
										<div className="btn-group" data-toggle="buttons">
											{[1, 2, 3, 4, 5].map((value) => (
												<label key={value} className={`btn btn-warning m-2 rounded ${rating === value ? "active" : ""}`}>
													<input type="radio" name="rating" value={value} onClick={handleRatingChange} />{value}
												</label>
											))}
										</div>
									</div>
									<div className="col-12 m-2">
										<h5>Comments</h5>
										<textarea
											onChange={(e) => setFeedbackComment(e.target.value)}
											placeholder="Write new comment"
											className="form-control">
										</textarea>
									</div>
									<div className="col-12 m-2">
										<button className="btn btn-primary rounded"
											onClick={submitFeedback}>Submit Feedback
										</button>
									</div>
								</div>
							</>
						}
					</div>
					<div className='col-6 p-4 border rounded'>
						<div className='row'>
							<h5>All Ratings: {average_rating ? average_rating : "No ratings yet"}</h5>
							<ul className="list-group">
								{
									feedbackList.map(
										(item, index) =>
											<div className="list-group-item list-group-item-action">

												<div id={`posts-title-${index}`}
													className="d-flex w-100 justify-content-between">
													<h5 className="mb-1">{item.first_name}  {item.last_name}</h5>
													<p id={`posts-desc-${index}`} className="mb-1">{item.rating}</p>
												</div>
												<p id={`posts-desc-${index}`} className="mb-1">{item.comment}</p>
											</div>
									)
								}
							</ul>
						</div>
					</div>
				</div>
			</>

		</>
	);
}

export default Flashcard;
