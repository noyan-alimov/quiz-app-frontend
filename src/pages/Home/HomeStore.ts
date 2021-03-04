import { makeObservable, observable, runInAction, action } from 'mobx';
import { QuizModel } from '../../api/createQuiz';
import { fetchAllQuizzes } from '../../api/fetchAllQuizzes';

export class HomeStore {
	quizzes: QuizModel[] = [];

	constructor() {
		makeObservable(this, {
			quizzes: observable,
			loadQuizzes: action,
		});
	}

	async loadQuizzes() {
		const res = await fetchAllQuizzes();
		runInAction(() => {
			if (res.status === 200) {
				this.quizzes = res.data;
			}
		});
	}
}
