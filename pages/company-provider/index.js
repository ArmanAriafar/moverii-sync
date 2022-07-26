//? Required
import Head from "next/head";
import { useState } from "react";
import Button from "antd/lib/button";

//? Comps
import CompanyDetails from "../../components/ProfileProvider/CompanySection/CompanyDetails";
import BankDetails from "../../components/ProfileProvider/CompanySection/CompanyBankDetails";

//? Layout
import ProfileCard from "../../components/Layout/ProfileCard/ProfileCard";

//? Comp
export default function CompanySection() {
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Head>
                <title>Company Provider</title>
            </Head>
            <section className="mx-auto h-full w-full max-w-md px-4 lg:max-w-none">
                <div
                    className="
                    mx-auto mt-6 mb-6 grid w-full max-w-6xl items-start gap-x-10 justify-self-center
                    py-10 lg:mt-0 lg:mb-0 lg:grid-cols-[300px_1fr]"
                >
                    <ProfileCard isActive={isActive} setIsActive={setIsActive} />
                    <div className="h-full w-full">
                        <CompanyDetails setIsActive={setIsActive} />
                        <BankDetails />
                        <Button
                            type="primary"
                            loading={isLoading}
                            shape="round"
                            onClick={() => setIsLoading(true)}
                            className="btn-primary mt-6 w-full max-w-md lg:mb-0 lg:w-fit"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
