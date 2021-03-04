import { config } from '../config/config';

export interface AnswerModel {
	id: number;
	answer: string;
	correct: boolean;
}

export interface FetchAnswersResponse {
	status: number;
	data: AnswerModel[];
}

export const fetchAnswersByQuizId = async (
	quizId: number
): Promise<FetchAnswersResponse> => {
	const res = await fetch(`${config.MAIN_BACKEND_URL}/answers/quiz/${quizId}`);
	const data = await res.json();
	return { status: res.status, data };
};
