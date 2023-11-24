import { derived, writable } from 'svelte/store';

export const questions = writable([]);

export const correctAnswers = writable(0);

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
