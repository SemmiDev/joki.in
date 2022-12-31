import { animated, useSpring } from '@react-spring/web';

function Text({ title = '' }) {
    const randomTime = () => Math.floor(Math.random() * 1000) + 200; // 0.2 - 1.2 seconds

    const slideDown = useSpring({
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
        config: { duration: randomTime() },
    });

    const slideUp = useSpring({
        from: { transform: 'translateY(100px)' },
        to: { transform: 'translateY(0px)' },
        config: { duration: randomTime() },
    });

    const slideLeft = useSpring({
        from: { transform: 'translateX(100px)' },
        to: { transform: 'translateX(0px)' },
        config: { duration: randomTime() },
    });

    const slideRight = useSpring({
        from: { transform: 'translateX(-100px)' },
        to: { transform: 'translateX(0px)' },
        config: { duration: randomTime() },
    });

    const randomSlide = () => {
        const random = Math.floor(Math.random() * 4);
        if (random === 0) {
            return slideDown;
        } else if (random === 1) {
            return slideUp;
        }
        if (random === 2) {
            return slideLeft;
        }
        return slideRight;
    };

    const bg = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500',
    ];

    const random = () => Math.floor(Math.random() * bg.length);

    return (
        <animated.a
            style={{ ...randomSlide() }}
            href={`/order?title=${title}`}
            className={`rounded-full
            hover:bg-transparent
            hover:text-white
            duration-300
            hover:cursor-pointer
            ease-in-out
            text-xs px-2 py-1 break-all text-slate-900 font-semibold ${
                bg[random()]
            } border-dashed border-1 border`}
        >
            {title}
        </animated.a>
    );
}

export default Text;
