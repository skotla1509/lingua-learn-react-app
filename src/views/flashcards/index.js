import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	getAllCardsForDeckThunk
} from '../../thunks/app-thunks';

const Flashcard = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { cards, selected_deck } = useSelector((state) => state.app);
	const { currentUser } = useSelector((state) => state.users);
	useEffect(() => {
		dispatch(getAllCardsForDeckThunk(selected_deck.deck_id))

	}, []);

	const goToPractice = () => {
		navigate("/learn/language/practice")
	}

	const markFavorite = () => {
		//
	}

	return (
		<>
			<>
				<div className="row">
					<div className="col">
						<h1 className='m-4 container'>Learning {selected_deck.name} : {selected_deck.description}</h1>
					</div>
					<div className="col">
						<button type="button" className="btn btn-primary float-end" onClick={markFavorite}>Mark Favorite</button>
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

			</>

		</>
	);
}

export default Flashcard;
