import Quiz from "./Content/quiz";

export default async function page({
  params,
}: {
  params: Promise<{ quiz_id: string }>;
}) {
  const param = await params;
  console.log({ param });

  return <Quiz quizId={param.quiz_id} />;
}
