import { config } from '../config/config';
import { QuizResponse } from './createQuiz';

export const fetchQuizById = async (id: number): Promise<QuizResponse> => {
	const res = await fetch(`${config.BACKEND_URL}/main-backend/quizzes/${id}`);
	const data = await res.json();
	return { status: res.status, data };
};
