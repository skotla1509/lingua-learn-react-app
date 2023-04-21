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

const Practice = () => {
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
	dispatch(createPostForLanguageThunk(requestBody))
	setPost("")
}
	const onDeckClick = (deck) => {
		dispatch(setDeck(deck))
		navigate("/learn/language/cards");
	}

	return (
		<>
			<h1> Practice </h1>
		</>
	);
}

export default Practice;
