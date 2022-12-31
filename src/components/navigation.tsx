import { HomeIcon, OrderIcon } from './icons';

function Navigation({ active = 'home' }) {
    const homeTextColor = active === 'home' ? 'text-white' : '';
    const orderTextColor = active === 'order' ? 'text-white' : '';

    return (
        <div className='sticky z-50 w-full bg-black top-16 form-control'>
            <div className='flex justify-around w-full max-w-sm mx-auto my-5 bg-black'>
                <a href='/' className='flex flex-col items-center gap-2'>
                    <HomeIcon active={active} />
                    <span className={`text-xs ${homeTextColor}`}>Home</span>
                </a>
                <a href='/order' className='flex flex-col items-center gap-2'>
                    <OrderIcon active={active} />
                    <span className={`text-xs ${orderTextColor}`}>Order</span>
                </a>
            </div>
        </div>
    );
}

export default Navigation;
