//? Required
import { useState } from "react";
import Select from "antd/lib/select";
import Button from "antd/lib/button";

//? Icons
import { BtnHashtags } from "../../ui/ProviderProfileIcons";

//? Comp
export default function ProfileHashtags() {
    const [selectOptions, setSelectOptions] = useState([{ value: "Home" }, { value: "House" }]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValues2, setSelectedValues2] = useState([]);
    function selectHandler(values) {
        if (!selectedValues.find((val) => val === values[0])) {
            selectedValues.push(...values);
            setSelectedValues([...selectedValues]);
        }
    }
    return (
        <section className="flexYTopLeft w-full items-center gap-y-4 border-b border-gray-200 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">
                Hashtags <span className="font-medium text-gray-300">The explanatory sentence is here.</span>
            </h2>
            <div className="flexXStart w-full rounded-[1.25rem] border border-gray-100 px-2 py-1">
                <p className="px-1 text-sm font-normal">#</p>
                <Select
                    mode="tags"
                    bordered={false}
                    allowClear
                    value={selectedValues2}
                    placeholder="Select your spoken language"
                    onChange={selectHandler}
                    className="w-full rounded-[1.25rem]"
                    options={selectOptions}
                />
                <button>
                    <BtnHashtags />
                </button>
            </div>
            <ul className="flexXStart gap-x-2">
                {selectedValues.map((i, index) => {
                    return (
                        <li
                            key={index}
                            className="
                            mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                            font-normal text-gray-900"
                        >
                            {i}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
