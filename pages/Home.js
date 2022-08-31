import Navbar from "../components/Navbar/Navbar";
import {Footer} from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";

export default function Main(){
    return(
        <>
            <div>
                <Navbar/>
                <Header/>
                        <div className="bg-white">
                            <div className="max-w-2xl mx-auto pb-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                    <h1>Products</h1>
                                    {/*/!*{products.map(product => {*!/*/}
                                    {/*/!*    return(*!/*/}
                                    {/*/!*        <Product product={product} key={product._id}/>*!/*/}
                                    {/*/!*    )*!/*/}
                                    {/*})}*/}
                                </div>
                            </div>
                        </div>
                <Footer/>
            </div>
        </>
    )
}