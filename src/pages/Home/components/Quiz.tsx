import { Box, AspectRatio, Center, Button, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { QuizModel } from '../../../api/createQuiz';

interface QuizProps {
    quiz: QuizModel
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
    return (
        <Box>
            <Text fontSize='3xl' textAlign='center'>{quiz.question}</Text>
            {quiz.imageurl && (
                <AspectRatio maxW="400px" ratio={4 / 3}>
                    <Image src={quiz.imageurl} alt={quiz.question} objectFit="cover" />
                </AspectRatio>
            )}
            <Center>
                <Button>
                    <Link to={`/quizzes/${quiz.id}`}>Answer</Link>
                </Button>
            </Center>
        </Box>
    );
}

export default Quiz