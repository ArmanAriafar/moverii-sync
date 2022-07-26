import React from "react";
import ReviewCard from "../Review/ReviewCard";
import userImage from "../../public/static/images/offer-picture.png";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/scrollbar";
function CarouselSwiper({ swiperData, type }) {
  console.log(swiperData, "swiperData");
  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          853: {
            slidesPerView: 3,
          },
          1145: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
        style={{ maxHeight: 600 }}
        spaceBetween={10}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
      >
        {/* <div className=" fade absolute"></div> */}
        {type === "reviewCard" ? (
          swiperData?.map((data) => (
            <SwiperSlide className="rounded-[1.25rem] border hover:border-purple-600">
              <div className="flex items-center justify-center gap-4 p-4">
                <Image src={data?.offer_image || userImage} alt="user" />
                <p className="   text-xs font-normal  text-[#212121]">
                  {data?.offer_title}
                </p>
              </div>

              <ReviewCard
                status={data?.status || "new"}
                name={data?.user}
                date={data?.review_date}
                description={data?.review}
                rate={data?.user_review_rate}
                id={data?.id}
                hover={false}
              />
            </SwiperSlide>
          ))
        ) : (
          <div></div>
        )}
      </Swiper>
    </div>
  );
}

export default CarouselSwiper;
