import React from 'react';

const Footer = () => (

        <footer className="">
            {/*Parent Div*/}
            <div className='flex justify-between align-middle p-7'>
                {/*LEFT SIDE CHILD*/}
                <div className='flex justify-between space-x-32'>
                    <div>
                        <ul className="">
                            <li className= "m-2">Shop</li>
                            <li className= "m-2">Blog</li>
                            <li className= "m-2">About</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="">
                            <li className= "m-2">Shipping and delivery</li>
                            <li className= "m-2">Payment methods</li>
                            <li className= "m-2">Return and refund</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="">
                            <li className= "m-2">Terms & Conditions</li>
                            <li className= "m-2">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                {/*RIGHT KID*/}
                <div className='align-baseline'>
                    <ul className="flex">
                        <li className= "m-2">Instagram</li>
                        <li className= "m-2">Twitter</li>
                        <li className= "m-2">Facebook</li>
                    </ul>
                </div>


            </div>

            <div className='bg-black h-48'>
                <h1 className='text-emerald-50'>Logo</h1>
                <div className='align-baseline'>
                    <small><p className='text-white'>Design by Arjun © 2023.</p></small>
                </div>
            </div>
        </footer>


);

export default Footer;