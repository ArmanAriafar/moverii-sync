//? Required
import Head from "next/head";
import { useState } from "react";

//? Icons
import {
    LogoutIcon,
    DeleteAccountIcon,
    DeactiveAccountIcon,
    UserCardIcon,
} from "../../components/ui/ProviderProfileIcons";

//? Comps
import AccountPasswords from "../../components/ProfileProvider/AccountSection/AccountPasswords";

//? Layout
import ProfileCard from "../../components/Layout/ProfileCard/ProfileCard";

//? Comp
export default function AccountSection() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Head>
                <title>Account Provider</title>
            </Head>
            <section className="mx-auto mt-10 h-full w-full max-w-md px-4 lg:mt-0 lg:max-w-none lg:px-0">
                <div
                    className="
                    mx-auto mb-6 grid w-full max-w-6xl items-start gap-x-10
                    justify-self-center py-10 lg:mb-0 lg:grid-cols-[300px_1fr]"
                >
                    <ProfileCard isActive={isActive} setIsActive={setIsActive} />
                    <div className="h-full w-full">
                        <div className="flexXBetween w-full">
                            <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                            <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                                <UserCardIcon />
                            </button>
                        </div>
                        <AccountPasswords />
                        <div
                            className="
                            lg:flexXStart mt-14 grid w-full grid-cols-3 items-start justify-items-center 
                            gap-x-14 border-t border-gray-200 pt-10 text-[0.938rem] font-medium lg:grid-cols-none"
                        >
                            <button className="lg:flexXStart flexY hOpacity gap-x-[0.375rem] gap-y-2 leading-4 lg:flex-row">
                                <LogoutIcon />
                                <span>Logout</span>
                            </button>
                            <button className="lg:flexXStart flexY hOpacity gap-x-[0.375rem] gap-y-1 leading-4 lg:flex-row">
                                <DeleteAccountIcon />
                                <span>Delete Account</span>
                            </button>
                            <button className="lg:flexXStart flexY hOpacity gap-x-[0.375rem] gap-y-2 leading-4 lg:flex-row">
                                <DeactiveAccountIcon />
                                <span>Deactive Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
