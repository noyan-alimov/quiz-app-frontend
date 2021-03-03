import { config } from '../config/config';

export interface CreateQuizParams {
	token: string;
	userId: string;
	question: string;
	imageFileName?: string;
}

export interface CreateQuizResponseData {
	id: number;
	imageurl: string | null;
	question: string;
	userId: string;
}

export interface CreateQuizResponse {
	status: number;
	data: CreateQuizResponseData;
}

export const createQuiz = async ({
	token,
	userId,
	question,
	imageFileName,
}: CreateQuizParams): Promise<CreateQuizResponse> => {
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
