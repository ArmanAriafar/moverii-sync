import React, { useState } from "react";
import { ResponseArrowIcon } from "../ui/ReviewIcon";

import { Input } from "antd";
const { TextArea } = Input;
function PoviderResponseField() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex items-center gap-2">
        <div>
          <ResponseArrowIcon />
        </div>
        <div>
          <h1 className="text-xl  font-medium text-[#212121] ">
            Provider Response:
          </h1>
        </div>
      </div>
      <div>
        <TextArea
          className="rounded-[1.25rem] border  border-solid hover:border-[#4ca9f5]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write response for this review"
          autoSize={{
            minRows: 4,
            maxRows: 4,
          }}
        />
      </div>
      <div>
        <button
          className="min-h-[2.9rem] min-w-[12.5rem] rounded-[1.25rem] border bg-[#FF9F1C]  text-white hover:opacity-70"
          shape="round"
          size="large"
        >
          Send Response
        </button>
      </div>
    </div>
  );
}

export default PoviderResponseField;
