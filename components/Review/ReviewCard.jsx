import React from "react";
import capitalizeFirst from "../ui/CapitalizerFirst";
import AntDesinRate from "../ui/AntDesinRate";
import Link from "next/link";
import { QuoteIcon, ToReviewIcon } from "../ui/ReviewIcon";
function ReviewCard({
  status,
  first_name,
  last_name,
  date,
  description,
  rate,
  id,
  hover,
  name,
}) {
  return (
    <div
      className={`flex h-full w-full min-w-[10rem] flex-col items-center justify-center rounded-[1.25rem] border border-solid border-[#E5E7EB] bg-white  ${
        hover ? "hover:border-red-700" : ""
      }  md:max-w-[17rem]`}
    >
      <div
        className={`text-sm font-medium  ${
          status === "new"
            ? "text-[#1ABC9C]"
            : status === "removed"
            ? "text-[#F1416B]"
            : "text-[#FF9F1C]"
        }`}
      >
        {capitalizeFirst(status)}
      </div>
      <h1 className="mt-4 text-sm font-semibold">
        {name.length > 1 ? (
          capitalizeFirst(name)
        ) : (
          <>
            {capitalizeFirst(first_name)}
            {capitalizeFirst(last_name)}
          </>
        )}
      </h1>
      <p>{date}</p>

      <h1 className=" text-4xl font-extrabold text-[#12A3BA]">
        <QuoteIcon />
      </h1>
      <p className="text-[#212121]">{description}</p>
      <div className="flex items-center">
        <AntDesinRate value={rate || 0} />
        <div className="mt-2 ml-1 flex items-center">
          <h1 className=" text-sm font-semibold">{rate || "NA"}</h1>
          <p className=" text-xs font-normal">/5</p>
        </div>
      </div>
      <Link href={`/review/${id}`}>
        <a className="flex w-full cursor-pointer justify-end">
          <ToReviewIcon />
        </a>
      </Link>
    </div>
  );
}

export default ReviewCard;
