import Footer from '../components/footer';

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps): JSX.Element {
    return (
        <div className='min-h-screen w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
            <main className='max-w-2xl sm:px-6 md:px-12 mx-auto px-2 antialiased text-xs'>
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default MainLayout;
