import { useEffect, useRef, useState } from "react";

export const useLazy = (threshold: number) => {
    const ref = useRef<null | HTMLElement>(null);
    const [inViewPort, setInViewPort] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setInViewPort(true);

                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold,
            }
        );

        observer.observe(ref.current);

        () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return { ref, inViewPort };
};
