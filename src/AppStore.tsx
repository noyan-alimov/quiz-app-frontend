import React from "react";
import { CreateQuizStore } from "./pages/CreateQuiz/CreateQuizStore";

export class AppStore {
    public createQuizStore: CreateQuizStore

    constructor() {
        this.createQuizStore = new CreateQuizStore()
    }
}

export const appStoreContext = React.createContext(new AppStore())