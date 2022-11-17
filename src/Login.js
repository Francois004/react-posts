import React from "react";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function Login(props){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const [emailError, setEmailError]=useState(false)
    const [passError, setPassError]=useState(false)
   


    function  validateEmail(email){
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if(result===true){
            setEmailError(false)
         
        } else{
            setEmailError(true)
        }
      }

    function checkForm(){
        validateEmail(email);
    
        if(password==='' || password===null){
            setPassError(true)
             
           } else {
             setPassError(false)
           }
    }
     
  
   function saveLogin(){
    localStorage.setItem("mail", email)
    localStorage.setItem("password", password)
   }
   function getLogin(){
    const mail=localStorage.getItem("mail")
    const pass=localStorage.getItem("password")
    console.log(mail,pass)
    setEmail(mail)
    setPassword(pass)
   }

    function handleSubmit(e) {
      e.preventDefault();

    
      if(email && password){
        navigate("/posts")
     
        saveLogin()
      }else{
        
      }
    
    }
    const navigate = useNavigate();

    function goTo(route) {
       navigate(route);
        
      }
    useEffect(() => {
        // mail && pass
        if(email || password)
       checkForm()
        }, [email,password]);

    useEffect(() => {
        //get Input
         getLogin()
    }, []);
    


    return (
      <div >
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
                <button  onClick={() => goTo("/home")} className="btn btn-light">
                       Home
                </button>
                  </div>
                <div className="col"> 
                <button  onClick={() => goTo("/login")} className="btn btn-danger">
                       Login
                </button>
         </div>
         </div>
          </form>
        </div>
      </nav>
       
              <div className="row m-5">
                <div className="col-4"></div>
                <div className="col ">
                    <div className="card h-100">
                        <div className="card-title">
                       <h3 className="fw-bold m-3 ">Login</h3>
                        </div>
                <div className="card-body">
                  
              <form onSubmit={(e) => handleSubmit(e)} >
                <div className="row m-3">
                  <div className="col">
                    <h6 htmlFor="FormControlInput1" className="fw-bold">
                      Email {" "}
                    </h6>
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      placeholder="email@example.com"
                      id="FormControlInput1"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                   
                </div>
                  </div>
                  <div>
                  {emailError ? <span style={{color: "red"}}>Please enter valid email address</span> : ''}
                </div>
                <div className="row m-3">
                  <div className="col">
                    <h6 htmlFor="FormControlInput2" className="fw-bold">
                     Password{" "}
                    </h6>
                    <input
                      type="password"
                      value={password}
                      className="form-control"
                      placeholder="password"
                      id="FormControlInput2"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  {passError ? <span style={{color: "red"}}>Please enter some value</span> : ''}
                </div>
                <div className="row m-3">
                  <div className="col">
                   
                      <button type="submit" className="btn btn-danger btn-lg btn-block w-100" disabled={emailError||passError}>
                       Login
                      </button>
               
                  </div>
                  </div>
                  
              </form>
              </div>
              </div>
              </div>
              <div className="col-4"></div>
            </div>
      </div>
    );
  }
  export default Login;
  