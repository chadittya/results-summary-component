const calculateMedian = (scores) => {
  const sortedScores = scores.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedScores.length / 2);

  if (sortedScores.length % 2 === 0) {
    return (sortedScores[middleIndex - 1] + sortedScores[middleIndex]) / 2;
  } else {
    return sortedScores[middleIndex];
  }
};

const ResultSummary = ({ scores }) => {
  const medianScore = calculateMedian(scores);

  return (
    <div className="gradiencolor absolute rounded-3xl left-0 sm:w-1/2 w-full flex flex-col items-center px-16 sm:pt-11 py-12 sm:h-full -top-6 sm:top-0  text-center gap-6">
      <h1 className="text-[#CAC9FF] sm:text-2xl text-lg">Your Result</h1>
      <div className="rounded-full flex flex-col gradiencolor-2 sm:w-[200px] w-[140px] sm:h-[200px] h-[140px] justify-center">
        <p className="font-extrabold text-white sm:text-7xl text-[56px]">
          {medianScore}
        </p>
        <span className="font-bold text-[#CAC9FF] sm:text-lg">of 100</span>
      </div>
      <h2 className="text-white font-bold sm:text-[32px] text-2xl">Great</h2>
      <p className="font-medium sm:text-lg text-[#CAC9FF]">
        You scored higher than{" "}
        {Math.round(((100 - medianScore) / 100) * scores.length)}% of the people
        who have taken these tests.
      </p>
    </div>
  );
};

export default ResultSummary;
