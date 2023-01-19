import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes} 
        from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route exact path='/' element={<Landing/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
