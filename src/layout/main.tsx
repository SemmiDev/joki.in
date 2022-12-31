type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps): JSX.Element {
    return (
        <div className='w-full min-h-screen bg-black'>
            <main className='w-full max-w-2xl px-2 antialiased mx-auto text-xs'>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
