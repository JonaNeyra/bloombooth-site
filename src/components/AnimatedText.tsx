import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }: { text: string }) {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
    }, []);

    return <h1 ref={textRef} style={{ color: "#FECEA8" }}>{text}</h1>;
}
