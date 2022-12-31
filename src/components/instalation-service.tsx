import { animated, useSpring } from '@react-spring/web';
import { Technician } from './images';
import Text from './text';

const services = [
    'Install ulang windows semua versi',
    'Install office semua versi',
    'Service laptop / PC',
    'Install sofware',
    'Pasang/Upgrade RAM, SSD',
    'Fix windows',
    'Lain-lain',
];

function InstalationService(): JSX.Element {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
    });

    const slideRight = useSpring({
        from: { transform: 'translateX(-100px)' },
        to: { transform: 'translateX(0px)' },
    });

    return (
        <animated.div
            style={{ ...fade, ...slideRight }}
            className='w-full max-w-2xl mt-5 shadow-xl card border border-1 image-full border-pink-500/40 rounded-2xl overflow-hidden'
        >
            <figure>
                <img
                    src={Technician}
                    alt='bg-technician'
                    className='object-cover'
                />
            </figure>
            <div className='card-body'>
                <h2 className='mb-5 card-title'>Jasa Instalasi</h2>
                <div className='flex flex-wrap gap-2'>
                    {services.map((service, index) => {
                        return <Text key={index} title={service} />;
                    })}
                </div>
            </div>
        </animated.div>
    );
}

export default InstalationService;
