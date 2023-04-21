import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	createPracticeHistoryForLanguageThunk,
	getAllPracticeQuestionsForDeckThunk
} from '../../thunks/app-thunks';
import { setDeck } from "../../reducers/app-reducer";
import { Container, Form, Button } from 'react-bootstrap';

const Practice = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { selected_deck, questions } = useSelector((state) => state.app);
	const { currentUser } = useSelector((state) => state.users);
	useEffect(() => {
		dispatch(getAllPracticeQuestionsForDeckThunk(selected_deck.deck_id))
	}, []);
	const [responses, setResponses] = useState(Array(questions.length).fill(null));

	const handleAnswer = (index, answer) => {
		const newResponses = [...responses];
		newResponses[index] = answer;
		setResponses(newResponses);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(responses); // do something with the responses
		let score = 0;
		questions.map((question, index) => {
			if (question.ans.toLowerCase() === responses[index].toLowerCase()) {
				score++
			}
		})
		console.log(score)
		dispatch(createPracticeHistoryForLanguageThunk(selected_deck.deck_id))
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				{questions.map((question, index) => (
					<Form.Group key={question.que_id}>
						<Form.Label>{question.text}</Form.Label>
						{question.type === "MCQ" && (
							<div>
								<Form.Check
									type="radio"
									label={question.option1}
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-option1`}
									onChange={() => handleAnswer(index, question.option1)}
								/>
								<Form.Check
									type="radio"
									label={question.option2}
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-option2`}
									onChange={() => handleAnswer(index, question.option2)}
								/>
								<Form.Check
									type="radio"
									label={question.option3}
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-option3`}
									onChange={() => handleAnswer(index, question.option3)}
								/>
								<Form.Check
									type="radio"
									label={question.option4}
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-option4`}
									onChange={() => handleAnswer(index, question.option4)}
								/>
							</div>
						)}
						{question.type === "FIB" && (
							<Form.Control
								type="text"
								placeholder="Enter your answer"
								onChange={(e) => handleAnswer(index, e.target.value)}
							/>
						)}
						{question.type === "TF" && (
							<div>
								<Form.Check
									type="radio"
									label="True"
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-true`}
									onChange={() => handleAnswer(index, "True")}
								/>
								<Form.Check
									type="radio"
									label="False"
									name={`question-${question.que_id}`}
									id={`question-${question.que_id}-false`}
									onChange={() => handleAnswer(index, "False")}
								/>
							</div>
						)}
					</Form.Group>
				))}
				<Button type="submit">Submit</Button>
			</Form>
		</Container>
	);
};


export default Practice;