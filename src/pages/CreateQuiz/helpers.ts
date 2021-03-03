import { AnswersInputModel } from './CreateQuizStore';

export const returnErrorsObjToValidate = (values: AnswersInputModel) => {
	const errors: any = {};
	if (!values.answer1) {
		errors.answer1 = 'Required';
	}

	if (!values.correct1) {
		errors.correct1 = 'Required';
	}

	if (!values.answer2) {
		errors.answer2 = 'Required';
	}

	if (!values.correct2) {
		errors.correct2 = 'Required';
	}

	if (!values.answer3) {
		errors.answer3 = 'Required';
	}

	if (!values.correct3) {
		errors.correct3 = 'Required';
	}

	if (!values.answer4) {
		errors.answer4 = 'Required';
	}

	if (!values.correct4) {
		errors.correct4 = 'Required';
	}

	if (
		values.correct1 === 'FALSE' &&
		values.correct2 === 'FALSE' &&
		values.correct3 === 'FALSE' &&
		values.correct4 === 'FALSE'
	) {
		errors.correct4 = 'At least one answer should be correct';
	}

	return errors;
};
