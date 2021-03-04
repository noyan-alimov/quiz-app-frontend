import React from "react";
import { CreateQuizStore } from "./pages/CreateQuiz/CreateQuizStore";
import { HomeStore } from "./pages/Home/HomeStore";

export class AppStore {
    public createQuizStore: CreateQuizStore
    public homeStore: HomeStore

    constructor() {
        this.createQuizStore = new CreateQuizStore()
        this.homeStore = new HomeStore()
    }
}

export const appStoreContext = React.createContext(new AppStore())