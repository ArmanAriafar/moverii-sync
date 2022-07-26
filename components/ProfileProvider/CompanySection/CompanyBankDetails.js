//? Required
import Input from "antd/lib/input";

//? Comp
export default function BankDetails() {
    return (
        <header className="flexXTopLeft mx-auto mt-11 w-full lg:max-w-none lg:px-0">
            <h1 className="font-sans text-xl font-bold text-gray-900">Bank Details</h1>
            <div className="mt-7 grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-y-8 gap-x-5 lg:grid-cols-2 ">
                <Input placeholder="Account Holder" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="IBAN" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="Bank Name" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
                <Input placeholder="BIC" className="rounded-[1.25rem] py-3 px-6 text-sm font-medium" />
            </div>
        </header>
    );
}
