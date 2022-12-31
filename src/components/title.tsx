function Title({ title = '' }) {
    return (
        <h1 className='p-2 my-3 mt-5 text-xl font-semibold text-center text-transparent bg-black rounded-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            {title}
        </h1>
    );
}

export default Title;
