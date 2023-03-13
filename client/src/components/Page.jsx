import React from 'react';
import Navbar from "./Navbar/Navbar";

const Page = ({children}) => {
    return(
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    )
};

export default Page;