import { config } from '../config/config';
import { FetchAllQuizzesResponse } from './models';

export const fetchAllQuizzes = async (): Promise<FetchAllQuizzesResponse> => {
	const res = await fetch(`${config.BACKEND_URL}/main-backend/quizzes`);
	const data = await res.json();
	return { status: res.status, data };
};
