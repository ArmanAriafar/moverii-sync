//? Required
import Select from "antd/lib/select";
import { useState } from "react";

//? Comp
export default function ProfileLanguage() {
    const [selectOptions, setSelectOptions] = useState([{ value: "English" }, { value: "Spain" }]);
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
            <h2 className="self-start text-sm font-bold">Languages spoken:</h2>
            <Select
                mode="tags"
                bordered={false}
                allowClear
                showArrow
                value={selectedValues2}
                placeholder="Select your spoken language"
                onChange={selectHandler}
                className="w-full rounded-[1.25rem] border border-gray-100"
                options={selectOptions}
            />
            <ul className="flexXStart gap-x-2">
                {selectedValues.map((i, index) => {
                    return (
                        <li
                            key={index}
                            className="
                            mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                            font-medium text-gray-900"
                        >
                            {i}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
