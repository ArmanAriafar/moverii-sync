//? Required
import Switch from "antd/lib/switch";

export default function NotificationCard() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <>
            <article className="flexXBetween w-full gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                <p>Receive relevant updates from the moverii team :</p>
                <Switch defaultChecked onChange={onChange} />
            </article>
            <article className="flexXBetween w-full gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                <p>Receive relevant statistics from your moverii account :</p>
                <Switch defaultChecked onChange={onChange} />
            </article>
            <article className="flexXBetween w-full gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                <p>Receive email notifications for new ratings :</p>
                <Switch defaultChecked onChange={onChange} />
            </article>
            <article className="flexXBetween w-full gap-x-10 py-6 text-base font-medium text-gray-900">
                <p>Receive email notifications to keep your offers up to date :</p>
                <Switch defaultChecked onChange={onChange} />
            </article>
        </>
    );
}
