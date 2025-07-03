import type { Question } from "../type";


interface Props {
  question: Question;
  onAnswer: (index: number) => void;
  qNumber: number;
  total: number;
}

const QuestionCard = ({ question, onAnswer, qNumber, total }: Props) => {
  return (
    <div>
      <h2>
        Question {qNumber} of {total}
      </h2>
      <p>{question.question}</p>
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>
            <button onClick={() => onAnswer(i)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
