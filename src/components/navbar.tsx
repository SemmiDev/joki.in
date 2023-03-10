import { LogoIcon, OrderIcon } from './icons';

function Navbar() {
    return (
        <div className='sticky top-0 z-50 max-w-2xl mx-auto  navbar'>
            <div className='flex-1'>
                <a
                    href='/'
                    className='text-xl normal-case text-white btn btn-ghost'
                >
                    <LogoIcon />
                    joki.in
                </a>
            </div>
            <div className='mr-2 navbar-end'>
                <a href='/order'>
                    <OrderIcon />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
