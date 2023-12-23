import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function FeedbackItem({ item }) {
  const [isActive, setIsActive] = useState(false);
  const [upVote, setUpVote] = useState(item.upvoteCount);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleClick = (e) => {
    setUpVote((prev) => prev + 1);
    setIsBtnDisabled(true);
    e.stopPropagation();
  };
  return (
    <li
      className={`flex items-center justify-between select-none border-gray-500 border-b w-full px-8 py-4 hover:cursor-pointer transition-all hover:opacity-90 hover:text-gray-400  ${
        isActive ? "md:h-36 text-pink-300 hover:text-pink-300" : ""
      }`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <button
        onClick={handleClick}
        disabled={isBtnDisabled}
        className="flex flex-col items-center hover:text-pink-300"
      >
        {!isBtnDisabled && <ChevronUpIcon />}
        {upVote}
      </button>
      <div className="p-1 max-w-10 text-center w-full bg-gray-500 uppercase text-3xl font-bold rounded-md m-4">
        {item.badgeLetter}
      </div>
      <div className=" flex-1">
        <p className="uppercase text-gray-300">{item.company}</p>
        <p>{item.text}</p>
      </div>
      <span> {item.daysAgo === 0 ? "NEW" : `${item.daysAgo}d`}</span>
    </li>
  );
}

export default FeedbackItem;
