import { action, makeObservable, observable, runInAction } from "mobx";
import { createQuiz, createQuizParams } from "../../api/createQuiz";

export class CreateQuizStore {
    createQuizSuccess: boolean = false
    createQuizFailure: boolean = false

    constructor() {
        makeObservable(this, {
            createQuizSuccess: observable,
            createQuizFailure: observable,
            createQuizRequest: action
        })
    }

    async createQuizRequest(params: createQuizParams): Promise<void> {
        const res = await createQuiz(params)
        runInAction(() => {
            if (res.status !== 201) {
                this.createQuizFailure = true
            } else {
                this.createQuizSuccess = true
            }
        })
    }
}