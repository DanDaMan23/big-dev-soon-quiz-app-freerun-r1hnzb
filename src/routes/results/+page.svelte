<script>
	import { correctAnswers } from '../../store';

	console.log($correctAnswers.percentage);
</script>

<div class="results">
	<div
		class="results-pie-bar progress-bar"
		style={`background: radial-gradient(closest-side, var(--gonmetalGray) 79%, transparent 80% 100%), conic-gradient(var(--black) ${$correctAnswers.percentage}%, var(--ivory) 0)`}
	>
		<p>{$correctAnswers.ratio}</p>
	</div>
	<p>You answered</p>
	<p>{$correctAnswers.ratio} questions</p>
</div>

<style>
	.progress-bar {
		width: 100px;
		height: 100px;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
