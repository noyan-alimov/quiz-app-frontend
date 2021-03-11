import { Box, Center, Button, Text, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { QuizModel } from '../../../api/models';

interface QuizProps {
    quiz: QuizModel
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
    return (
        <Center mt={10}>
            <Box bg='teal.50' w='500px' p={3}>
                <Text fontSize='2xl' textAlign='center'>{quiz.question}</Text>
                {quiz.imageurl && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image textAlign='center' src={quiz.imageurl} alt={quiz.question} objectFit="cover" boxSize="400px" />
                    </div>
                )}
                <Center mt={5}>
                    <Button>
                        <Link to={`/quizzes/${quiz.id}`}>Answer</Link>
                    </Button>
                </Center>
            </Box>
        </Center>
    );
}

export default Quiz