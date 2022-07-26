//? Required
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { useState } from "react";
import { observer } from "mobx-react";
import FrontPageController from "../../../mobx/controller/profileSection/frontPageController";
//? Comp
const AccountPasswords = observer((props) => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState({ pass: "", checkPass: "" });
    const store = new FrontPageController();
    const sendData = () => {
        if (oldPass !== "" || newPass.pass !== "") {
            store.add({ old_pass: oldPass, new_pass: newPass.pass });
        }
    };
    return (
        <>
            <div className="flexY mt-6 w-full max-w-[25rem] gap-y-6 ">
                <Input
                    type="password"
                    placeholder="Old Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setOldPass(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="New Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setNewPass({ ...newPass, pass: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Re-enter New Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setNewPass({ ...newPass, checkPass: e.target.value })}
                />
            </div>
            <Button
                type="primary"
                onClick={() => sendData()}
                className="btn-primary mx-auto mt-6 w-full max-w-md lg:w-fit lg:max-w-none"
            >
                Save Changes
            </Button>
        </>
    );
});
export default AccountPasswords;
