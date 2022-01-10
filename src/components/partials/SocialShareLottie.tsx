import {useEffect, useRef} from "react";
import lottie from "lottie-web";

function SocialShareLottie({data}: { data: any }) {
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current!,
            renderer: "svg",
            loop: true,
            autoplay: false,
            animationData: data
        });

        return () => {
            lottie.destroy();
        };
    }, []);

    return (
            <div
                ref={container}
                onMouseEnter={() => lottie.play()}
                onMouseLeave={() => lottie.stop()}
            />
    );
}

export default SocialShareLottie;
