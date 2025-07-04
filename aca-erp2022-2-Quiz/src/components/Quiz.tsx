import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import Summary from "./Summary";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import type { Question } from "../type";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);


  useEffect(() => {
    const savedCurrent = sessionStorage.getItem("quizCurrent");
    const savedScore = sessionStorage.getItem("quizScore");
    const savedAnswers = sessionStorage.getItem("quizAnswers");

    if (savedCurrent && savedScore && savedAnswers) {
      setCurrent(Number(savedCurrent));
      setScore(Number(savedScore));
      setAnswers(JSON.parse(savedAnswers));
    }

    const fetchQuestions = async () => {
      const snapshot = await getDocs(collection(db, "questions"));
      const fetched: Question[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: Number(doc.id),
          question: data.question,
          options: data.options,
          answerIndex: data.answerIndex,
          explanation: data.explanation,
        };
      });
      setQuestions(fetched);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (index: number) => {
    const correct = questions[current].answerIndex === index;
    if (correct) setScore(prev => prev + 1);

    const newAnswers = [...answers, index];
    const next = current + 1;

    setAnswers(newAnswers);
    setCurrent(next);

    
    sessionStorage.setItem("quizCurrent", next.toString());
    sessionStorage.setItem("quizScore", (correct ? score + 1 : score).toString());
    sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  if (current >= questions.length) {
    localStorage.setItem("quizScore", score.toString()); 
    sessionStorage.clear(); 
    return <Summary answers={answers} questions={questions} />;
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem" }}>
      <QuestionCard
        question={questions[current]}
        onAnswer={handleAnswer}
        qNumber={current + 1}
        total={questions.length}
      />
    </div>
  );
};

export default Quiz;
