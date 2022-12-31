type ContentLayoutProps = {
    children: React.ReactNode[];
};

function ContentLayout({ children }: ContentLayoutProps): JSX.Element {
    return <div className='max-w-2xl sm:px-6 md:px-12'>{children}</div>;
}

export default ContentLayout;
