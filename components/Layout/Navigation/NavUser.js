//? Required
import { useState } from "react";
import { Menu } from "antd";

//? Icons
import { LogOutIcon, NotificationIcon, MailIcon } from "../../ui/NavIcons";

//? AntMenu
const items = [
    { icon: <LogOutIcon />, key: "logout" },
    { icon: <NotificationIcon />, key: "notification" },
    { icon: <MailIcon />, key: "mail" },
];

//? Comp
export default function NavUser() {
    const [user, setUser] = useState({ name: "Fatemeh", image: "/static/images/Sample-UserImage.jpg" });
    const [current, setCurrent] = useState("home");

    const onClick = (e) => {
        console.log("click", e);
        setCurrent(e.key);
    };
    return (
        <div className="flex w-full items-center justify-end gap-x-10">
            <Menu className="font-normal" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div className="flex items-center justify-center gap-x-2">
                <p className="m-0 font-medium">{user.name}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={user.image}
                    alt={user.name}
                    className="aspect-square w-9 rounded-full border-2 border-white"
                />
            </div>
        </div>
    );
}
