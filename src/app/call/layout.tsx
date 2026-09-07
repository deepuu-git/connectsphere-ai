interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="h h-screen bg-black">
            {children}
        </div>
    );
};

export default Layout;