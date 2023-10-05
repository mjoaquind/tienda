import NavBar from './NavBar'
const Layout = ({children}) => {
    return(
        <>
            <header>
                <NavBar />
            </header>
            <main className='container'>
                {children}
            </main>
        </>
    )
}

export default Layout;