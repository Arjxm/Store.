import Navbar from "../components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Home";

export default function Home() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element={<Main/>}/>

        </Routes>
    </BrowserRouter>
  )
}
