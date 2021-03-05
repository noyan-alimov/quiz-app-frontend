import { Box, Text, Image, RadioGroup, Stack, Radio, Center, Button, useToast } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { ReactText } from 'react'
import { CompleteQuizStore } from './CompleteQuizStore';

interface CompleteQuizProps {
    match: any
    store: CompleteQuizStore
}

const CompleteQuiz: React.FC<CompleteQuizProps> = observer(({ match, store }) => {
    const quizId: string = match.params.id

    React.useEffect(() => {
        store.loadQuiz(+quizId)
        // eslint-disable-next-line
    }, [])

    const [value, setValue] = React.useState<string>('')
    const handleChange = (nextValue: ReactText) => {
        setValue(nextValue as string)
    }

    const toast = useToast()

    const handleClick = () => {
        const selectedAnswer = store.getSelectedAnswer(value)
        const correctAnswer = store.getCorrectAnswer()
        if (selectedAnswer!.correct) {
            toast({
                title: "Answer is Correct!",
                description: "Well Done!",
                status: "success",
                duration: 9000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Incorrect Answer :(",
                description: `Correct answer is: ${correctAnswer?.answer}`,
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <Box my={5}>
            {store.quiz && (
                <>
                    <Text fontSize='3xl' textAlign='center'>{store.quiz.question}</Text>
                    {store.quiz.imageurl && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image src={store.quiz.imageurl} alt={store.quiz.question} objectFit="cover" boxSize="300px" />
                        </div>
                    )}
                </>
            )}
            {store.answers && (
                <Center mt={5}>
                    <RadioGroup onChange={handleChange} value={value}>
                        <Stack spacing={5}>
                            {store.answers.map(answer => (
                                <Radio key={answer.id} value={answer.answer}>
                                    {answer.answer}
                                </Radio>
                            ))}
                            <Button onClick={handleClick}>SUBMIT</Button>
                        </Stack>
                    </RadioGroup>
                </Center>
            )}
        </Box>
    );
})

export default CompleteQuiz