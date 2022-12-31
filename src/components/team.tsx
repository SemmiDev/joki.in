import { Faren, Sammi, Willy } from './images';

function Team() {
    return (
        <div className='flex flex-col max-w-xs gap-3 mx-auto'>
            <a href='https://sammidev.codes' className='relative block group'>
                <img
                    src={Sammi}
                    alt='sammi'
                    className='h-[350px] w-full group-hover:scale-95 object-cover transition rounded-lg duration-500 group-hover:opacity-90 sm:h-[450px]'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                        Sammi Aldhi Yanto
                    </h3>

                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase border border-pink-500 rounded-lg tracking-wide text-white'>
                        Software Engineer
                    </span>
                </div>
            </a>{' '}
            <a href='/' className='relative block group'>
                <img
                    src={Willy}
                    alt='Willy'
                    className='h-[350px] w-full group-hover:scale-95 object-cover transition rounded-lg duration-500 group-hover:opacity-90 sm:h-[450px]'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                        Willy Astra
                    </h3>

                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase border-pink-500 border rounded-lg tracking-wide text-white'>
                        Technician
                    </span>
                </div>
            </a>{' '}
            <a href='/' className='relative block group'>
                <img
                    src={Faren}
                    alt='Faren'
                    className='h-[350px] w-full object-cover group-hover:scale-95 transition rounded-lg duration-500 group-hover:opacity-90 sm:h-[450px]'
                />

                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                        M Fachren
                    </h3>

                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase border-pink-500 border rounded-lg tracking-wide text-white'>
                        Software Engineer
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Team;
