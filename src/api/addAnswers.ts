import { config } from '../config/config';

interface AnswerModel {
	answer: string;
	correct: boolean;
}

export interface addAnswersParams {
	token: string;
	quizId: number;
	answers: AnswerModel[];
}

export interface addAnswersResponse {
	status: number;
}

export const addAnswers = async ({
	token,
	quizId,
	answers,
}: addAnswersParams): Promise<addAnswersResponse> => {
	const res = await fetch(`${config.MAIN_BACKEND_URL}/answers`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ quizId, answers }),
	});

	return res;
};
