import { config } from '../config/config';
import { CreateQuizParams, QuizResponse } from './models';

export const createQuiz = async ({
	token,
	userId,
	question,
	imageFileName,
}: CreateQuizParams): Promise<QuizResponse> => {
	if (!imageFileName) {
		imageFileName = undefined;
	}

	const res = await fetch(`${config.BACKEND_URL}/main-backend/quizzes`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ userId, question, imageFileName }),
	});
	const data = await res.json();

	return { status: res.status, data };
};
