import { action, makeObservable, observable, runInAction } from 'mobx';
import { QuizModel } from '../../api/createQuiz';
import {
	AnswerModel,
	fetchAnswersByQuizId,
} from '../../api/fetchAnswersByQuizId';
import { fetchQuizById } from '../../api/fetchQuizById';

export class CompleteQuizStore {
	quiz: QuizModel | undefined = undefined;
	answers: AnswerModel[] | undefined = undefined;

	constructor() {
		makeObservable(this, {
			quiz: observable,
			answers: observable,
			loadQuiz: action,
			loadAnswers: action,
		});
	}

	async loadQuiz(quizId: number) {
		const res = await fetchQuizById(quizId);
		if (res.status === 200) {
			runInAction(() => {
				this.quiz = res.data;
			});
			this.loadAnswers();
		}
	}

	async loadAnswers() {
		if (this.quiz && this.quiz.id) {
			const res = await fetchAnswersByQuizId(this.quiz.id);
			if (res.status === 200) {
				runInAction(() => {
					this.answers = res.data;
				});
			}
		}
		console.log(this.answers);
	}

	getSelectedAnswer(answer: string): AnswerModel | undefined {
		if (this.answers) {
			return this.answers.find(a => a.answer === answer);
		}
	}

	getCorrectAnswer(): AnswerModel | undefined {
		if (this.answers) {
			return this.answers.find(a => a.correct);
		}
	}
}
