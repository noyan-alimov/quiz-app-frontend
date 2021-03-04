interface Answer {
	answer: string;
	correct: boolean;
}

export interface addAnswersParams {
	token: string;
	quizId: number;
	answers: Answer[];
}

export interface addAnswersResponse {
	status: number;
}

export interface CreateQuizParams {
	token: string;
	userId: string;
	question: string;
	imageFileName?: string;
}

export interface QuizModel {
	id: number;
	imageurl: string | null;
	question: string;
	userId: string;
}

export interface QuizResponse {
	status: number;
	data: QuizModel;
}

export interface FetchAllQuizzesResponse {
	status: number;
	data: QuizModel[] | any;
}

export interface AnswerModel {
	id: number;
	answer: string;
	correct: boolean;
}

export interface FetchAnswersResponse {
	status: number;
	data: AnswerModel[];
}
