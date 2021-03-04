import { Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React from 'react'
import Quiz from './components/Quiz';
import { HomeStore } from './HomeStore';

interface HomeProps {
    store: HomeStore
}

const Home: React.FC<HomeProps> = observer(({ store }) => {
    React.useEffect(() => {
        store.loadQuizzes()
    }, [])

    return (
        <Stack spacing={5} mb={10}>
            {store.quizzes.map(quiz => (
                <Quiz key={quiz.id} quiz={quiz} />
            ))}
        </Stack>
    );
})

export default Home