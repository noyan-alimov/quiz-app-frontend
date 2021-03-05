import { Box, Center, Button, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { QuizModel } from '../../../api/models';

interface QuizProps {
    quiz: QuizModel
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
    return (
        <Box>
            <Text fontSize='3xl' textAlign='center'>{quiz.question}</Text>
            {quiz.imageurl && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image textAlign='center' src={quiz.imageurl} alt={quiz.question} objectFit="cover" boxSize="400px" />
                </div>
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