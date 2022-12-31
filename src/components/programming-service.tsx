import Text from './text';

import { Programming } from './images';
import { animated, useSpring } from '@react-spring/web';

const languages = [
    'Java',
    'C/C++',
    'Python',
    'Go',
    'PHP',
    'HTML / CSS',
    'Tailwind / Bootstrap',
    'React JS',
    'Javascript',
    'Typescript',
    'Rust',
    'Data Structure',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'Scikit-Learn',
    'ML',
    'Kotlin',
    'RESTful API',
    'go gRPC',
    'Lain-lain',
];

function ProgrammingService() {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
    });

    const slideLeft = useSpring({
        from: { transform: 'translateX(100px)' },
        to: { transform: 'translateX(0px)' },
    });

    return (
        <animated.div
            style={{ ...fade, ...slideLeft }}
            className='w-full max-w-2xl mt-5 shadow-xl card image-full border border-1 border-pink-500/40 rounded-2xl overflow-hidden'
        >
            <figure>
                <img
                    src={Programming}
                    alt='bg-pemrograman'
                    className='object-cover'
                />
            </figure>
            <div className='card-body'>
                <h2 className='mb-5 card-title'>Joki Pemrograman</h2>
                <div className='flex flex-wrap gap-2'>
                    {languages.map((language, index) => {
                        return <Text key={index} title={language} />;
                    })}
                </div>
            </div>
        </animated.div>
    );
}

export default ProgrammingService;
