//? Required
import Input from "antd/lib/input";

//? Icons
import { UserCardIcon } from "../../ui/ProviderProfileIcons";

//? Comp
export default function CompanyDetails({ setIsActive }) {
    return (
        <header className="flexXTopLeft mx-auto w-full lg:max-w-none lg:px-0">
            <div className="flexXBetween w-full">
                <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                    <UserCardIcon />
                </button>
            </div>
            <div className="mt-7 grid grid-cols-1 grid-rows-3 items-center justify-items-center gap-y-8 gap-x-5 lg:grid-cols-2 ">
                <Input placeholder="Company Name" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Company VAT Number" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Street & Number" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Region" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Zip Code" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Country" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
            </div>
        </header>
    );
}
