import { config } from '../config/config';

export interface createQuizParams {
	token: string;
	userId: string;
	question: string;
	imageFileName?: string;
}

export interface createQuizResponseData {
	id: number;
	imageurl: string | null;
	question: string;
	userId: string;
}

export interface createQuizResponse {
	status: number;
	data: createQuizResponseData;
}

export const createQuiz = async ({
	token,
	userId,
	question,
	imageFileName,
}: createQuizParams): Promise<createQuizResponse> => {
	if (!imageFileName) {
		imageFileName = undefined;
	}

	const res = await fetch(`${config.MAIN_BACKEND_URL}/quizzes`, {
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
