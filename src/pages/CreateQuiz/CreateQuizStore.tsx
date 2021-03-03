import { action, makeObservable, observable, runInAction } from "mobx";
import { addAnswers, addAnswersParams } from "../../api/addAnswers";
import { createQuiz, CreateQuizParams, CreateQuizResponseData } from "../../api/createQuiz";

export class CreateQuizStore {
    createQuizSuccess: boolean = false
    createQuizFailure: boolean = false
    currentQuiz: CreateQuizResponseData | undefined

    addAnswersSuccess: boolean = false
    addAnswersFailure: boolean = false

    constructor() {
        makeObservable(this, {
            createQuizSuccess: observable,
            createQuizFailure: observable,
            addAnswersSuccess: observable,
            addAnswersFailure: observable,
            createQuizRequest: action,
            // processAnswersInput: action,
            addAnswersToQuiz: action
        })
    }

    async createQuizRequest(params: CreateQuizParams): Promise<void> {
        try {
            const res = await createQuiz(params)
            runInAction(() => {
                if (res.status !== 201) {
                    this.createQuizFailure = true
                } else {
                    this.createQuizSuccess = true
                    this.currentQuiz = res.data
                }
            })
        } catch (err) {
            runInAction(() => {
                this.createQuizFailure = true
            })
        }
    }

    processAnswersInput(token: string, quizId: number, values: AnswersInputModel) {
        const answers = convertAnswersInputObjToArr(values)

        const params = {
            token,
            quizId,
            answers
        }

        this.addAnswersToQuiz(params)
    }

    async addAnswersToQuiz(params: addAnswersParams): Promise<void> {
        const res = await addAnswers(params)
        runInAction(() => {
            if (res.status !== 201) {
                this.addAnswersFailure = true
            } else {
                this.addAnswersSuccess = true
            }
        })
    }
}


export interface AnswersInputModel {
    answer1: string
    correct1: string
    answer2: string
    correct2: string
    answer3: string
    correct3: string
    answer4: string
    correct4: string
}


const convertAnswersInputObjToArr = (values: AnswersInputModel) => {
    const answer1 = {
        answer: values.answer1,
        correct: values.correct1 === 'TRUE' ? true : false
    }
    const answer2 = {
        answer: values.answer2,
        correct: values.correct2 === 'TRUE' ? true : false
    }
    const answer3 = {
        answer: values.answer3,
        correct: values.correct3 === 'TRUE' ? true : false
    }
    const answer4 = {
        answer: values.answer4,
        correct: values.correct4 === 'TRUE' ? true : false
    }

    return [answer1, answer2, answer3, answer4]
}