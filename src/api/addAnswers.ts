import { config } from '../config/config';
import { addAnswersParams, addAnswersResponse } from './models';

export const addAnswers = async ({
	token,
	quizId,
	answers,
}: addAnswersParams): Promise<addAnswersResponse> => {
	const res = await fetch(`${config.BACKEND_URL}/main-backend/answers`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ quizId, answers }),
	});

	return res;
};
