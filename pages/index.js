//? Required
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function HomePage() {
    const router = useRouter();
    useEffect(() => {
        function redirect() {
            router.replace("/profile-provider");
        }
        redirect();
    }, []);
}
