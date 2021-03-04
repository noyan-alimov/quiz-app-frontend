import { config } from '../config/config';
import { FetchAnswersResponse } from './models';

export const fetchAnswersByQuizId = async (
	quizId: number
): Promise<FetchAnswersResponse> => {
	const res = await fetch(
		`${config.BACKEND_URL}/main-backend/answers/quiz/${quizId}`
	);
	const data = await res.json();
	return { status: res.status, data };
};
