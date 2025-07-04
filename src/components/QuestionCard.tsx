import type { Question } from "../type";

interface Props {
  question: Question;
  onAnswer: (index: number) => void;
  qNumber: number;
  total: number;
}

const QuestionCard = ({ question, onAnswer, qNumber, total }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#11254c",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        color: "#fff",
        marginBottom: "2rem",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#ccc" }}>
        Question {qNumber} of {total}
      </h2>
      <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
        {question.question}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gap: "1rem",
        }}
      >
        {question.options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => onAnswer(i)}
              style={{
                backgroundColor: "#1f3b73",
                border: "none",
                padding: "1rem 1.5rem",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#fff",
                cursor: "pointer",
                transition: "background 0.3s ease",
                width: "100%",
                textAlign: "left",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#2d4e99")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#1f3b73")
              }
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
