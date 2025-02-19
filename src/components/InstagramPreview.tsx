import { useEffect } from "react";
import Head from "next/head";

export default function InstagramPreview() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <Head>
                <title>Instagram Preview | Bloombooth</title>
            </Head>
            <div className="flex">
                <div className="elfsight-app-10da69e9-3c4c-48c8-b773-d11d0e2bc4b8"></div>
            </div>
        </>
    );
}
