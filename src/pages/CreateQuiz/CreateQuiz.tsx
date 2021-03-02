import React from 'react'
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import { config } from '../../config/config';
import { useAuth0 } from "@auth0/auth0-react";
import { observer } from 'mobx-react';
import { CreateQuizStore } from './CreateQuizStore';

interface CreateQuizProps {
    store: CreateQuizStore
}

const CreateQuiz: React.FC<CreateQuizProps> = observer(({ store }) => {
    const { getAccessTokenSilently, user } = useAuth0()

    return (
        <Box p='10'>
            <Formik
                initialValues={{ question: '' }}
                validate={values => {
                    const errors: { question?: string } = {};
                    if (!values.question) {
                        errors.question = 'Required';
                    }

                    return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const token = await getAccessTokenSilently({
                        audience: config.AUTH0_AUDIENCE,
                        scope: ''
                    });
                    await store.createQuizRequest({ token, userId: user.sub, question: values.question })
                    setSubmitting(false)
                    resetForm({ values: { question: '' } })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Question</FormLabel>
                            <Input
                                type='text'
                                name='question'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.question}
                            />
                            {errors.question && touched.question && (
                                <Text color='red.500'>{errors.question}</Text>
                            )}
                        </FormControl>
                        <Button type="submit" disabled={isSubmitting} mt='2'>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
            {store.createQuizFailure && (
                <Alert mt='2' status="error">
                    <AlertIcon />
                    Error Creating a Quiz
                </Alert>
            )}
            {store.createQuizSuccess && (
                <Alert mt='2' status="success">
                    <AlertIcon />
                    Created Quiz Successfully!
                </Alert>
            )}
        </Box>
    );
})

export default CreateQuiz