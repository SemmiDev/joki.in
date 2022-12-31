function Text({ title = '' }) {
    const bg = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500',
    ];

    const random = () => Math.floor(Math.random() * bg.length);

    return (
        <a
            href={`/order?title=${title}`}
            className={`rounded-full
            hover:bg-transparent
            hover:text-white
            duration-300
            hover:cursor-pointer
            ease-in-out
            text-xs px-2 py-1 break-all text-slate-900 font-semibold ${
                bg[random()]
            } border-dashed border-1 border`}
        >
            {title}
        </a>
    );
}

export default Text;
