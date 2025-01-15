"use client";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { collection, getDocs } from "@firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import db from "src/utils/firestore";
import { Quiz } from "@/app/quizzes/types";

export default function page() {
  const [quizzes, setQuizzes] = useState<Quiz[]>();
  const router = useRouter();

  console.log({ quizzes });

  useEffect(() => {
    const fetchQuestions = async () => {
      const quizzes = await getDocs(collection(db, `quizzes`));
      setQuizzes(
        quizzes.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Quiz[]
      );
    };

    fetchQuestions();
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-2 items-center gap-4 translate-y-1/2">
      {quizzes?.map((quiz) => (
        <div
          className="w-full h-40 border border-[#2A2A49] px-6 py-3 flex flex-col gap-2 rounded-lg justify-between"
          key={quiz.id}
        >
          <div className="flex flex-col gap-2">
            <Text text={quiz.title} bold />
            <Text text={quiz.description} />
          </div>

          <Button
            label="Take the quiz"
            onClick={() => {
              router.push(`/quizzes/${quiz.id}`);
            }}
          />
        </div>
      ))}
    </div>
  );
}
