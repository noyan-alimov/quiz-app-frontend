import { FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import { config } from '../../../config/config';
import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { CreateQuizStore } from '../CreateQuizStore';

interface CreateQuestionFormProps {
    store: CreateQuizStore
}

const CreateQuestionForm: React.FC<CreateQuestionFormProps> = ({ store }) => {
    const { getAccessTokenSilently, user } = useAuth0()
    return (
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
    );
}

export default CreateQuestionForm