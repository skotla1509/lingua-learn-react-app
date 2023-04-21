import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	createPracticeHistoryForLanguageThunk,
	getAllPracticeQuestionsForDeckThunk
} from '../../thunks/app-thunks';
import { Container, Form, Button } from 'react-bootstrap';

const Practice = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { selected_deck, questions, practice } = useSelector((state) => state.app);
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
			if (question.ans && responses[index] && question.ans.toLowerCase() === responses[index].toLowerCase()) {
				score++
			}
		})
		console.log(score)
		const requestBody = {
			user_id: currentUser.user_id,
			deck_id: selected_deck.deck_id,
			score_received: score
		}
		dispatch(createPracticeHistoryForLanguageThunk(requestBody))
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit} aria-disabled={!!practice}>
				{questions.map((question, index) => (
					<Form.Group key={`question-form-${index}`}>
						<Form.Label>{question.text}</Form.Label>
						{question.type === "MCQ" && (
							<div>
								<Form.Check
									type="radio"
									label={question.option1}
									name={`question-${index}`}
									id={`question-${index}-option1`}
									value={responses[index] === question.option1}
									onChange={() => handleAnswer(index, question.option1)}
								/>
								<Form.Check
									type="radio"
									label={question.option2}
									name={`question-${index}`}
									id={`question-${index}-option2`}
									value={responses[index] === question.option2}
									onChange={() => handleAnswer(index, question.option2)}
								/>
								<Form.Check
									type="radio"
									label={question.option3}
									name={`question-${index}`}
									id={`question-${index}-option3`}
									value={responses[index] === question.option3}
									onChange={() => handleAnswer(index, question.option3)}
								/>
								<Form.Check
									type="radio"
									label={question.option4}
									name={`question-${index}`}
									id={`question-${index}-option4`}
									value={responses[index] === question.option4}
									onChange={() => handleAnswer(index, question.option4)}
								/>
							</div>
						)}
						{question.type === "FIB" && (
							<Form.Control
								type="text"
								placeholder="Enter your answer"
								value={responses[index]}
								onChange={(e) => handleAnswer(index, e.target.value)}
							/>
						)}
						{question.type === "TF" && (
							<div>
								<Form.Check
									type="radio"
									label="True"
									name={`question-${index}`}
									id={`question-${index}-true`}
									value={responses[index] === 'True'}
									onChange={() => handleAnswer(index, "True")}
								/>
								<Form.Check
									type="radio"
									label="False"
									name={`question-${index}`}
									id={`question-${index}-false`}
									value={responses[index] === 'False'}
									onChange={() => handleAnswer(index, "False")}
								/>
							</div>
						)}
					</Form.Group>
				))}
				<Button type="submit">Submit</Button>
				{practice && <h4>Your score: {practice.score_received}</h4>}
			</Form>
		</Container>
	);
};


export default Practice;