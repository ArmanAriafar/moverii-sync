import React from "react";
import { Rate } from "antd";
import {
  EmmptyStar,
  FullStar,
  HalfStar,
  SmallFullStar,
  SmallEmptyStar,
  SmallHalfStar,
} from "./ReviewIcon";
function AntDesinRate({ value, size }) {
  return (
    <Rate
      className="text-2xl"
      character={(target) => {
        if (value >= target?.index + 1) {
          return size == "large" ? <FullStar /> : <SmallFullStar />;
        } else if (Math.ceil(value) === target?.index + 1) {
          return size == "large" ? <HalfStar /> : <SmallHalfStar />;
        } else return size == "large" ? <EmmptyStar /> : <SmallEmptyStar />;
      }}
      disabled
      allowHalf
      value={value}
    />
  );
}

export default AntDesinRate;
