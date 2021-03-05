import { action, makeObservable, observable, runInAction } from "mobx";
import { addAnswers } from "../../api/addAnswers";
import { createQuiz } from "../../api/createQuiz";
import { CreateQuizParams, QuizModel, addAnswersParams } from "../../api/models";
import { uploadImage } from "../../api/uploadImage";

export class CreateQuizStore {
    createQuizSuccess: boolean = false
    createQuizFailure: boolean = false
    currentQuiz: QuizModel | undefined

    addAnswersSuccess: boolean = false
    addAnswersFailure: boolean = false

    constructor() {
        makeObservable(this, {
            createQuizSuccess: observable,
            createQuizFailure: observable,
            addAnswersSuccess: observable,
            addAnswersFailure: observable,
            createQuizRequest: action,
            addAnswersToQuiz: action
        })
    }

    async createQuizRequest(params: CreateQuizParams, file?: File): Promise<void> {
        try {
            const resultQuestion = await createQuiz(params)
            if (file) {
                const resultImageStatus = await uploadImage(file)
                console.log(resultImageStatus)
            }
            runInAction(() => {
                if (resultQuestion.status !== 201) {
                    this.createQuizFailure = true
                } else {
                    this.createQuizSuccess = true
                    this.currentQuiz = resultQuestion.data
                }
            })
        } catch (err) {
            runInAction(() => {
                this.createQuizFailure = true
            })
        }
    }

    processAnswersInput(token: string, values: AnswersInputModel) {
        const answers = convertAnswersInputObjToArr(values)

        const params = {
            token,
            quizId: this.currentQuiz!.id,
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