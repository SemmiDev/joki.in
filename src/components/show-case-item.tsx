import { animated, useSpring } from '@react-spring/web';
import { YoutubeIcon } from './icons';

export type ShowcaseItemProps = {
    key: number;
    title: string;
    link?: string;
    image: React.ImgHTMLAttributes<HTMLImageElement>['src'];
};

function ShowcaseItem({
    key,
    link = 'https://www.youtube.com/channel/UCf9eTh_WEnl2NV2ii-F2OZQ',
    title,
    image,
}: ShowcaseItemProps): JSX.Element {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
    });

    const slideDown = useSpring({
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
    });

    return (
        <animated.div
            style={{ ...fade, ...slideDown }}
            className='w-full shadow-xl card'
        >
            <div className='p-1 text-left card-body'>
                <h1 className='flex gap-2 p-2 mt-3 text-lg font-extrabold text-justify text-transparent uppercase bg-black rounded-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                    <a target='_blank noreferrer' href={link}>
                        <YoutubeIcon />
                    </a>
                    {title}
                </h1>
            </div>
            <figure className='p-1'>
                <img src={image} alt={title} className='rounded-xl' />
            </figure>
        </animated.div>
    );
}

export default ShowcaseItem;
