//? Icons
import { LogOutIcon, NotificationIcon, MailIcon } from "../../ui/NavIcons";

//? Comp
export default function MobileNavUser({ user }) {
    return (
        <div className="flexXEnd w-full gap-x-4 justify-self-end">
            <div className="flexX gap-x-3">
                <LogOutIcon />
                <NotificationIcon />
                <MailIcon />
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <p className="m-0 font-semibold">{user.name}</p>
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
