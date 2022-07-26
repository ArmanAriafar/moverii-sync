import React, { useState, useEffect } from "react";
import userImage from "../../public/static/images/offer-picture.png";
import Image from "next/image";
import { Col, Row } from "antd";
import { SmallFullStar, QuoteIcon } from "../../components/ui/ReviewIcon";
import AntDesinRate from "../../components/ui/AntDesinRate";
import PoviderResponseField from "../../components/Review/PoviderResponseField";
import CarouselSwiper from "../../components/craouselSwiper/CarouselSwiper";
import ProveiderReviewFooter from "../../components/Review/ProveiderReviewFooter";
import request from "../../services/api/Api";
export default function ReviewDetail({ reviewId }) {
  const [revDetail, setRevDetail] = useState({});
  const [others, setOthers] = useState([]);
  useEffect(() => {
    request
      .get(`/provider/profile/review/show/${reviewId}`)
      .then((result) => {
        console.log(result, "result");
        setRevDetail(result?.data?.items?.review);
        setOthers(result?.data?.items?.other);
      })
      .catch((error) => console.log(error.response));
  }, []);
  console.log(others, "others");
  const mockData = {
    pic: userImage,
    title: "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel",
    sumRate: 4.2,
    numberOfReviews: 143,
    name: "Steve Jobs",
    revDate: "27.04.2022",
    duration: "25.05.2022 - 13.06.2022",
    accommodation: [
      "Schlafsaal für Frauen",
      "Schlafsaal für Frauen2",
      "Schlafsaal für Frauen3",
    ],
    rate: 3,
    numberOfGuest: 6,
    totalPrice: "2.338.000€",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverraLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...",
  };

  return (
    <div className="h-full w-full px-28 pt-12  pb-12 md:px-28 ">
      <div>
        <h1 className="text-4xl font-bold">Review</h1>
      </div>
      <div className="mt-8 h-full w-full">
        <div className="flex h-full w-full gap-4  pb-8">
          <div className="aspect-square w-14">
            <Image
              src={mockData.pic}
              alt="user"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">{revDetail?.offer_title}</h1>
            <div className="flex items-center">
              <div>
                <SmallFullStar />
              </div>
              <div className="ml-2 flex items-end ">
                <h1 className="text-xl font-bold">{revDetail?.offer_rate}</h1>
                <p>/5</p>
              </div>
              <div className="ml-1 mt-1 flex items-end">
                <p className="text-black">
                  Out of {revDetail?.offer_rate_count} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <Row className="h-full w-full rounded-[1.25rem] border border-solid border-[#E5E7EB]  px-4 py-12">
          <Col xxl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 24 }} span={24}>
            <h1 className="text-lg font-semibold text-[#212121]">
              {revDetail?.user}
            </h1>
            <div className="flex gap-2">
              <p className=" text-xs font-normal text-[#959499]">
                Date of review:
              </p>
              <p className=" text-xs font-normal text-[#212121]">
                {revDetail?.review_date}
              </p>
            </div>
            <div className=" pt-4">
              <Row className="flex " gutter={[16, 16]}>
                <Col sm={{ span: 12 }} span={24}>
                  <p className=" text-xs font-normal text-[#959499]">
                    Journey Date
                  </p>

                  <p className=" text-sm font-medium   text-[#212121]">
                    {revDetail?.journey_start} - {revDetail?.journey_end}
                  </p>
                </Col>
                <Col sm={{ span: 12 }} span={24}>
                  <p className=" text-xs font-normal text-[#959499]">
                    Number of Guest
                  </p>

                  <p className=" text-sm font-medium   text-[#212121]">
                    {revDetail.number_of_guest} person
                  </p>
                </Col>

                <Col sm={{ span: 12 }} span={24}>
                  <p className=" text-xs font-normal text-[#959499]">
                    Accommodation
                  </p>
                  <p className=" text-sm font-medium   text-[#212121]">
                    {mockData.accommodation.map(
                      (accommodation) => `${accommodation} ,`
                    )}
                  </p>
                </Col>
                <Col sm={{ span: 12 }} span={24}>
                  <p className=" text-xs font-normal text-[#959499]">
                    Total Price
                  </p>
                  <p className=" text-sm font-medium   text-[#212121]">
                    {revDetail.total_price}.000€
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xxl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 24 }}
            span={24}
            className="border-l border-solid border-[#E5E7EB] "
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="pb-4">
                <QuoteIcon />
              </div>
              <div className="text-center">{revDetail?.content}</div>
              <div className="flex  items-center gap-4">
                <div>
                  <AntDesinRate value={revDetail?.user_review_rate} />
                </div>
                <div className="flex items-end ">
                  <p className=" text-sm font-semibold   text-[#212121]">
                    {revDetail?.user_review_rate}
                  </p>
                  <p className=" text-xs font-normal   text-[#959499]">/5</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="h-full w-full px-4 py-12">
        <PoviderResponseField />
      </div>
      <div className="h-full w-full px-4 py-10">
        <h1 className="pb-12 text-2xl font-semibold text-[#212121]">
          Another Review
        </h1>
        <CarouselSwiper swiperData={others} type={"reviewCard"} />
      </div>
      <div className="h-full w-full px-4 pt-[5.5rem]">
        <ProveiderReviewFooter />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const resultId = params?.id;

  return {
    props: {
      reviewId: resultId,
    },
  };
}
