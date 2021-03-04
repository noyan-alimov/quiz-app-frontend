import React from 'react'

interface CompleteQuizProps {
    match: any
}

const CompleteQuiz: React.FC<CompleteQuizProps> = ({ match }) => {
    const quizId: number = match.params.id
    console.log(quizId)

    return (
        <div></div>
    );
}

export default CompleteQuiz