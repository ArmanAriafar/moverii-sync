import React from "react";
import userImage from "../../public/static/images/offer-picture.png";
import Image from "next/image";
import { SmallFullStar, UpIcon, ArrowHeadDown } from "../ui/ReviewIcon";
import { Col, Row } from "antd";

import ReviewCard from "./ReviewCard";
function Review({ review }) {
  return (
    <div className="my-9">
      <div>
        <div className="flex">
          <Image src={userImage} alt="pic" />
          <div className="ml-4">
            <h1 className="text-xl font-semibold">{review?.offer_title}</h1>
            <div className="flex items-center">
              <SmallFullStar />
              <div className="ml-1 flex items-center">
                <h2 className="text-base font-semibold ">{review?.rate}</h2>
                <p className="text-xs font-normal ">/5</p>
                <p className="ml-2 text-black">
                  Out of {review?.rate_count} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 py-4">
          <h1 className="text-base font-medium">Sort by:</h1>
          <p className=" flex cursor-pointer text-xs font-normal">
            Review Date
            <div className="ml-2">
              <UpIcon />
            </div>
          </p>

          <p className=" flex cursor-pointer text-xs font-normal">
            Star
            <div className="ml-2">
              <UpIcon />
            </div>
          </p>
        </div>
        <div>
          <Row gutter={[16, 16]}>
            {review?.reviews?.length > 0 ? (
              review?.reviews?.map((message) => (
                <Col
                  xxl={{ span: 6 }}
                  lg={{ span: 6 }}
                  md={{ span: 12 }}
                  span={24}
                  key={message?.id}
                >
                  <ReviewCard
                    status={message?.status}
                    first_name={message?.first_name}
                    last_name={message?.last_name}
                    date={message?.date}
                    description={message?.description}
                    rate={message?.rate}
                    id={message?.id}
                    hover={true}
                  />
                </Col>
              ))
            ) : (
              <Col span={24}>
                <div className="flex h-full min-h-[10vh] w-full items-center justify-center  text-black opacity-80">
                  No reviews yet
                </div>
              </Col>
            )}
          </Row>
        </div>
        {review?.reviews?.length > 0 ? (
          <div className="h-full min-h-[10vh] w-full cursor-pointer items-center justify-start">
            <h1 className=" my-2 text-base font-medium text-[#12A3BA]">
              Mehr sehen <ArrowHeadDown />
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Review;
