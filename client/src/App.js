import { BrowserRouter, Routes, Route} from 'react-router-dom';

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// scroll to top component
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route exact path="/shirts" element={ <Shirts />}/>
        <Route exact path="/shoes" element={<Shoes />} />
        <Route exact path="/headphones"  element={    <HeadPhones />}/>

        {/*</Route>*/}
        {/*<Route exact path="/about">*/}
        {/*  <About />*/}
        {/*</Route>*/}
        {/*<Route exact path="/contact">*/}
        {/*  <Contact />*/}
        {/*</Route>*/}
        {/*<Route exact path="/cart">*/}
        {/*  <Cart />*/}
        {/*</Route>*/}
        {/*<Route exact path="/products">*/}
        {/*  <AllProducts />*/}
        {/*</Route>*/}
        <Route  path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={ <Error />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
