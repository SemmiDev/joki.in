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
                    observer.unobserve(element.current);
                }
            });
        });
        if (element.current) {
            observer.observe(element.current);
        }
        observer.observe(element.current);
        return () => observer.unobserve(element.current);
    }, []);

    return <div ref={element}>{isVisible && children}</div>;
}

export default LazyLoadComponent;
