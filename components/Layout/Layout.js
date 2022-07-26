//? Components
import Navigation from "./Navigation/Navigation";

//? Comp
export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}
