import React from 'react'
import { Alert, AlertIcon, Box } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import { CreateQuizStore } from './CreateQuizStore';
import CreateQuestionForm from './components/CreateQuestionForm';
import AddAnswersForm from './components/AddAnswersForm';

interface CreateQuizProps {
    store: CreateQuizStore
}

const CreateQuiz: React.FC<CreateQuizProps> = observer(({ store }) => {
    return (
        <Box p='10'>
            <CreateQuestionForm store={store} />
            {store.createQuizFailure && (
                <Alert mt='2' status="error">
                    <AlertIcon />
                    Error Creating a Quiz
                </Alert>
            )}
            {store.createQuizSuccess && (
                <>
                    <Alert mt='2' status="success">
                        <AlertIcon />
                        Created Quiz Successfully!
                        Now Add Answers Below
                    </Alert>
                    <AddAnswersForm store={store} />
                </>
            )}
        </Box>
    );
})

export default CreateQuiz