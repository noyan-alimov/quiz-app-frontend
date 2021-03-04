import { config } from '../config/config';
import { QuizModel } from './createQuiz';

interface FetchAllQuizzesResponse {
	status: number;
	data: QuizModel[] | any;
}

export const fetchAllQuizzes = async (): Promise<FetchAllQuizzesResponse> => {
	const res = await fetch(`${config.MAIN_BACKEND_URL}/quizzes`);
	const data = await res.json();
	return { status: res.status, data };
};
