import React from 'react';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Page = ({children}) => {
    return(
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
};

export default Page;