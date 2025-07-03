
import { questions } from "../data/questions"; 

interface Props {
  answers: number[];
}

const Summary = ({ answers }: Props) => {
  const score = localStorage.getItem("quizScore");

  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>Your score: {score} / {questions.length}</p>

      <h3>Summary</h3>
      <ul>
        {questions.map((q, i) => (
          <li key={q.id}>
            <strong>{q.question}</strong><br />
            Correct Answer: {q.options[q.answerIndex]}<br />
            Explanation: {q.explanation}<br />
            Your Answer: {q.options[answers[i]]}<br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
