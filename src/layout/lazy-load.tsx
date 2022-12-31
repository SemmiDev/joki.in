import React, { useState, useEffect, useRef } from 'react';

type MyLazyLoadedComponentProps = {
    children: React.ReactNode;
};

function LazyLoadComponent({
    children,
}: MyLazyLoadedComponentProps): JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const element = useRef<Element>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // @ts-ignore
                    observer.unobserve(element.current);
                }
            });
        });
        if (element.current) {
            observer.observe(element.current);
        }
        // @ts-ignore
        observer.observe(element.current);
        // @ts-ignore
        return () => observer.unobserve(element.current);
    }, []);

    // @ts-ignore
    return <div ref={element}>{isVisible && children}</div>;
}

export default LazyLoadComponent;
