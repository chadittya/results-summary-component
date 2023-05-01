import Image from "next/image";
import iconMemory from "../public/icon-memory.svg";
import iconReaction from "../public/icon-reaction.svg";
import iconVerbal from "../public/icon-verbal.svg";
import iconVisual from "../public/icon-visual.svg";

const DetailSummary = ({ data }) => {
  let categoryClasses;
  let icon;
  let textColor;

  switch (data.category) {
    case "Reaction":
      categoryClasses =
        "bg-[#FF5555] bg-opacity-5 rounded-md w-full px-4 py-3 sm:text-lg flex flex-row justify-between";
      icon = iconReaction;
      textColor = "text-[#FF5555]";
      break;
    case "Memory":
      categoryClasses =
        "bg-[#00BB8F] bg-opacity-5 rounded-md w-full px-4 py-3 sm:text-lg flex flex-row justify-between";
      icon = iconMemory;
      textColor = "text-[#FFB21E]";
      break;
    case "Verbal":
      categoryClasses =
        "bg-[#00BB8F] bg-opacity-5 rounded-md w-full px-4 py-3 sm:text-lg flex flex-row justify-between";
      icon = iconVerbal;
      textColor = "text-[#00BB8F]";
      break;
    case "Visual":
      categoryClasses =
        "bg-[#1125D6] bg-opacity-5 rounded-md w-full px-4 py-3 sm:text-lg flex flex-row justify-between";
      icon = iconVisual;
      textColor = "text-[#1125D6]";
      break;
    default:
      categoryClasses =
        "bg-[#FF5555] bg-opacity-5 rounded-md w-full px-4 py-3 sm:text-lg flex flex-row justify-between";
      icon = iconReaction;
      textColor = "text-[#FF5555]";
      break;
  }

  return (
    <div>
      <div className={categoryClasses}>
        <div className="flex flex-row gap-2">
          <Image src={icon} alt={data.category} />
          <span className={textColor}>{data.category}</span>
        </div>
        <div>
          <span>{data.score}</span>
          <span className="text-slate-400">/100</span>
        </div>
      </div>
    </div>
  );
};

export default DetailSummary;
