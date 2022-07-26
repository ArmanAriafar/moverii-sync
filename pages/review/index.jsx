import React, { useEffect, useState } from "react";
import Review from "../../components/Review/Review";
import request from "../../services/api/Api";
import AntDesinRate from "../../components/ui/AntDesinRate";
import ProveiderReviewFooter from "../../components/Review/ProveiderReviewFooter";
function index() {
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);
  const [reviewsNumber, setReviewsNumber] = useState(0);
  useEffect(() => {
    request
      .get("/provider/profile/review")
      .then((result) => {
        setReviews(result?.data?.items?.offers),
          setAverage(result?.data?.items?.rate?.avarage);
        setReviewsNumber(result?.data?.items?.rate?.review_count);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="h-full w-full px-24 pt-12  pb-12 md:px-48 ">
      <div>
        <div className="flex w-full items-center justify-between">
          <h1 className="text-4xl font-bold">Review</h1>{" "}
        </div>
        <div className="flex flex-col items-start pt-6">
          <div>
            <h3 className="text-sm font-normal">Your overall rating:</h3>
          </div>

          <div className="flex">
            <AntDesinRate value={average} size="large" />
            <div className="ml-2 flex items-end ">
              <h1 className="text-xl font-bold">{average}</h1>
              <p>/5</p>
            </div>
            <div className="ml-1 flex items-end ">
              <p className="text-black">Out of {reviewsNumber} reviews</p>
            </div>
          </div>
        </div>
        <div>
          {reviews?.map((review, index) => (
            <Review review={review} key={index} />
          ))}
        </div>
      </div>
      <ProveiderReviewFooter />
    </div>
  );
}

export default index;
