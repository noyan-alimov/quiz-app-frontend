import React from "react";
import { CompleteQuizStore } from "./pages/CompleteQuiz/CompleteQuizStore";
import { CreateQuizStore } from "./pages/CreateQuiz/CreateQuizStore";
import { HomeStore } from "./pages/Home/HomeStore";

export class AppStore {
    public createQuizStore: CreateQuizStore
    public homeStore: HomeStore
    public completeQuizStore: CompleteQuizStore

    constructor() {
        this.createQuizStore = new CreateQuizStore()
        this.homeStore = new HomeStore()
        this.completeQuizStore = new CompleteQuizStore()
    }
}

export const appStoreContext = React.createContext(new AppStore())