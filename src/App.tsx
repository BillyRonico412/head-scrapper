import axios from "axios";
import "notyf/notyf.min.css";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Metadata from "./components/Metadata";
import { MetadataType, notyf } from "./utils";

const App = () => {
    const [url, setUrl] = useState<string>("");
    const [metadata, setMetadata] = useState<MetadataType | null>(null);
    const onClickGetMetadata = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_URL_BACK, {
                params: { url },
            });
            setMetadata(res.data as MetadataType);
            notyf.success("Successed!");
        } catch (err) {
            setMetadata(null);
            notyf.error("Wrong Url!");
        }
    };
    return (
        <div className="container mx-auto px-4 py-8 flex flex-col gap-y-8 min-h-screen">
            <h1 className="text-center font-bold text-xl">
                Head Scrapper HTML
            </h1>
            <div className="flex flex-col gap-4 items-center">
                <input
                    type="text"
                    className="shadow border w-full rounded py-1 px-4 text-center text-sm text-gray-600 font-light"
                    placeholder="https://url.com"
                    onInput={(e) => setUrl(e.currentTarget.value)}
                />
                <button
                    className="bg-blue-600 px-4 py-1 w-64 rounded text-white font-bold shadow"
                    onClick={onClickGetMetadata}
                >
                    Get Metadata
                </button>
            </div>
            <div>
                {metadata && (
                    <Metadata
                        title={metadata.title}
                        description={metadata.description}
                        banner={metadata.banner}
                    />
                )}
            </div>
            <div className="mt-auto text-gray-600 text-center flex items-center justify-center gap-x-2">
                Created by{" "}
                <a
                    href="https://github.com/BillyRonico412"
                    className="text-blue-600 underline"
                >
                    Ronico BILLY
                </a>{" "}
                <FaGithub />
            </div>
        </div>
    );
};

export default App;
