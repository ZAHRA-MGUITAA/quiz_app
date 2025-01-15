"use client";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  console.log({ searchParams });
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Congratulations!
        </h1>

        <p className="text-gray-600 mb-6">You finished your quiz</p>

        <div className="bg-green-50 rounded-full py-3 px-6 inline-block">
          <span className="text-lg font-semibold text-green-700">
            Your score is: {searchParams.get("score")}
          </span>
        </div>
      </div>
    </div>
  );
}
