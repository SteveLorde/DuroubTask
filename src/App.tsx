import './App.css'
import Navbar from "./components/navbar/navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/footer.tsx";

function App() {



  return (
    <>
        <div className={"flex flex-col items-center"}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}

export default App
