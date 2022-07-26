//? AntD
import Input from "antd/lib/input";

//? Icons
import { ProfileEditIcon, UserCardIcon } from "../../ui/ProviderProfileIcons";

export default function ProfileHeader({ user, setIsActive }) {
    return (
        <header className="flexYTopLeft mt-5 w-full gap-y-7 lg:mt-0">
            <div className="flexXBetween w-full">
                <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                    <UserCardIcon />
                </button>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-items-center gap-x-6 justify-self-center lg:grid-cols-[100px_1fr]">
                <div className="relative w-fit">
                    <img src={user.image} alt={user.name} className="rounded-full" />
                    <button className="hOpacity absolute right-0 bottom-0">
                        <ProfileEditIcon />
                    </button>
                </div>
                <div className="mt-5 grid w-full grid-cols-1 grid-rows-2 items-center gap-y-5 gap-x-5 justify-self-center lg:mt-0 lg:max-w-none lg:grid-cols-2">
                    <Input placeholder="Host Name" className="rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Host Surname" className="rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Phone" className="rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Email" className="rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                </div>
            </div>
        </header>
    );
}
