import { animated, useSpring } from '@react-spring/web';
import { Faren, Sammi, Willy } from './images';

function Team() {
    const photoClass = `w-36 h-56 border border-[1px] shadow-sm hover:shadow-lg transition duration-75 ease-linear shadow-yellow-300 group-hover:scale-110 object-cover  rounded-lg group-hover:opacity-100 opacity-70 group-hover:shadow-pink-400`;

    const slideRight = useSpring({
        from: { transform: 'translateX(-100px)' },
        to: { transform: 'translateX(0px)' },
        config: { duration: 900 },
    });

    const slideBottom = useSpring({
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
        config: { duration: 1000 },
    });

    const slideLeft = useSpring({
        from: { transform: 'translateX(100px)' },
        to: { transform: 'translateX(0px)' },
        config: { duration: 900 },
    });

    return (
        <div className='flex my-12 max-w-xs px-3 gap-3 mx-auto'>
            <animated.a
                style={{ ...slideRight }}
                href='#'
                className='relative block group'
            >
                <img src={Willy} alt='willy' className={photoClass} />
                <div className='absolute inset-0 group-hover:flex flex-col items-start justify-end p-2 hidden'>
                    <span className='mt-2 inline-block bg-black p-1 text-xs  text-white'>
                        Mr. Wil
                    </span>
                </div>
            </animated.a>
            <animated.a
                style={{ ...slideBottom }}
                target={'_blank noopener noreferrer'}
                href='https://sammidev.codes'
                className='relative block group'
            >
                <img src={Sammi} alt='sammi' className={photoClass} />
                <div className='absolute inset-0 group-hover:flex flex-col items-start justify-end p-2 hidden'>
                    <span className='mt-2 inline-block bg-black p-1 text-xs  text-white'>
                        Mr. Sam
                    </span>
                </div>
            </animated.a>
            <animated.a
                style={{ ...slideLeft }}
                href='#'
                className='relative block group'
            >
                <img src={Faren} alt='faren' className={photoClass} />
                <div className='absolute inset-0 group-hover:flex flex-col items-start justify-end p-2 hidden'>
                    <span className='mt-2 inline-block bg-black p-1 text-xs  text-white'>
                        Mr. Ren
                    </span>
                </div>
            </animated.a>
        </div>
    );
}

export default Team;
