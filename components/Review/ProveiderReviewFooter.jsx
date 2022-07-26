import React from "react";
import {
  HikingPic,
  ArrowHeadRight,
  SurfurIcon,
  RiderIcon,
  YogaerIcon,
} from "../ui/FooterReviewIcons";
import { Col, Row } from "antd";
function ProveiderReviewFooter() {
  const footerData = [
    {
      title: "Booking Dashboard",
      pic: HikingPic,
      id: 1,
    },
    {
      title: "Offer Managment",
      pic: SurfurIcon,
      id: 2,
    },
    {
      title: "Provider Discount",
      pic: RiderIcon,
      id: 3,
    },
    {
      title: "Contact & Support",
      pic: YogaerIcon,
      id: 4,
    },
  ];
  return (
    <div>
      <Row gutter={[16, 16]}>
        {footerData.map((data) => (
          <Col
            xxl={{ span: 6 }}
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            span={24}
            key={data?.id}
          >
            <div className="relative flex h-full min-h-[14.5vh] w-full cursor-pointer rounded-[1.25rem] border hover:border-[#4E81DC] md:max-w-[20rem]">
              <div className="mt-[3vh] ml-4 h-full w-full">
                <h1 className="text-base font-bold text-[#212121]">
                  {data?.title}
                </h1>
                <p className="text-sm font-semibold text-[#4E81DC]">
                  View <ArrowHeadRight />
                </p>
              </div>
              <div className="absolute right-0  z-[-1]">
                <data.pic />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProveiderReviewFooter;
