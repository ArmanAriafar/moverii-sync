//? Required
import { useState } from "react";
import { Menu } from "antd";

//? Icons
import { HomeIcon, BookingIcon, MessagesIcon, AvaillabilitiesIcon, MoreIcon } from "../../ui/NavIcons";

const items = [
    {
        label: "Home",
        key: "home",
        icon: <HomeIcon />,
    },
    {
        label: "Booking",
        key: "booking",
        icon: <BookingIcon />,
    },
    {
        label: "Messages",
        key: "messages",
        icon: <MessagesIcon />,
    },
    {
        label: "Availlabilities",
        key: "availlabilities",
        icon: <AvaillabilitiesIcon />,
    },
    {
        label: "More",
        key: "more",
        icon: <MoreIcon />,
        children: [
            { label: "Something", key: "something" },
            { label: "Something Else", key: "somethingElse" },
        ],
    },
];

export default function NavMenu() {
    const [current, setCurrent] = useState("home");

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return <Menu className="font-normal" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
