import { useState } from "react";

import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Summary from "./Summary";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (index: number) => {
    const correct = questions[current].answerIndex === index;
    if (correct) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, index]);
    setCurrent(prev => prev + 1);
  };

  if (current >= questions.length) {
    localStorage.setItem("quizScore", score.toString());
    return <Summary answers={answers} />;
  }

  return (
    <QuestionCard
      question={questions[current]}
      onAnswer={handleAnswer}
      qNumber={current + 1}
      total={questions.length}
    />
  );
};

export default Quiz;
