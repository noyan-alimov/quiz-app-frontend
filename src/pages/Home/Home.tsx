import { Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react'
import { CreateQuizStore } from '../CreateQuiz/CreateQuizStore';
import Quiz from './components/Quiz';
import { HomeStore } from './HomeStore';

interface HomeProps {
    homeStore: HomeStore
    createQuizStore: CreateQuizStore
}

const Home: React.FC<HomeProps> = observer(({ homeStore, createQuizStore }) => {
    React.useEffect(() => {
        homeStore.loadQuizzes()
    }, [])

    return (
        <Stack spacing={5} mb={10}>
            {homeStore.quizzes.map(quiz => (
                <Quiz key={quiz.id} quiz={quiz} />
            ))}
        </Stack>
    );
})

export default Home