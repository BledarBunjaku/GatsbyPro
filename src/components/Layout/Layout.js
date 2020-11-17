import React from "react";
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) =>
    (
        <div className="container">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
export default Layout;
