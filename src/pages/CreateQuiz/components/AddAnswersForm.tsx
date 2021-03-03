import { FormControl, FormLabel, Input, Button, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { config } from '../../../config/config';
import React from 'react'
import { CreateQuizStore } from '../CreateQuizStore';
import { useAuth0 } from "@auth0/auth0-react";
import { returnErrorsObjToValidate } from '../helpers';

interface AddAnswersFormProps {
    store: CreateQuizStore
}

const AddAnswersForm: React.FC<AddAnswersFormProps> = ({ store }) => {
    const { getAccessTokenSilently } = useAuth0()

    return (
        <Formik
            initialValues={{
                answer1: '',
                correct1: '',
                answer2: '',
                correct2: '',
                answer3: '',
                correct3: '',
                answer4: '',
                correct4: ''
            }}
            validate={values => {
                return returnErrorsObjToValidate(values)
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                const token = await getAccessTokenSilently({
                    audience: config.AUTH0_AUDIENCE,
                    scope: ''
                });
                store.processAnswersInput(token, 1, values)
                setSubmitting(false)
                resetForm({
                    values: {
                        answer1: '',
                        correct1: '',
                        answer2: '',
                        correct2: '',
                        answer3: '',
                        correct3: '',
                        answer4: '',
                        correct4: ''
                    }
                })
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
                <Form onSubmit={handleSubmit}>
                    <FormControl my='5'>
                        <FormLabel>Answer 1</FormLabel>
                        <Input
                            type='text'
                            name='answer1'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.answer1}
                        />
                        {errors.answer1 && touched.answer1 && (
                            <Text color='red.500'>{errors.answer1}</Text>
                        )}
                        <RadioGroup>
                            <Stack direction="row" spacing={5}>
                                <label>
                                    <Field type="radio" name="correct1" value="TRUE" style={{ marginRight: '10px' }} />
                                    CORRECT
                                </label>
                                <label>
                                    <Field type="radio" name="correct1" value="FALSE" style={{ marginRight: '10px' }} />
                                    INCORRECT
                                </label>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl my='5'>
                        <FormLabel>Answer 2</FormLabel>
                        <Input
                            type='text'
                            name='answer2'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.answer2}
                        />
                        {errors.answer2 && touched.answer2 && (
                            <Text color='red.500'>{errors.answer2}</Text>
                        )}
                        <RadioGroup>
                            <Stack direction="row" spacing={5}>
                                <label>
                                    <Field type="radio" name="correct2" value="TRUE" style={{ marginRight: '10px' }} />
                                    CORRECT
                                </label>
                                <label>
                                    <Field type="radio" name="correct2" value="FALSE" style={{ marginRight: '10px' }} />
                                    INCORRECT
                                </label>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl my='5'>
                        <FormLabel>Answer 3</FormLabel>
                        <Input
                            type='text'
                            name='answer3'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.answer3}
                        />
                        {errors.answer3 && touched.answer3 && (
                            <Text color='red.500'>{errors.answer3}</Text>
                        )}
                        <RadioGroup>
                            <Stack direction="row" spacing={5}>
                                <label>
                                    <Field type="radio" name="correct3" value="TRUE" style={{ marginRight: '10px' }} />
                                    CORRECT
                                </label>
                                <label>
                                    <Field type="radio" name="correct3" value="FALSE" style={{ marginRight: '10px' }} />
                                    INCORRECT
                                </label>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl my='5'>
                        <FormLabel>Answer 4</FormLabel>
                        <Input
                            type='text'
                            name='answer4'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.answer4}
                        />
                        {errors.answer4 && touched.answer4 && (
                            <Text color='red.500'>{errors.answer4}</Text>
                        )}
                        <RadioGroup>
                            <Stack direction="row" spacing={5}>
                                <label>
                                    <Field type="radio" name="correct4" value="TRUE" style={{ marginRight: '10px' }} />
                                    CORRECT
                                </label>
                                <label>
                                    <Field type="radio" name="correct4" value="FALSE" style={{ marginRight: '10px' }} />
                                    INCORRECT
                                </label>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    {errors.correct4 && touched.correct4 && (
                        <Text color='red.500'>{errors.correct4}</Text>
                    )}
                    <Button type="submit" disabled={isSubmitting} mt='2'>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default AddAnswersForm