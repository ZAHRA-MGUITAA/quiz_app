"use client";
import { useEffect, useState } from "react";
import Button from "@/ui/Button";
import Card from "@/ui/Card";
import Option from "@/ui/Option";
import Text from "@/ui/Text";
import { useRouter } from "next/navigation";
import { collection, getDoc, getDocs } from "@firebase/firestore";
import db from "@/lib/firestore";
import { QuestionProp } from "@/quizzes/types";

export default function Quiz(props: { quizId: string }) {
  const [questions, setQuestion] = useState<QuestionProp[]>([]);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [answersMap, setAnswersMap] = useState(new Map<string, string>());
  const router = useRouter();

  console.log({ quizId: props.quizId });
  console.log({ score });
  console.log({ answersMap });
  console.log({ questions: questions });

  const handleSelectOption = (option: string) => {
    setAnswersMap(answersMap.set(questions[questionIndex].id, option));
    setSelectedOption(Array.from(answersMap.values()));
    // if the current index === quiz array length - 1 ==> calculate the score of the user and redirect him to the score page
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getDocs(
        collection(db, `quizzes/${props.quizId}/questions`)
      );
      console.log({ questions });
      setQuestion(
        questions.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as QuestionProp[]
      );
    };

    fetchQuestions();
  }, [props.quizId]);

  const handleNextClick = () => {
    if (
      answersMap.get(questions[questionIndex].id) ===
      questions[questionIndex].correctAnswer
    ) {
      const newScore = score + 1;
      setScore(newScore);
      if (questionIndex === questions.length - 1) {
        router.push(`${props.quizId}/score?score=${newScore}`);
      }
    } else {
      if (questionIndex === questions.length - 1) {
        router.push(`${props.quizId}/score?score=${score}`);
      }
    }
    if (questionIndex !== questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto w-1/2 translate-y-1/2">
      <Card>
        <div className="flex flex-col gap-4">
          <Text text={questions[questionIndex]?.question} />
          <div className="grid grid-cols-1 gap-3">
            {questions[questionIndex]?.options.map((option, index) => (
              <Option
                text={option}
                key={index}
                onClick={handleSelectOption}
                isSelected={selectedOption.includes(option)}
              />
            ))}
          </div>
          <Button label="Next Question" onClick={handleNextClick} />
        </div>
      </Card>
    </div>
  );
}
