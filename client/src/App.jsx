import { EthProvider } from "./contexts/EthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";


function App() {
  return (
    <EthProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </EthProvider>
  );
}

export default App;
