//? Required
import { useState } from "react";
import Head from "next/head";

//? Comps
import NotificationCard from "../../components/ProfileProvider/NotifcationSection/NotificationCard";

//? Layout
import ProfileCard from "../../components/Layout/ProfileCard/ProfileCard";

//? Icons
import { UserCardIcon } from "../../components/ui/ProviderProfileIcons";

//? Comp
export default function NotificationSection() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Head>
                <title>Notification Provider</title>
            </Head>
            <section className="mx-auto h-full w-full max-w-md px-4 lg:max-w-none">
                <div
                    className="
                    mx-auto mt-6 mb-6 grid w-full max-w-6xl items-start gap-x-10 justify-self-center
                    py-10 lg:mt-0 lg:mb-0 lg:grid-cols-[300px_1fr]"
                >
                    <ProfileCard isActive={isActive} setIsActive={setIsActive} />
                    <div className="h-full w-full">
                        <div className="flexXBetween w-full">
                            <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                            <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                                <UserCardIcon />
                            </button>
                        </div>
                        <NotificationCard />
                    </div>
                </div>
            </section>
        </>
    );
}
