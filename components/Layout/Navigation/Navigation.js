//? Required
import { useState, useEffect } from "react";

//? Components
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";
import MobileNavMenu from "./MobileNavMenu";
import MobileNavUser from "./MobileNavUser";

//? ui
import Logo from "../../ui/Logo";

//? Harsh User Data
const user = {
    name: "Fatameh",
    image: "/static/images/Sample-UserImage.jpg",
};

//? Comp
export default function Navigation() {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    if (screenWidth >= 1024) {
        return (
            <nav className="hidden w-full px-4 lg:inline">
                <div
                    className="
                    mx-auto grid w-full max-w-6xl grid-cols-[1fr_2fr_1.5fr] items-center 
                    justify-items-center !px-4"
                >
                    <Logo className="justify-self-start" />
                    <NavMenu />
                    <NavUser className="justify-self-end" user={user} />
                </div>
            </nav>
        );
    }
    return (
        <nav className="fixed top-0 left-0 z-[201] w-full bg-white py-2 px-4 shadow-lg">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr] items-center justify-items-start">
                <Logo />
                <MobileNavUser user={user} />
            </div>
            <MobileNavMenu />
        </nav>
    );
}
