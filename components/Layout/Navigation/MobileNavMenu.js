//?Icons
import { HomeIcon, BookingIcon, MessagesIcon, MoreIcon } from "../../ui/NavIcons";

//? Comp
export default function MobileNavMenu() {
    return (
        <nav className="fixed bottom-0 left-0 border-t border-primary-500 z-[200] grid w-full grid-cols-4 items-center justify-items-center bg-white py-4">
            <HomeIcon />
            <BookingIcon />
            <MessagesIcon />
            <MoreIcon />
        </nav>
    );
}
