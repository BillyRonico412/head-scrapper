import Card from "./Card";

type Props = {
    title: string;
    description: string;
    banner: string;
};

const Metadata = (props: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <Card head="Title" body={props.title} />
            <Card head="Description" body={props.description} />
            <Card head="Banner" body={props.banner} link/>
        </div>
    );
};

export default Metadata;
