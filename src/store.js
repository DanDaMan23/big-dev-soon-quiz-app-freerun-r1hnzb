import { derived, writable } from 'svelte/store';

export const questions = writable([]);

export const answeredQuestions = (() => {
	const { subscribe, update, set } = writable([]);

	return {
		subscribe,
		recordAnswer: (question, correctAnswer, answerPicked) => {
			update((prevState) => [...prevState, { question, correctAnswer, answerPicked }]);
		},
		clear: () => set([])
	};
})();

export const correctAnswers = derived(answeredQuestions, ($answeredQuestions) => {
	const correctAnsweredQuestions = $answeredQuestions.filter(
		({ answerPicked, correctAnswer }) => answerPicked === correctAnswer
	);
	return {
		totalOfCorrects: correctAnsweredQuestions?.length,
		totalOfQuestions: $answeredQuestions?.length,
		percentage: (correctAnsweredQuestions?.length / $answeredQuestions?.length) * 100,
		ratio: `${correctAnsweredQuestions.length} / ${$answeredQuestions.length}`
	};
});

export const currentQuestionIndex = (() => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		nextQuestion: () => update((n) => n + 1),
		reset: () => set(0)
	};
})();

export const answers = derived(
	[questions, currentQuestionIndex],
	([$questions, $currentQuestionIndex]) => {
		if ($questions.length !== 0) {
			const currentQuestion = $questions[$currentQuestionIndex];
			const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
			const shuffle = (array) => array.sort(() => Math.random() - 0.5);

			return shuffle(choices);
		}
		return [];
	}
);
