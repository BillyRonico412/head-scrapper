import { FaCopy } from "react-icons/fa";
import { notyf } from "../utils";

type Props = {
    head: string;
    body: string;
    link?: boolean;
};

const Card = (props: Props) => {
    const onClickCopy = () => {
        navigator.clipboard.writeText(props.body);
        notyf.success("Copied!")
    };
    return (
        <div className="border rounded overflow-hidden">
            <div className="bg-gray-600 text-white font-bold py-1 px-4 flex">
                <span>{props.head}</span>
                <button className="ml-auto" onClick={onClickCopy}>
                    <FaCopy />
                </button>
            </div>
            <div className="py-2 px-4 text-gray-600">
                {!props.link ? (
                    props.body
                ) : (
                    <a
                        href={props.body}
                        className="text-blue-600 underline"
                        target={"_blank"}
                    >
                        {props.body}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
