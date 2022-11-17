import React from "react";
import {  useNavigate } from "react-router-dom";

function Home(props){

    const navigate = useNavigate();

    function goTo(route) {
       navigate(route);
        
      }

    return(
        <div style={{ textAlign: "center" }}>
            <nav
        className="navbar navbar-light justify-content-between"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <span
            className="navbar-brand h1"
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "25px",
            }}
          >
            Logo
          </span>
          <form className="form-inline" >
          <div className="row">
                <div className="col">
                <button  onClick={() => goTo("/home")}  className="btn btn-danger">
                    Home
                </button>
                </div>
                <div className="col"> 
                <button  onClick={() => goTo("/login")} className="btn btn-light">
                       Login
                </button>
         </div>
            </div>
          </form>
        </div>
      </nav>
   
        </div>
    )

}
export default Home;