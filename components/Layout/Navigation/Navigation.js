//? Components
import NavMenu from "./NavMenu";

//? ui
import Logo from "../../ui/Logo";
import NavUser from "./NavUser";

//? Comp
export default function Navigation() {
    return (
        <nav className="w-full px-4">
            <div
                className="
                mx-auto grid w-full max-w-6xl grid-cols-[1fr_2fr_1.5fr] items-center 
                justify-items-center"
            >
                <Logo className="justify-self-start" />
                <NavMenu />
                <NavUser className="justify-self-end" />
            </div>
        </nav>
    );
}
