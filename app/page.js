"use client";

import DetailSummary from "@/components/DetailSummary";
import data from "../public/data.json";
import ResultSummary from "@/components/ResultSummary";

export default function Home() {
  const parsedData = JSON.parse(JSON.stringify(data));

  return (
    <main className="h-[100vh] flex justify-center items-center box-border relative sm:static">
      <div className="flex flex-col bg-white rounded-3xl justify-center items-end w-[736px] h-[512px] sm:relative static">
        <div className="flex flex-col gap-8 absolute right-0 sm:w-1/2 w-full px-10 sm:pt-0 pt-96">
          <h1 className="sm:font-extrabold font-bold sm:text-2xl text-lg text-[#303B59]">
            Summary
          </h1>
          <div className="flex flex-col gap-5">
            {parsedData.map((item) => (
              <DetailSummary key={item.category} data={item} />
            ))}
          </div>
          <button className="bg-[#303B59] rounded-full w-full text-white text-lg py-3 hover:gradiencolor">
            Continue
          </button>
        </div>

        <ResultSummary scores={parsedData.map((item) => item.score)} />
      </div>
    </main>
  );
}
