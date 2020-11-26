import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

const Layout = ({children}) => {
    return (
        <>
            <nav id="navbar">
                <SearchBar />
            </nav>
            <section id="main">
                <div id="main-container">
                    {children}
                </div>
            </section>   
        </>
    )
}

export default Layout;