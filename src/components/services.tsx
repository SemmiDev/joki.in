import Text from './text';

import { Programming } from './images';
import { animated, useSpring } from '@react-spring/web';

const languages = [
    'Java',
    'C/C++',
    'Python',
    'Go',
    'PHP',
    'HTML/CSS',
    'Tailwind/Bootstrap',
    'React JS',
    'Javascript',
    'Typescript',
    'Rust',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'MongoDB',
    'ML',
    'Kotlin',
    'RESTful',
    'Pelatihan',
];

const services = [
    'Install ulang windows semua versi',
    'Install office semua versi',
    'Service laptop / PC',
    'Install sofware',
    'Pasang/Upgrade RAM, SSD',
    'Fix windows',
    'Lain-lain',
];

function Services() {
    const randomTime = () => Math.floor(Math.random() * 1000) + 300; // 1 - 2 seconds

    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: randomTime() },
    });

    const slideDown = useSpring({
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
        config: { duration: randomTime() },
    });

    return (
        <animated.div
            style={{ ...fade, ...slideDown }}
            className='w-full max-w-2xl flex flex-wrap justify-center items-center gap-2 mt-5 rounded-xl p-5 overflow-hidden'
        >
            {languages.map((language, index) => {
                return <Text key={index} title={language} />;
            })}

            {services.map((service, index) => {
                return <Text key={index} title={service} />;
            })}
        </animated.div>
    );
}

export default Services;
