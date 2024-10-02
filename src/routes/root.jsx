import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      
        <Header/>
        <div id="detail">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    );
  }