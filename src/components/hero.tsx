import { animated, useSpring } from '@react-spring/web';

function Hero(): JSX.Element {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const slideUp = useSpring({
        from: { transform: 'translateY(100px)' },
        to: { transform: 'translateY(0px)' },
    });

    const slideDown = useSpring({
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
    });

    const slideLeft = useSpring({
        from: { transform: 'translateX(100px)' },
        to: { transform: 'translateX(0px)' },
    });

    const slideRight = useSpring({
        from: { transform: 'translateX(-100px)' },
        to: { transform: 'translateX(0px)' },
    });

    return (
        <div className='mb-12'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <animated.h1
                    style={{ ...fade, ...slideDown }}
                    className='mt-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
                >
                    joki.in
                </animated.h1>
                <animated.p
                    style={{ ...fade, ...slideUp }}
                    className='text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
                >
                    Fast, Cheap & Satisfying
                </animated.p>
            </div>
            <div className='flex items-center justify-center mt-5'>
                <animated.div
                    style={{ ...fade, ...slideLeft }}
                    className='flex-1 h-[1px] bg-pink-300'
                ></animated.div>

                <animated.div
                    style={{ ...fade, ...slideUp }}
                    className='flex-none w-2 h-2 mx-2  text-pink-300 bg-pink-300 rounded-full'
                ></animated.div>

                <animated.div
                    style={{ ...fade, ...slideRight }}
                    className='flex-1 h-[1px] bg-pink-300'
                ></animated.div>
            </div>
        </div>
    );
}

export default Hero;
