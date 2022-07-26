//? Required
import Input from "antd/lib/input";

//? Comp
export default function ProfileProviderTeaser() {
    const { TextArea } = Input;
    return (
        <section className="flexYTopLeft w-full items-center gap-y-4 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">
                Provider teaser <span className="font-medium text-gray-300">The explanatory sentence is here.</span>
            </h2>
            <TextArea rows={3} className="rounded-[1.25rem]" />
        </section>
    );
}
