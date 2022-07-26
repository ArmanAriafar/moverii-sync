//? Required
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Rate from "antd/lib/rate";
import { motion } from "framer-motion";
import { observe } from "mobx";
import FrontPageController from "../../../mobx/controller/ProfileCard/FrontPageController";

//? Icons
import {
    LocationIcon,
    AccountIcon,
    NotificationsIcon,
    CompanyIcon,
    ProfileIcon,
    CloseCircle,
} from "../../ui/ProviderProfileIcons";

//? AntD Rate
const desc = ["1/5", "2/5", "3/5", "4/5", "5/5"];

//?  Navigation
const items = [
    { label: "Profile", key: "profile", icon: <ProfileIcon />, link: "/profile-provider" },
    { label: "Company", key: "company", icon: <CompanyIcon />, link: "/company-provider" },
    { label: "Notifications", key: "notifications", icon: <NotificationsIcon />, link: "/notification-provider" },
    { label: "Account", key: "account", icon: <AccountIcon />, link: "/account-provider" },
];

//? Harsh using UserData
const user = {
    name: "Fatemeh",
    image: "/static/images/Sample-UserImage.jpg",
    location: "Rotterdom, Netherlands",
    countryIcon: "",
    tags: ["#Travel", "#Journey", "#Nature"],
};

//? Comp
const ProfileCard = observe(({ isActive, setIsActive }) => {
    const store = FrontPageController();
    const [screenWidth, setScreenWidth] = useState(0);
    const getData = () => {
        store.getData();
    };
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    const route = useRouter();
    const [rate, setRate] = useState(3);
    if (screenWidth >= 1024) {
        return (
            <>
                <div
                    className="
                    lg:flexY mx-auto hidden min-h-[31.25rem] w-full max-w-[18.75rem]
                    rounded-[1.25rem] border border-gray-200 bg-white p-6"
                >
                    <div className="flexY w-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={user.image} alt={user.name} className="aspect-square w-24 rounded-full" />
                        <p className="text-base font-semibold text-gray-900">{user.name}</p>
                        <span>
                            <Rate tooltips={desc} onChange={setRate} value={rate} disabled />
                            {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
                        </span>
                    </div>
                    <div className="flexY w-full">
                        <p className="flexX mt-1 gap-x-1 font-sans text-sm font-normal text-gray-300">
                            <LocationIcon />
                            {user.location}
                        </p>
                        <ul className="flexX gap-x-2">
                            {user.tags.map((i, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="
                                        mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                                        font-normal text-gray-900 "
                                    >
                                        {i}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <ul className="flexYStart mt-5 w-full gap-y-4 border-t pt-5">
                        {items.map((a, index) => {
                            return (
                                <li key={index}>
                                    <Link href={a.link}>
                                        <a
                                            className={`${route.pathname === a.link ? "activeLink" : ""}
                                            flexXStart gap-x-3 text-sm font-medium text-gray-900`}
                                        >
                                            <span>{a.icon}</span>
                                            <span>{a.label}</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    }
    //? Framer
    const NavVars = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: isActive ? "0" : "-100vw",
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
    };
    return (
        <>
            <motion.div
                variants={NavVars}
                initial="hidden"
                animate="visible"
                className="
                flexY fixed top-0 left-0 z-[201] mx-auto h-full w-full max-w-md
                border border-gray-200 bg-white p-6 lg:hidden"
            >
                <div className="flexY relative w-full gap-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={user.image} alt={user.name} className="aspect-square w-40 rounded-full" />
                    <p className="text-base font-semibold text-gray-900">{user.name}</p>
                    <span>
                        <Rate tooltips={desc} onChange={setRate} value={rate} disabled />
                        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
                    </span>
                </div>
                <div className="flexY mt-2 w-full">
                    <p className="flexX mt-1 gap-x-1 font-sans text-sm font-normal text-gray-300">
                        <LocationIcon />
                        {user.location}
                    </p>
                    <ul className="flexX gap-x-2">
                        {user.tags.map((i, index) => {
                            return (
                                <li
                                    key={index}
                                    className="
                                        mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                                        font-normal text-gray-900 "
                                >
                                    {i}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="flexYStart mt-5 w-full gap-y-4 border-t pt-5">
                    {items.map((a, index) => {
                        return (
                            <li key={index}>
                                <Link href={a.link}>
                                    <a
                                        className={`${route.pathname === a.link ? "activeLink" : ""}
                                            styleChild hOpacity flexXStart gap-x-3 text-sm font-medium text-gray-900`}
                                    >
                                        <span>{a.icon}</span>
                                        <span>{a.label}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    onClick={() => setIsActive(false)}
                    className="absolute top-5 right-5 text-xl font-extrabold text-primary-500"
                >
                    <CloseCircle />
                </button>
            </motion.div>
        </>
    );
});

export default ProfileCard;
