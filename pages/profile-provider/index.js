//? Required
import Button from "antd/lib/button";
import { useState } from "react";
import Head from "next/head";

//? Layout
import ProfileCard from "../../components/Layout/ProfileCard/ProfileCard";

//? Components
import ProfileHashtags from "../../components/ProfileProvider/ProfileSection/ProfileHashtags";
import ProfileImage from "../../components/ProfileProvider/ProfileSection/ProfileImage";
import ProfileLanguage from "../../components/ProfileProvider/ProfileSection/ProfileLanguageSpoken";
import ProfileProviderQuote from "../../components/ProfileProvider/ProfileSection/ProfileProviderQuote";
import ProfileProviderTeaser from "../../components/ProfileProvider/ProfileSection/ProfileProviderTeaser";
import ProfileHeader from "../../components/ProfileProvider/ProfileSection/ProfileSectionHeader";

//? Harsh using UserData
const user = {
    name: "Fatemeh",
    image: "/static/images/Sample-UserImage.jpg",
    location: "Rotterdom, Netherlands",
    countryIcon: "",
    tags: ["#Travel", "#Journey", "#Nature"],
};

//? Comp
export default function ProfileSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({});
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Head>
                <title>Profile Provider</title>
            </Head>
            <section className="mx-auto h-full w-full max-w-md px-4 lg:max-w-none">
                <div
                    className="
                    mx-auto mb-6 grid w-full max-w-6xl items-start gap-x-10
                    justify-self-center py-10 lg:mb-0 lg:grid-cols-[300px_1fr]"
                >
                    <ProfileCard setIsActive={setIsActive} isActive={isActive} />
                    <div className="h-full w-full">
                        <ProfileHeader user={user} setIsActive={setIsActive} />
                        <ProfileLanguage />
                        <ProfileHashtags />
                        <ProfileProviderQuote />
                        <ProfileProviderTeaser />
                        <ProfileImage />
                        <Button
                            type="primary"
                            loading={isLoading}
                            shape="round"
                            onClick={() => setIsLoading(true)}
                            className="btn-primary mt-10 w-full lg:mb-0 lg:w-fit"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
